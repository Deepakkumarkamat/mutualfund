import { Component } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-withdraw-page',
  templateUrl: './withdraw-page.component.html',
  styleUrls: ['./withdraw-page.component.css']
})
export class WithdrawPageComponent {
  balancewithdraw:number=0;
 constructor(private api: WalletService){}

 withdrawMoney(){
  this.api.withdrawBalance(1,this.balancewithdraw).subscribe((res:any)=>{
    alert(res)
    window.location.reload();
  })
 }
 transactionHistory(){
  this.api.addTransactionHistory(1,2,this.balancewithdraw,1).
  subscribe((res=>{
    // console.log(this.transaction)
    alert(res);
  }))
}
}
