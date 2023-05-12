import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allfunds',
  templateUrl: './allfunds.component.html',
  styleUrls: ['./allfunds.component.css'],
})
export class AllfundsComponent {
  detsilList: any[] = [];
  allBottomDetail: any[] = [];
  data: any;
  // selectedFund:fund;
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit() {
    this.api.getTopDetail().subscribe((res) => {
      this.detsilList = res;
      console.log(this.detsilList);
    });
    this.api.getBottomDetail().subscribe((res) => {
      this.allBottomDetail = res;
    });
  }
  fetchById(schemaId: number): void {
    this.api.detailById(schemaId).subscribe((data) => {
      this.data = data;
      console.log(data[27]);
    });
  }
}
