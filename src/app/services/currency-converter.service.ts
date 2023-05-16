import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterService {
  private apikey: string = 'V7RJMCO5JASADEYJ';
  private to: string = 'JPY';
  private from: string = 'INR';

  constructor(private http: HttpClient) {}

  public get(to: string, from: string) {
    return this.http.get(
      `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${to}&to_currency=${from}&apikey=${this.apikey}`
    );
  }
}
