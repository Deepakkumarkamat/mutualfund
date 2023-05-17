import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:9596"

  constructor(private http:HttpClient) { }


  //calling the server to generate token

  generateToken(credentials:any){
    return this.http.post(`${this.url}/token`,credentials)
  }


  //for login user
  loginUser(token:any){
    localStorage.setItem("token",token)
    return true;
  }
  
  //to check user is login or not
  isLoggedIn(){
    let token= localStorage.getItem("token")
    if(token==undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  //for logout
  logout(){
    localStorage.removeItem('token')
    return true
  }

  //for getting the token
  getToken(){
    return localStorage.getItem("token")
  }
}
