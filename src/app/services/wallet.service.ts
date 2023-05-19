import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pipe } from 'rxjs';
import {baseUrl} from '../config'
@Injectable({
  providedIn: 'root'
})
export class WalletService {
  

  constructor(private http:HttpClient) { }
  
  addMoney(customerId: number, amount: number){
    const url = `http://${baseUrl}/mutualfunds/wallet/update/addMoney?customerId=${customerId}&amount=${amount}`; 
    // const body = { customerId, amount }; 
    
    const headers = { 'Content-Type': 'application/text' };
    return this.http.patch(url,{},{headers:headers, responseType:'text'});

    // return this.http.patch(url:'http://localhost:9091/mutualfunds/wallet/update/withdrawMoney?customerId=1&amount=5000',body:any,Option:'')
    // get('http://localhost:9091/mutualfunds/wallet/update/withdrawMoney?customerId=1&amount=5000').pipe(map((res:any)=>{
    //   return res;
    // }))
   

   
  }
  walletBalance(customerId: number){
    const url = `http://${baseUrl}/mutualfunds/wallet/update/getAccountBalance?customerId=${customerId}`
    // const headers = { 'Content-Type': 'application/text' };
    return this.http.get(url,{responseType:"text"})

  }
  withdrawBalance(customerId:number,amount:number){
    const url = `http://${baseUrl}/mutualfunds/wallet/update/withdrawMoney?customerId=${customerId}&amount=${amount}`;
    const headers = { 'Content-Type': 'application/text' };
    return this.http.patch(url,{},{headers:headers,responseType:'text'})
  }
  
    addTransactionHistory(customerId:number,transactionTypeId:number,amount:number,walletId:number){
      const url=`http://${baseUrl}/mutualfunds/wallet/updateTransactionHistory?customerId=${customerId}&transactionTypeId=${transactionTypeId}&walletAmount=${amount}&walletId=${walletId}`
      const headers = {'Content-Type':'application/text'}
      return this.http.patch(url,{},{headers:headers,responseType:'text'})
    }
    walletHistory(customerId:number){
      const url=`http://${baseUrl}/mutualfunds/wallet/history?customerId=${customerId}`
      return this.http.get(url)
    }

}
