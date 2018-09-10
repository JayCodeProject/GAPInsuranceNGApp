import { Action } from "@ngrx/store";

import { Menu } from "../menu.model";


export const GET_MENU_ITEM = 'GET_MENU_ITEM';
export const SET_MENU_ITEM = 'SET_MENU_ITEM';

export class GetMenuItem implements Action {
    readonly type = GET_MENU_ITEM;
}

export class SetMenuItem implements Action {
    readonly type = SET_MENU_ITEM;
    constructor(public payload: Array<Menu>) { }
}

export type MenuActions = GetMenuItem | SetMenuItem;