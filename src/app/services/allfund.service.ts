import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllfundService {

  private apiUrl = 'http://34.234.150.41:4747/mutualfunds/details/top?limit=1000';

  constructor(private http: HttpClient) {}

  getMutualFunds(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
