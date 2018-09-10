import { Action } from '@ngrx/store';
import { User } from '../../../shared/user.model';

export const GET_USER_DETAILS = 'GET_USER_DETAILS';
export const SET_USER_DETAILS = 'SET_USER_DETAILS';


export class GetUserDetails implements Action {
    readonly type = GET_USER_DETAILS;
}

export class SetUserDetails implements Action {
    readonly type = SET_USER_DETAILS;
    constructor(public payload: User) { }
}


export type UserActions = GetUserDetails | SetUserDetails ;
