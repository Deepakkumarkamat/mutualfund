import { Component } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-deposit-page',
  templateUrl: './deposit-page.component.html',
  styleUrls: ['./deposit-page.component.css']
})
export class DepositPageComponent {
  moneyToWallet:any[]=[]
  constructor(private api:WalletService){}
  ngOnInit() {
    this.api.addMoney('1',1).subscribe((res:any)=>{
      this.moneyToWallet = res;
      console.log(this.moneyToWallet);

    })
  }

}
