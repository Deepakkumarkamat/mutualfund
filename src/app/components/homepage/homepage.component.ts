import { Component } from '@angular/core';
import { MutualFundService } from 'src/app/services/mutual-fund.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  fundsName:any[]=[]
  allTopData:any[]=[]
  allBottomData:any[]=[]
  constructor(private api:MutualFundService) {
    
  }
  ngOnInit(){
    this.api.getData().subscribe((res)=>{
      this.allTopData = res;
      console.log(this.allTopData);
    })

    this.api.getData1().subscribe((res) =>{
      this.allBottomData =res;
      console.log(this.allBottomData);
    })
  }

}
