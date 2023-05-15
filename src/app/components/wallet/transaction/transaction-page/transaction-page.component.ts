import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})
export class TransactionPageComponent {
  transaction:any
    

constructor(private api:WalletService,private apii:ApiService){}
ngOnInit(){
  this.apii.transactionHistory = this.transaction
  console.log(this.transaction)
}

  


}
