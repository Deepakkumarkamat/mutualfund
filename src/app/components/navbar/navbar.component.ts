import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private loginservice: LoginService){ }
  logout(){
  this.loginservice.logout()
  }
  isLoggedIn(){
    return this.loginservice.isLoggedIn()
    }

}
