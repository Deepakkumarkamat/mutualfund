import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-allfundsdetail',
  templateUrl: './allfundsdetail.component.html',
  styleUrls: ['./allfundsdetail.component.css'],
})
export class AllfundsdetailComponent {
  allTopfundDetail: any[] = [];
  id: any;
  fundDetail: any;
  show: boolean = false;
  monthlysip:boolean=true;
  oneTime:boolean=false;
  upi:boolean=false;
  inputAmount=''

  constructor(private apii: ApiService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apii.detailById(this.id).subscribe((res) => {
      this.fundDetail = res[0];
      console.log(this.fundDetail);
      this.show = true;
    });
  }
  ngOnDistroy() {
    this.show = false;
  }
  showMonthlySip(){
    this.monthlysip = true;
    this.oneTime = false;
    this.upi = false;


  }
  showOneTime(){
    this.oneTime = true;
    this.monthlysip =false;
    this.upi = false;

  }
  showUpi(){
    this.upi = true;
    this.monthlysip=false;
    this.oneTime=false;
  }
}
