import { Component ,OnInit } from '@angular/core';
import { MutualFundService } from 'src/app/services/mutual-fund.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { AllfundService } from 'src/app/services/allfund.service';


// import { SearchBoxComponent } from '../search-box/search-box.component';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit{
  mutualFunds:any;
  flag:any;
  error:any;
  detailList: any[] = [];
  allBottomDetail: any[] = [];
  data: any;
  constructor(private api: ApiService, private router: Router, private fund:AllfundService) {}
  ngOnInit() {
    this.api.getTopDetail().subscribe((res) => {
      this.detailList = res;
      console.log(this.detailList);
      this.loadMutualFunds();

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

  toggleDetails(fund: any) {
    fund.showDetails = !fund.showDetails;
  }



  loadMutualFunds() {
    this.fund.getMutualFunds()
      .subscribe((data: any[]) => {
        this.mutualFunds = data;
      });
  }

    // console.log('Constructor Called');
    // this.mutualfund.getData().subscribe(data => {
    //   this.flag=data;
    //   console.log(data)

    // },
    //   (error)=>
    //   {
    //     console.error('Error 404 Not Found'); this.error=error; })

    //   }
}
