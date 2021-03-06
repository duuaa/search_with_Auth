

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/Auth.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService, private route: Router) {

  }

  loginForm = {
    username: '',
    password: '',
  };

  ngOnInit(): void { }

  userLogin() {
    this.authservice.userLogin(this.loginForm);
    alert("user logged in successfully");
    this.route.navigate(['/search']);
  }
}