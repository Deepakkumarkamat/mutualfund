import { Component } from '@angular/core';
import { MutualFundService } from 'src/app/services/mutual-fund.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
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
