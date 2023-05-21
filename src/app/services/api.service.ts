import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WalletService } from './wallet.service';
import { baseUrl } from '../config';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  cutomerid: any;
  transactype: any;
  amount: any;
  walletId: any;
  transaction: any;
  constructor(private http: HttpClient, private api: WalletService) {}
  getTopDetail() {
    return this.http.get(`${baseUrl}/mutualfunds/details/top?limit=5`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getBottomDetail() {
    return this.http.get(`${baseUrl}/mutualfunds/details/bottom?limit=5`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  detailById(schemaId: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/mutualfund/${schemaId}`);
  }
  //signUp

  registrationUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    const data = {
      firstName,
      lastName,
      username: email,
      password,
    };
    return this.http.post(`http://54.84.104.57:9191/register`, data, {
      responseType: 'text',
      headers: {
        'Accept':'*/*',
        'Connection':'keep-alive',
        'Content-Type': 'application/text',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'OPTIONS, DELETE, POST, GET, PATCH, PUT',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }
  // private baseURL: string = `http://${baseUrl}`;
  //  checkUsernameAvailability(userName: String){

  //     return this.http.get<any>(`${this.baseURL}/getUserName/${userName}`);

  //    }
}
