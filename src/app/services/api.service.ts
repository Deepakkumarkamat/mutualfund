import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getTopDetail() {
    return this.http
      .get('http://localhost:8090/mutualfunds/details/top?limit=5')
      .pipe(
        map((res: any) => {
          return res;
          
        })
      );
  }
  getBottomDetail() {
    return this.http
      .get('http://localhost:8090/mutualfunds/details/bottom?limit=5')
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  detailById(schemaId: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8090/mutualfunds/details/byid?id=${schemaId}`
    );
  }
}
