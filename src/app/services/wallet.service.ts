import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  

  constructor(private http:HttpClient) { }
  addMoney(customerId: string, amount: any){
    const url = `http://localhost:9091/mutualfunds/wallet/update/withdrawMoney?customerId=${customerId}&amount=${amount}`; 
    // const body = { customerId, amount }; 
    
    // const headers = { 'Content-Type': 'application/json' };
    return this.http.patch(url,amount);

    // return this.http.patch(url:'http://localhost:9091/mutualfunds/wallet/update/withdrawMoney?customerId=1&amount=5000',body:any,Option:'')
    // get('http://localhost:9091/mutualfunds/wallet/update/withdrawMoney?customerId=1&amount=5000').pipe(map((res:any)=>{
    //   return res;
    // }))
    
   
  }
}
