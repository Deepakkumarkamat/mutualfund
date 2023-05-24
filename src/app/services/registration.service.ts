import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { baseUrl } from '../config';
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  // private baseUrl: string = 'http://34.234.150.41:4747/customer/register'

  constructor(private http: HttpClient) {}
  private userUrl = `http://34.234.150.41:6161/customer/register`;

  registerUser(user: User) {
    //  const headers = new HttpHeaders({ 'Content-Type': 'application/text' });

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
     // const params = { username, email };

    return this.http.post(this.userUrl, user, {
      headers: headers,
      responseType: 'text',
    });
  }

  //   updateUserDetails(firstname:string,lastname: username: string, email: string): Observable<any> {
  //      const url = `${this.}`;

  //      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //     const params = { username, email };

  //     return this.http.post(url, null, { headers, params });
  // }
}
