import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()

export class AuthService {
    userInfo: BehaviorSubject<any> = new BehaviorSubject(null);
    jwtHelper = new JwtHelperService();
    constructor(private http: HttpClient, private router: Router) {
        this.loadUserInfo();
    }
    loadUserInfo() {
        const userdata = this.userInfo.getValue();
        if (!userdata) {
            const accesstoken = localStorage.getItem("access_token");
            if (accesstoken) {
                const decryptedUser = this.jwtHelper.decodeToken(accesstoken);
                const data = {
                    access_token: accesstoken,
                    refresh_token: localStorage.getItem("refresh_token"),
                    username: decryptedUser.username,
                    userid: decryptedUser.sub,
                    tokenExpiration: decryptedUser.user
                };
                this.userInfo.next(data);
            }
        }
    }

    userLogin(userPayload): Observable<boolean> {
      
        return this.http.post("http://localhost:3000/auth/login", userPayload, { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' }) })
            .pipe(
                map((value: any) => {
                    if (value) {
                        localStorage.setItem("access_token", value.access_token);
                        localStorage.setItem("refresh_token", value.refresh_token);
                        const decryptedUser = this.jwtHelper.decodeToken(value.access_token);
                        console.log(decryptedUser);
                        const data = {
                            access_token: value.access_token,
                            refresh_token: value.refresh_token,
                            username: decryptedUser.username,
                            userid: decryptedUser.sub,
                            tokenExpiration: decryptedUser.user
                        };
                        this.userInfo.next(data);
                        return true;
                    }
                    return false;

                })
            );
    }
    logout() {
        this.userLogin(false);
        this.userInfo.isStopped;
        delete this.jwtHelper;
        localStorage.clear();
        this.router.navigate(['/']);
    }

    callRefreshToken(tokenpayload): Observable<any> {
        return this.http.post('http:/localhost:3000/auth/refreshtoken', tokenpayload);
    }
}