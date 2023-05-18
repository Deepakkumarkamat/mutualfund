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
  private baseURL: string = `http://${baseUrl}`;
   checkUsernameAvailability(userName: String){

      return this.http.get<any>(`${this.baseURL}/getUserName/${userName}`);
    
     }
  
 }
