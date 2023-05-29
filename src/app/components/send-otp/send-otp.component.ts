import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  styleUrls: ['./send-otp.component.css']
})
export class SendOtpComponent {
  constructor(private router:Router){}
  showUpdate(){
    this.router.navigate(['/update'])
  }

}
