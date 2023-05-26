import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
@Component({
  selector: 'app-varifyotp',
  templateUrl: './varifyotp.component.html',
  styleUrls: ['./varifyotp.component.css']
})

export class VarifyotpComponent {
  constructor(private varifyservice: RegistrationService,route:ActivatedRoute){}
  varifyOtp!:FormGroup;
  email:any;
  otp:any;


  // receiveOtp(){
  //   this.email = this.route.snapshot.paramMap.get('email');
  //   this.otp = this.route.snapshot.paramMap.get('otp')
  //   this.varifyservice.varifyOtp(this.email,this.otp)
  // }

}
