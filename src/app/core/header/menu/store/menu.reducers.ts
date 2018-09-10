import * as MenuActions from './menu.actions';

import { Menu } from '../menu.model';

export interface State {
    menuList: Array<Menu>;
};

const INITIAL_STATE: State = {
    menuList: null
};

export function MenuReducers(state = INITIAL_STATE, action: MenuActions.MenuActions) {
    switch (action.type) {
        case MenuActions.SET_MENU_ITEM:
            return {
                ...state,
                menuList: action.payload,
            }

        default:
            return state;
    }
}