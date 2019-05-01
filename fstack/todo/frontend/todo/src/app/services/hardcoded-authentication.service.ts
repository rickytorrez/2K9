import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if (username === "ricky" && password === "test"){
      // sets the usernme to the authenticared user variable in session storage
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
