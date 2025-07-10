import { Injectable } from '@angular/core';
import { TariffComparison } from '../models/tariff-comparison.model';
import { TariffComparisonRequest } from '../models/tariff-comparison.request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TariffComparisonResponse } from '../models/tariff-comparison.response.model';


@Injectable({
  providedIn: 'root'
})
export class TariffComparisonService {

  private apiUrl = "https://tariffcomparisonapp.azurewebsites.net"
  private tariffComparison: TariffComparison[] = [];
  private tariffComparisonRequest: TariffComparisonRequest[] = [];
  constructor(private http: HttpClient) {
    
  }

  getAllTariffs(): Observable<{ rows:TariffComparison[]}> {
    return this.http.get<{ rows:TariffComparison[]}>(`${this.apiUrl}/api/readtariffs`);
  }
  
  getFilteredTariffs(tariffComparisonRequest: TariffComparisonRequest): Observable<{ rows:TariffComparisonResponse[]}> {
    return this.http.post<{ rows : TariffComparisonResponse[]}>(`${this.apiUrl}/api/comparetariffs`, tariffComparisonRequest);
  }
}
