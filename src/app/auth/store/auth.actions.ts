import { Action } from '@ngrx/store';
import { TokenModel } from '../token.model';
import { User } from '../../shared/user.model';
import { Password } from '../password.model';
import { ResponseMessage } from '../../shared/response_message.model';
import { Company } from '../../shared/company.model';

export const SET_TOKEN = 'SET_TOKEN';
export const SIGNIN = 'SIGNIN';
export const SET_BLOCKED_USER = 'SET_BLOCKED_USER'
export const LOGOUT = 'LOGOUT';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const TRY_GET_COMPANY_BY_USER = 'TRY_GET_COMPANY_BY_USER'
export const GET_COMPANY_BY_USER_RESPONSE = 'GET_COMPANY_BY_USER_RESPONSE'



export class SignIn implements Action {
    readonly type = SIGNIN;
    constructor(public payload: User) { }
}

export class SetBlockedUser implements Action {
    readonly type = SET_BLOCKED_USER;
    constructor(public payload: any) { }
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;
    constructor(public payload: TokenModel) { }
}

export class LogOut implements Action {
    readonly type = LOGOUT;
}

export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED;
    constructor(public payload: any) { }
}

export class TryGetCompanyByUser implements Action {
    readonly type = TRY_GET_COMPANY_BY_USER;
    // constructor(public payload: User) { }
}

export class GetCompanyByUserRsponse implements Action {
    readonly type = GET_COMPANY_BY_USER_RESPONSE;
    constructor(public payload: Company[]) { }
}




export type AuthActions = SignIn | SetToken | SetBlockedUser | LogOut | LoginFailed |
    TryGetCompanyByUser | GetCompanyByUserRsponse ;