import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
// import { Customer } from 'src/app/customer';
import { baseUrl } from 'src/app/config';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { from, last } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  searchTerm!: string;
  innerWidth: any;
  available!: any;
  // firstname:any;
  // lastname:any;
  // username:any;
  // Password:any;
  // confirm_password:any;
  userAvailable: boolean | null = null;
  registerForm!: FormGroup
  submitted=false;


  // registerForm = new FormGroup({
  //   firstname: new FormControl<string|null>(''),
  //   lastname: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  // });




  options: AnimationOptions = {
    path: '../../../assets/93385-login.json',
    autoplay: true,
    initialSegment: [80, 0],
  };
  animationCreated(animationCreated: AnimationItem) {
    console.log('animation crated');
    console.log(animationCreated);
    console.log(animationCreated.playSegments);
    animationCreated.firstFrame = 150;
    animationCreated.play();
    // animationCreated.setDirection(-1)
    console.log(this.registerForm);
  }
  constructor(
    public ro: Router,
    public http: HttpClient,
    private api: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.innerWidth = window.innerWidth;

    window.addEventListener('resize', () => {
      // console.log("width change")
      this.innerWidth = window.innerWidth;
    });
  }
  ngOnInit() {
    this.registerForm =this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required, Validators.pattern(/([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g)]],
      password:['',[Validators.required, Validators.pattern(/^(?=.*[.,?!$&@%^*])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}/)]],
      confirmPassword:['',Validators.required]

    })
  }
  get form() { return this.registerForm.controls; }
  onSubmit(form?: any) {
    // if (this.registerForm.invalid) return;
    this.submitted = true;
    if(this.registerForm.invalid){
      return
    }
    // alert("success")
    console.log(this.registerForm);
    let { firstname, lastname, email, password } = this.registerForm.value;
    this.api
      .registrationUser(
        String(firstname),
        String(lastname),
        String(email),
        String(password)
      )
      .subscribe(
        (data) => {
          console.log(data);
          console.log('Registration successfully!');
          this.ro.navigate(['/thankyou']);
          // alert('User Registration successfully!');
        },
        (error) => {
          alert('Registration failed!');
          console.log(error);
        }
      );
  }

  checkAvailability() {
    this.http
      .get<boolean>(
        `http://localhost:9191/register?username=${this.registerForm.value.email}`
      )
      .subscribe(
        (isAvailable: boolean) => {
          this.userAvailable = isAvailable;
        },
        (error) => {
          console.log(error);
          this.userAvailable = null;
        }
      );
  }

  // confirmpassword() {
  //   return (
  //     !(
  //       this.registerForm.value.password ===
  //       this.registerForm.value.confirmPassword
  //     ) && this.registerForm.controls.confirmPassword.touched
  //   );
  // }
}
