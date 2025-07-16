import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TariffComparison } from '../models/tariff-comparison.model';
import { TariffComparisonService } from '../tariff-comparison/tariff-comparison.service';

@Component({
  selector: 'app-tariff-detail',
  templateUrl: './tariff-detail.component.html',
  styleUrls: ['./tariff-detail.component.css']
})
export class TariffDetailComponent implements OnInit {
  tariffName: string | null = null;
  tariffType: string | null = null;
  tariffs: TariffComparison[] = [];
  selectedTariff: TariffComparison | undefined;
  typeLabels: { [key: string]: string } = {
      'All': '0',
      'Basic': '1',
      'Packaged': '2'
  };


  constructor(private route: ActivatedRoute,
    private tariffComparisonService: TariffComparisonService
  ) {}

  ngOnInit(): void {
    this.tariffName = this.route.snapshot.paramMap.get('tariffName');
    const tariffTypeKey = this.route.snapshot.paramMap.get('tariffType');
    this.tariffType = tariffTypeKey && this.typeLabels[tariffTypeKey] ? this.typeLabels[tariffTypeKey] : null;
    const storedTariffs = localStorage.getItem('tariffs');
    const findTariff = () => {
      console.log('Tariffs:', this.tariffs);
      this.selectedTariff = this.tariffs.find(t => t.name === this.tariffName && t.type === this.tariffType);
      console.log('Selected Tariff:', this.selectedTariff);
    };
    if (storedTariffs) {
      this.tariffs = JSON.parse(storedTariffs);
      findTariff();
    } else {
      this.tariffComparisonService.getAllTariffs().subscribe(tariffs => {
        this.tariffs = tariffs.rows;
        findTariff();
      });
    }
  }
}
