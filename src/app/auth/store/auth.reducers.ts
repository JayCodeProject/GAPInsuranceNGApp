import * as AuthActions from './auth.actions';

import { TokenModel } from '../token.model';
import { User } from '../../shared/user.model';
import { Password } from '../password.model';
import { ResponseMessage } from '../../shared/response_message.model';
import { Company } from '../../shared/company.model';


export interface State {
    token: TokenModel;
    user: User;
    password: Password;
    isAuthenticated: boolean;
    isLoading: boolean;
    errorMessage: string | null;
    response: ResponseMessage;
    companyList: Company[];
}

const INITIAL_STATE: State = {
    token: null,
    user: null,
    password: null,
    isAuthenticated: false,
    isLoading: false,
    errorMessage: null,
    response: null,
    companyList: []
};

export function AuthReducers(state = INITIAL_STATE, action: AuthActions.AuthActions) {
    switch (action.type) {
        case AuthActions.SIGNIN:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: true,
                errorMessage: null
            }
        case AuthActions.SET_TOKEN:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                isLoading: false,
                errorMessage: null
            };
        case AuthActions.SET_BLOCKED_USER:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                errorMessage: action.payload
            };
        case AuthActions.LOGIN_FAILED:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                errorMessage: action.payload
            };
        case AuthActions.LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                errorMessage: null,
                selectedCompany: null,
                selectedStation: null
            };
        case AuthActions.TRY_GET_COMPANY_BY_USER:
            return {
                ...state,
                isLoading: true
            }
        case AuthActions.GET_COMPANY_BY_USER_RESPONSE:
            return {
                ...state,
                isLoading: false,
                companyList: action.payload
            }
        default:
            return state;
    }
}