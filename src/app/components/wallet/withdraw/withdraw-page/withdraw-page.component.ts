import { Component, EventEmitter, Output } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-withdraw-page',
  templateUrl: './withdraw-page.component.html',
  styleUrls: ['./withdraw-page.component.css']
})
export class WithdrawPageComponent {
  @Output() balance= new EventEmitter<any>()
  balancewithdraw:number | any;
 constructor(private api: WalletService){}

 withdrawMoney(){
  this.api.withdrawBalance(39,this.balancewithdraw).subscribe((res:any)=>{
    alert(res)
    this.balance.emit(res)
    // window.location.reload();
  })
 }
 transactionHistory(){
  this.api.addTransactionHistory(1,2,this.balancewithdraw,1).
  subscribe((res=>{
    // console.log(this.transaction)
    // alert(res);

  }))
}
}
