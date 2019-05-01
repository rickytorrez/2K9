import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

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
  // instance of the hardcoded auth service
  constructor(
    private _router: Router,
    private _hardcodedAuthService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }


  public handleLogin(){
      // moved logic to the hardocded service. it the username and password match, router them and pass the username variable. Else, display the invalid credentials error
      if(this._hardcodedAuthService.authenticate(this.username, this.password)){
        this._router.navigate(['welcome', this.username])
        this.invalidLogin = false;
      } else {
      this.invalidLogin = true;
    }
  }

}
