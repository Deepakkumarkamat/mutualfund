import { RegistrationService } from 'src/app/services/registration.service';
import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private loginService:LoginService,private router:Router,private registerservice:RegistrationService ) {

  }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean | Promise<boolean> {
		if (this.loginService.isLoggedIn()){
			return true
		}
    else{
    this.router.navigate(['login'])

		return false;
  }

	}
}
