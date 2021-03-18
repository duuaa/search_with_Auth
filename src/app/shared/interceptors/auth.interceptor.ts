import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { AuthService } from "../services/Auth.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }
    jwtHelper = new JwtHelperService();
    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf("refreshtoken") > -1) {
            return next.handle(req);
        }
        var userData = this.authService.userInfo.getValue();
        if (userData && userData.userid) {

            if (Date.now() < Number(userData.tokenExpiration) * 1000) {
                const newReq = req.clone({
                    headers: req.headers.set("Authorization", `bearer ${userData.access_token}`)

                });
                return next.handle(newReq);

            }
            const tokenPayload = {
                access_token: userData.access_token,
                refresh_token: userData.refresh_token
            }
            return this.authService.callRefreshToken(tokenPayload).
                pipe(
                    switchMap((newTokenPayload: any) => {
                        localStorage.setItem("access_token", newTokenPayload.access_token);
                        localStorage.setItem("refresh_token", newTokenPayload.refresh_token);
                        const decryptedUser = this.jwtHelper.decodeToken(newTokenPayload.access_token);
                        const data = {
                            access_token: newTokenPayload.access_token,
                            refresh_token: newTokenPayload.refresh_token,
                            username: decryptedUser.username,
                            userid: decryptedUser.sub,
                            tokenExpiration: decryptedUser.user
                        };
                        this.authService.userInfo.next(data);
                        const newReq = req.clone({
                            headers: req.headers.set("Authorization", `bearer ${newTokenPayload.access_token}`)

                        });
                        return next.handle(newReq);
                    })
                );
        }
        return next.handle(req);
    }
}
