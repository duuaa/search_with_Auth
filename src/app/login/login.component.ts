import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/Auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})


export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService, private route: Router, private http: HttpClient) {}
  loginForm = {
    username: "",
    password: ""
  };
  ngOnInit(): void {}
  userLogin() {

    this.authservice.userLogin(this.loginForm)
      .subscribe((value) => {
        console.log("value", value)
        if (value) {
          alert("user logged in successfully");
          this.route.navigate(['/search']);
        } else {
          alert("failed");
        }
      });

  }
}