import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import 'rxjs/add/operator/map';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';
import { SessionService } from "../shared/session.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<fromApp.AppState>, private router: Router, private sessionService: SessionService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('auth').map(
            (authState: fromAuth.State) => {
                if (!authState.isAuthenticated) {
                    this.router.navigate(['login']);
                    return false;
                }
                return authState.isAuthenticated;
            });
    }
}