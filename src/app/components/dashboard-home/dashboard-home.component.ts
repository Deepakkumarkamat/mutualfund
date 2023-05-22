import { Component } from '@angular/core';
import { MutualFundService } from 'src/app/services/mutual-fund.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {
  flag:any;
  error:any;
  detailList: any[] = [];
  allBottomDetail: any[] = [];
  data: any;
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit() {
    this.api.getTopDetail().subscribe((res) => {
      this.detailList = res;
      console.log(this.detailList);

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

  options: AnimationOptions = {
    path: '../../../assets/135363-mutual-funds-investment.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
}
}