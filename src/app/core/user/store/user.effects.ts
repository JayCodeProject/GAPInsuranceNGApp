import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";

import * as UserActions from './user.actions';
import { UserService } from "../user.service";


@Injectable()
export class UserEffects {

    constructor(private action$: Actions,
        private userService: UserService) {
    }

    @Effect() userDetails = this.action$
        .ofType(UserActions.GET_USER_DETAILS)
        .map(() => { })
        .switchMap(
            () => {
                return this.userService.getUserDetails();
            })
        .map(
            (user) => {            
                return {
                    type: UserActions.SET_USER_DETAILS,
                    payload: user
                }
            });   
}


