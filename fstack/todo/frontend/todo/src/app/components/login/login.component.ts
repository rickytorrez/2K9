import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // default value
  username = 'ricky';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // instance of the router in the constructor - dependency injection
  constructor(private _router: Router) { }

  ngOnInit() {
  }


  public handleLogin(){
    if (this.username === "ricky" && this.password === "test"){
      
      // redirect to welcome page
      this._router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
