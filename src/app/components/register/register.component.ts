import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { Customer } from 'src/app/customer';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  searchTerm !: string;
    available !:any;
   constructor(public ro: Router, public http: HttpClient,private api: ApiService) { }
    customer: Customer = new Customer();
errorMsg: String | undefined; onSubmit() { console.log(this.customer)
this.http.post<Customer>("http://localhost:8082/registerNewUser", this.customer).subscribe(data => { console.log(data), this.ro.navigate(['/home']), console.log("User Register Successfully!"),
alert("User Register Successfully!") }, 
error => { console.log(error), this.errorMsg = error, alert(error + "!") }) }

userNameAvailability(event:any){

      this.searchTerm = (event.target as HTMLInputElement).value;
    
      console.log(this.searchTerm);
    
   this.available=this.api.checkUsernameAvailability(this.searchTerm);
    
    
    
    
      // this.apiService.jaadu();
    
     }
}
