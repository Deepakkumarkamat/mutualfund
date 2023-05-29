import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';
import { TransactionPageComponent } from '../../transaction/transaction-page/transaction-page.component';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-deposit-page',
  templateUrl: './deposit-page.component.html',
  styleUrls: ['./deposit-page.component.css']
})
export class DepositPageComponent {

@Output() balance= new EventEmitter<any>()
  moneyToWallet:any[]=[]
  add_balance:number | any;
  constructor(private api:WalletService,private apii:ApiService){}
  ngOnInit() {

    // this.api.addMoney(1,this.add_balance).subscribe((res:any)=>{
    //   this.moneyToWallet = res;
    //   console.log(this.moneyToWallet);

    // })
    // console.log(this.add_balance)

  }
  addMoneyToWallet(){
    this.api.addMoney(39,this.add_balance).subscribe((res:any)=>{
      alert(res);
this.balance.emit(res)
      // window.location.reload();
    })

  }
  transactionHistory(){
    this.api.addTransactionHistory(1,1,this.add_balance,1).
    subscribe((res=>{
      // console.log(this.transaction)
      // alert(res);
    }))
  }


}
