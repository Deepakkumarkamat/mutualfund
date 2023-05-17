import { Component ,ViewChild,ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  searchValue: string = '';
  results: any[] = []; // An array to store the search results
  @ViewChild('inputRef', { static: false })
  inputRef!: ElementRef<HTMLInputElement>;

  constructor(private http: HttpClient) {}

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
      .get<any>('http://34.229.81.74:4747/mutualfund/search?query=' + key)
      .subscribe((data) => {
        console.log('data: ', data);
        this.results = data;
      });
  }
}
