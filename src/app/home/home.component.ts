import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TariffComparisonService } from '../tariff-comparison/tariff-comparison.service';
import { TariffComparison } from '../models/tariff-comparison.model';
import { TariffComparisonRequest } from '../models/tariff-comparison.request.model';
import { TariffComparisonResponse } from '../models/tariff-comparison.response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tariffComparisonForm: FormGroup = new FormGroup({});
  tariffs: TariffComparison[] = [];
  tariffsResponse: TariffComparisonResponse[] = [];
  submitted = false;
  uniqueTypes: string[] = [];

  typeLabels: { [key: string]: string } = {
      '0': 'All',
      '1': 'Basic',
      '2': 'Packaged'
  };

  dropdownOptions = [
    { value: 'priceasc', label: 'Price: Ascending' },
    { value: 'pricedesc', label: 'Price: Descending' },
    { value: 'nameasc', label: 'Name: Ascending' },
    { value: 'namedesc', label: 'Name: Descending' },
    { value: 'typeasc', label: 'Type: Ascending' },
    { value: 'typedesc', label: 'Type: Descending' },
  ];

    
  constructor(private formBuilder: FormBuilder,
    private tariffComparisonService: TariffComparisonService
  ) {

  }

  ngOnInit() :void{
    this.tariffComparisonForm = this.formBuilder.group({
      consumption : ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      tarifftype : ['0', Validators.required],
      sortby: ['priceasc', Validators.required]
    })
  

    this.tariffComparisonService.getAllTariffs().subscribe(tariffs => {
      this.tariffs = tariffs.rows;
      const typesSet = new Set(this.tariffs.map(p => p.type));
      this.uniqueTypes = ['0', ...Array.from(typesSet).filter(t => t !== '0')];
    });
  }

  onSubmit() {
    if (this.tariffComparisonForm.valid) {
      this.submitted = true;
      console.log('Tariff Comparison submitted:', this.tariffComparisonForm.value);
      let tariff: TariffComparisonRequest = this.tariffComparisonForm.value;
      
      this.tariffComparisonService.getFilteredTariffs(tariff).subscribe(tariffs => {
        this.tariffsResponse = tariffs.rows;
      });
      console.log('Tariff Plans received:', this.tariffs);
    } else {
      console.log('Form is invalid');
    }
  }
}
