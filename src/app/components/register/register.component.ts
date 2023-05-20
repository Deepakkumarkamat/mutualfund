import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
// import { Customer } from 'src/app/customer';
import { baseUrl } from 'src/app/config';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  searchTerm!: string;
  available!: any;
  firstname:any;
  lastname:any;
  username:any;
  Password:any;
  confirm_password:any;
  userAvailable:boolean | null = null;
  
  constructor(
    public ro: Router,
    public http: HttpClient,
    private api: ApiService
  ) {}

  onSubmit() {
   

    this.api.registrationUser(this.firstname,this.lastname,this.username,this.Password)
    .subscribe((data)=>{
      console.log(data)
      console.log("Registration successfully!")
      alert("User Registration successfully!")
    },
    error =>{
      console.error("Registration failed!")
      alert(error + "!")
    }
    
    
    
    )

    
  }

  checkAvailability(){
    this.http.get<boolean>(`http://3.88.66.189:9191/register?username=${this.username}`)
    .subscribe((isAvailable:boolean)=> {
      this.userAvailable = isAvailable;
    },
    error => {
      console.log(error);
      this.userAvailable = null;
    }
    
    
    )

  }

  confirmpassword(){
     return this.Password === this.confirm_password;

    
  }
}
