import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  otpForm!:FormGroup;
  otp:boolean=false;
  constructor(private router:Router,private formbuilder:FormBuilder){}

  ngOnInit(){
    this.otpForm = this.formbuilder.group({
      email:['',Validators.required],
      otp:['',Validators.required]

    })
  }


  showUpdate(){
    this.router.navigate(['/update'])
  }

  get form(){
    return this.otpForm.controls;

  }

  senOtp(){
    this.otp = true;
    if(this.otpForm.invalid){
      return;
    }
  }


}
