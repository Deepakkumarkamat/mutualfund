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
  name:any;

  chartOptions ={}
  constructor(private apii: ApiService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apii.detailById(this.id).subscribe((res) => {
      this.fundDetail = res[0];
      console.log(this.fundDetail);
      this.show = true;
      let dataPoints=[]
      let date=4
      for(let i=1;i<=30;i++){
        dataPoints.push({x: new Date(2023,date,i),y: ( 1000 +100*Math.random()) - (this.fundDetail.delta*100 )  })
      }
      date++
      setInterval(()=>{
        for(let i=1;i<=2;i++){
          dataPoints.push({x: new Date(2023,date,i),y: ( 1000 +100*Math.random()) - (this.fundDetail.delta*100 )  })
        }
      },100)
      this.chartOptions= {
        animationEnabled:true,
        theme:'dark1',
        zoomeEnabled:true,
        title: {
          text: this.fundDetail.fundHouse
        },
        axisX: {
          valueFormatString: "MMM YYYY"
        },
        axisY2: {
          title: "Price Value",
          prefix: "$",
          suffix: "K"
        },
        data: [{
          type: "line",
          color: "#80ffd4",
          dataPoints: dataPoints
        }]

      };

    });

    this.apii.getTopDetail().subscribe((res:any)=>{
      return this.allTopfundDetail = res;
    });
  }

  ngOnDistroy() {
    this.show = false;
  }

  showMonthlySip() {
    this.monthlysip = true;
    this.oneTime = false;
    this.upi = false;
  }

  showOneTime() {
    this.oneTime = true;
    this.monthlysip = false;
    this.upi = false;
  }

  showUpi() {
    this.upi = true;
    this.monthlysip = false;
    this.oneTime = false;
  }

  getRatingStars(rating: number): string {
    if (rating < 0) {
      return '⭐⭐';
    } else if (rating < 5) {
      return '⭐⭐⭐';
    } else if (rating < 10) {
      return '⭐⭐⭐⭐';
    } else {
      return '⭐⭐⭐⭐⭐';
    }
  }
}
