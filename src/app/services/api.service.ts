import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WalletService } from './wallet.service';
import {baseUrl} from '../config'
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  cutomerid:any
    transactype:any
    amount:any
    walletId:any
    transaction:any
  constructor(private http: HttpClient,private api:WalletService) {}
  getTopDetail() {
    return this.http
      .get(`http://${baseUrl}/mutualfunds/details/top?limit=5`)
      .pipe(
        map((res: any) => {
          return res;
          
        })
      );
  }
  getBottomDetail() {
    return this.http
      .get(`http://${baseUrl}/mutualfunds/details/bottom?limit=5`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  detailById(schemaId: number): Observable<any> {
    return this.http.get<any>(
      `http://${baseUrl}/mutualfund/${schemaId}`
    );
  }
//signUp

registrationUser(firstName:string,lastName:string,userName:string,password:string){
  const data={
    first_name:firstName,
    last_name:lastName,
    username:userName,
    password:password
  };
  return this.http.post("http://3.88.66.189:9191/register",data);
}
  // private baseURL: string = `http://${baseUrl}`;
  //  checkUsernameAvailability(userName: String){

  //     return this.http.get<any>(`${this.baseURL}/getUserName/${userName}`);
    
  //    }
  
 }
