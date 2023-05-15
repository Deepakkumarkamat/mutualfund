import { Component } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  showDepositCard:boolean=true;
showWithdrawCard:boolean=false;
showTransactionList:boolean=false;
  walletAmount:any[]=[];
  wallet={
    balance:''
  }
  constructor(private api:WalletService){}
  ngOnInit(){
    // this.api.addMoney(1,1).subscribe((res:any)=>{
    //   return this.walletAmount = res;

    // })
    
      this.api.walletBalance(1).subscribe((res:any)=>{
        return this.wallet.balance = Number(res).toFixed(2);
      })
    
    
  }

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
