import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { from, Observable } from "rxjs";
import { AuthService } from '../services/Auth.service';
import { Injectable } from '@angular/core'
@Injectable()

export class AuthRouteGaurd implements CanActivate {


    constructor(private authService: AuthService, private route: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {

        const userData = this.authService.userInfo.getValue();
        if (userData && userData.userid) {
            if (state.url.indexOf("login") > -1) {
                this.route.navigate(['/search']);
                return false;
            }
        } else {
            if (state.url.indexOf("search") > -1) {
                this.route.navigate(['/login']);
            }

        }
        return true;
    }


}