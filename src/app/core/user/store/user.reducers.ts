import * as UserActions from './user.actions';
import { User } from '../../../shared/user.model';

export interface State {
    user: User;
    updated: boolean;
}

const INITIAL_STATE: State = {
    user: null,
    updated: false
};


export function UserReducers(state = INITIAL_STATE, action: UserActions.UserActions) {
    switch (action.type) {
        case UserActions.SET_USER_DETAILS:
            return {
                ...state,
                user: action.payload,
                updated: false
            }      
        default:
            return state;
    }
}