import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl: string = 'http://34.234.150.41:9191/register';



  constructor(private http: HttpClient) { }
  updateUserDetails(username: string, email: string): Observable<any> {
     const url = `${this.baseUrl}`;
     // Use backticks (`) for string interpolation
     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = { username, email };



    return this.http.patch(url, null, { headers, params });
}
}
