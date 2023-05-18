import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { baseUrl } from '../config';
@Injectable({
  providedIn: 'root'
})
export class MutualFundService {

  private bottomUrl=`http://${baseUrl}/mutualfunds/details/bottom?limit=5`
  private topUrl = `http://${baseUrl}/mutualfunds/details/top?limit=5` 
  constructor(private http: HttpClient) { } 
    getData(){ 
       return this.http.get(this.topUrl).pipe(map((res:any)=>
       {
        return res;
       }))
    }
    getData1(){
        return this.http.get(this.bottomUrl).pipe(map((res:any) =>
        {
         return res;
        }
        ))
    }
  }
