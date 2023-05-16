import { Component } from '@angular/core';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';
@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent {
  data: any;
  toCurrency: string = 'JPY';
  fromCurrency: string = 'INR';
  fromAmount: number = 1;

  constructor(private currencyConversion: CurrencyConverterService) {}

  ngOnInit() {
    this.convert();
  }

  resetData() {
    this.data = null;
  }

  convert() {
    this.currencyConversion
      .get(this.toCurrency, this.fromCurrency)
      .subscribe((ret: any) => {
        console.log(ret);
        const exchangeRate =
          ret['Realtime Currency Exchange Rate']['5. Exchange Rate'];
        this.data = (this.fromAmount * parseFloat(exchangeRate)).toFixed(2);
      });
  }
}
