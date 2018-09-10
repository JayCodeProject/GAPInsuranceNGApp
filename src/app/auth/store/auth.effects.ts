import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as AuthActions from './auth.actions';
import { AuthService } from '../auth.service';
import { SessionService } from '../../shared/session.service';
import { User } from '../../shared/user.model';


@Injectable()
export class AuthEffects {

    constructor(private action$: Actions,
        private authService: AuthService,
        private router: Router,
        private session: SessionService) { }

    @Effect() authSignIn = this.action$
        .ofType(AuthActions.SIGNIN)
        .map((action: AuthActions.SignIn) => {
            return action.payload;
        })
        .switchMap(
            (authUser: User) => {
                return this.authService.getGeodata()
                    .flatMap(
                        (data: any) => {
                            authUser.Longitude = data.longitude;
                            authUser.Latitude = data.latitude;

                            return this.authService.getToken(authUser);
                        }
                    )
                    .map(
                        (token) => {
                            if (token.status === 'Active' && token.tmpPassword === 'False') {
                                this.router.navigate(['']);
                                this.session.setSession('TOKEN', JSON.stringify(token));

                                return {
                                    type: AuthActions.SET_TOKEN,
                                    payload: token
                                }
                            } else {
                                if (token.status === 'Active' && token.tmpPassword === 'True') {
                                    this.session.setSession('TOKEN', JSON.stringify(token));

                                    return {
                                        type: AuthActions.SET_TOKEN,
                                        payload: token
                                    }
                                }
                            }
                            if (token.status === 'Blocked') {
                                return {
                                    type: AuthActions.SET_BLOCKED_USER,
                                    payload: 'The user is blocked, you tried too hard.'
                                }
                            }
                        })
                    .catch((error: Error) => {
                        return Observable.of(new AuthActions.LoginFailed('Either your email or password is invalid.'));
                    })
            })

    @Effect() authLogout = this.action$
        .ofType(AuthActions.LOGOUT)
        .map((action: AuthActions.LogOut) => {
            this.session.clearSession('TOKEN');
            this.router.navigate(['login']);
            return {
                type: AuthActions.SET_TOKEN,
                payload: null
            }
        })


    @Effect() getCompanyByUser = this.action$
        .ofType(AuthActions.TRY_GET_COMPANY_BY_USER)
        .map(
            (action: AuthActions.TryGetCompanyByUser) => {
            }
        )
        .switchMap(
            () => {
                return this.authService.getCompanyByUser();
            }
        )
        .map(
            (companyList) => {
                if (companyList) {
                    return {
                        type: AuthActions.GET_COMPANY_BY_USER_RESPONSE,
                        payload: companyList
                    }
                }
            }
        )
}