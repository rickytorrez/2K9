import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // default value
  username = 'ricky'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor() { }

  ngOnInit() {
  }

  public handleLogin(){
    if (this.username === "ricky" && this.password === "test"){
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
