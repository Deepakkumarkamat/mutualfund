import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
showDepositCard:boolean=true;
showWithdrawCard:boolean=false;
showTransactionList:boolean=false;
  showDeposit(){
   this.showDepositCard = true;
   this.showWithdrawCard = false;

  }
  showWithdraw(){
    this.showWithdrawCard =true;
    this.showDepositCard = false;
  }

  showTransaction(){
    this.showTransactionList = !this.showTransactionList;
    // this.showTransactionList = false;

  }

}
