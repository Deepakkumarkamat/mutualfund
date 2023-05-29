import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-varifyotp',
  templateUrl: './varifyotp.component.html',
  styleUrls: ['./varifyotp.component.css'],
})
export class VarifyotpComponent {
  constructor(
    private varifyservice: RegistrationService,
    private route: ActivatedRoute,
    private api: ApiService,
    private router:Router
  ) {
    document.addEventListener('DOMContentLoaded', function (event) {
      function OTPInput() {
        const inputs: any = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].addEventListener('keydown', function (event: any): any {
            if (event.key === 'Backspace') {
              inputs[i].value = '';
              if (i !== 0) inputs[i - 1].focus();
            } else {
              if (i === inputs.length - 1 && inputs[i].value !== '') {
                return true;
              } else if (event.keyCode > 47 && event.keyCode < 58) {
                inputs[i].value = event.key;
                if (i !== inputs.length - 1) inputs[i + 1].focus();
                event.preventDefault();
              } else if (event.keyCode > 64 && event.keyCode < 91) {
                inputs[i].value = String.fromCharCode(event.keyCode);
                if (i !== inputs.length - 1) inputs[i + 1].focus();
                event.preventDefault();
              }
            }
          });
        }
      }


      OTPInput();
    });
  }
  varifyOtp!: FormGroup;
  email: any;
  otp: any = '';
  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email');

  }
  submitOTP() {
    document.querySelectorAll('#otp > *[id]').forEach((input: any) => {
      this.otp += input.value;
    });
    this.api.verify(this.email, Number(this.otp)).subscribe(
      (res) => {
        if(res.includes('Enter Correct OTP')){
        alert('Enter Correct OTP')

         console.log(res);
        console.log(this.otp);
        this.otp = '';

        }
        else{
        this.router.navigate(['dashboard'])
      }
      },

      (error) => {
        console.log(error);
      }
    );

  }

  resendOtp() {
    this.api.resend(this.email).subscribe((res) => {
      alert(res);
    });
    this.otp = '';
  }
  // receiveOtp(){
  //   this.email = this.route.snapshot.paramMap.get('email');
  //   this.otp = this.route.snapshot.paramMap.get('otp')
  //   this.varifyservice.varifyOtp(this.email,this.otp)
  // }
  remainingTime :number|any
  showTimer:boolean = false;
  startCountdown(): void {
    const expirationSeconds = 30; // Set the desired expiration time in seconds
    this.showTimer = true;

    // Initialize the remaining time
    this.remainingTime = expirationSeconds;

    // Start the countdown timer
    const timer = setInterval(() => {
    this.remainingTime--;

    if (this.remainingTime <= 0) {
    // Timer has expired, perform the necessary action
    clearInterval(timer);
    // Additional logic for expired timer
    this.showTimer = false;
    }
    }, 1000); // Update the remaining time every 1 second (1000 milliseconds)
    }
}
