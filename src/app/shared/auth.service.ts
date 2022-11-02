import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = false
  loggedUser: string = ''

  constructor(private httpClient: HttpClient) { }

  loginVerify(user: User){
    console.log("Authenticating...")
    console.log(user)
    return this.httpClient.post(environment.apiHrithik + "user-login", user)
  }

  isLoggedIn(){
    if(localStorage.getItem("isLogged")==='true')
      return true
    else
      return false
  }

  // Logout
  public logOut(){
    localStorage.removeItem("loggedUser")
    localStorage.removeItem("USERNAME")
    sessionStorage.removeItem("USERNAME")
    localStorage.removeItem("ACCESS_ROLE")
    localStorage.removeItem("isLogged")
    sessionStorage.removeItem("JWT_TOKEN")
  }
}
