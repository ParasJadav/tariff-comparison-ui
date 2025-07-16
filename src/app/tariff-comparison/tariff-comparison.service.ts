import { Injectable } from '@angular/core';
import { TariffComparison } from '../models/tariff-comparison.model';
import { TariffComparisonRequest } from '../models/tariff-comparison.request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TariffComparisonResponse } from '../models/tariff-comparison.response.model';


@Injectable({
  providedIn: 'root'
})
export class TariffComparisonService {

  private apiUrl = "https://tariffcomparisonapp.azurewebsites.net"
  constructor(private http: HttpClient) {
    
  }

  getAllTariffs(): Observable<{ rows: TariffComparison[] }> {
    return this.http.get<{ rows: TariffComparison[] }>(`${this.apiUrl}/api/readtariffs`).pipe(
      tap(response => {
        localStorage.setItem('tariffs', JSON.stringify(response.rows));
      })
    );
  }
  
  getFilteredTariffs(tariffComparisonRequest: TariffComparisonRequest): Observable<{ rows:TariffComparisonResponse[]}> {
    return this.http.post<{ rows : TariffComparisonResponse[]}>(`${this.apiUrl}/api/comparetariffs`, tariffComparisonRequest);
  }
}
