import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getStockData(e): Observable<any> {
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
    };
    return this.httpClient.get(`https://api.iextrading.com/1.0/tops?symbols=${e}` , httpOptions);
  }
}
