import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 errorMesage:string=''


  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService,private router:Router){ }


  ngOnInit(): void {


  //  let user:HTMLInputElement|any = document.getElementById('user')
  //  this.credentials.username=user.value
  // user.value=''
  // if(this.loginService.isLoggedIn()){
  //   this.router.navigate(["/dashboard"])
  // }
  }

  onSubmit(){
    // console.log("Form is Submitted!!")

    if((this.credentials.username!='' && this.credentials.password!='')&& (this.credentials.username!=null && this.credentials.password!=null)){
      console.log("We have to submit the form to server!!");
      //token generate
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //success
          console.log(response.token);
          // this.loginError
          // this.respose.token






          this.loginService.loginUser(response.token)
          this.router.navigate(["/dashboard"])
          // window.location.href=
          this.credentials.password=''
          this.credentials.username=''
        },
        error=>{
          //error
          console.log(error);
          this.errorMesage = 'Invalid Username and password'




        }
      )
    }else{
      console.log("Fields are Empty")
    }
  }
  resButton(){
    this.credentials.username=''
    this.credentials.password=''
    this.errorMesage = ''
  }
  goToReegistration(){
    this.router.navigate(['/register'])
  }
  sendOtp(){
    this.router.navigate(['/sendOtp'])
  }

}
