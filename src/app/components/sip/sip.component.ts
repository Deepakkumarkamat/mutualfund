import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sip',
  templateUrl: './sip.component.html',
  styleUrls: ['./sip.component.css']
})
export class SipComponent {
  fundDetails: any;
  amount: number = 0;
  freq: string = '';
  orderDate: string = ''
  id: string | any = ''
  loading: boolean = false;
  unit: number = -1;
  constructor(private http: HttpClient, private route: ActivatedRoute, private api: ApiService, private loginService: LoginService) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.api.detailById(Number(this.id)).subscribe(data => {
      this.fundDetails = data[0]
      console.log(this.fundDetails)
    })
  }
  continue() {
    this.unit = Number(this.amount)/Number(this.fundDetails.currentPrice)
  }
  buymethod() {
    this.loading = true
    this.http.post(`http://34.234.150.41:5151/transactions/updateportfolio?username=${this.loginService.getLoggedInUser()}&mutualFundsId=${this.id}&price=${this.amount}&unit=1`, {}).subscribe((data) => {
      console.log(data)
      this.loading = false
    }, err => {
      console.log(err)
      this.loading = false
    })

  }
}
