import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducers';
import * as fromUser from '../core/user/store/user.reducers';
import * as fromMenu from '../core/header/menu/store/menu.reducers';
import * as fromCompany from '../core/company/store/company.reducers';
import * as fromInsurance from '../core/insurance/store/insurance.reducers';


export interface AppState {
    auth: fromAuth.State,
    user: fromUser.State,
    menu: fromMenu.State,
    company: fromCompany.State,
    insurance: fromInsurance.State
}

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.AuthReducers,
    user: fromUser.UserReducers,
    menu: fromMenu.MenuReducers,
    company: fromCompany.CompanyReducers,
    insurance: fromInsurance.InsuranceReducers
};