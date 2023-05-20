import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  searchValue: string = '';
  results: any[] = [];
  @ViewChild('inputRef', { static: false })
  inputRef!: ElementRef<HTMLInputElement>;
  constructor(private http: HttpClient, private router: Router) {}
  onKeyUp(event: any) {
    console.log(this.inputRef.nativeElement.value);
    this.searchValue = this.inputRef.nativeElement.value;
    this.sendData(this.searchValue);
  }
search() {
    console.log('Search for:', this.searchValue);
  }
  public sendData(key: string): void {
    this.http
    .get<any>(`${baseUrl}/mutualfund/search?query=${key}`)
      .subscribe((data) => {
        console.log('data: ', data);
        this.results = data;
      });
  }
  viewMutualFundDetails(id: string): void {
    this.router.navigate(['/mutual-funds', id]);
  }
}
// .get<any>(`http://${baseUrl}/mutualfund/search?query=${key}`)
