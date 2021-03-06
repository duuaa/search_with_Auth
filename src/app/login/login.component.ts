
import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = {
    username: '',
    password: '',
  };
 
  ngOnInit(): void {}
 
  userLogin() {
      console.log(JSON.stringify(this.loginForm))
  }
}