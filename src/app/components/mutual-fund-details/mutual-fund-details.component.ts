import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { baseUrl } from 'src/app/config';

@Component({
  selector: 'app-mutual-fund-details',
  templateUrl: './mutual-fund-details.component.html',
  styleUrls: ['./mutual-fund-details.component.css']
})
export class MutualFundDetailsComponent {
  id: any;
   data: any;
    show: boolean = false;
     constructor(private http: HttpClient, private route: ActivatedRoute) { } 
     ngOnInit(): void {
       this.id = this.route.snapshot.paramMap.get('schemaId')
      this.fullData(this.id) 
     }
       ngOnDestroy(): void { 
        this.show = false 
       }
       fullData(id: any) { 
        this.http.get(`${baseUrl}/mutualfund/` + id).subscribe((response) => {
         this.data = response 
         this.show = true
          console.log(this.data)
         });
         
     
    
    }
}

