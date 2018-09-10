import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";

import * as MenuActions from './menu.actions';
import { MenuService } from "../menu.service";


@Injectable()
export class MenuEffects {

    constructor(private action$: Actions,
        private menuService: MenuService) { }

    @Effect() menuList = this.action$
        .ofType(MenuActions.GET_MENU_ITEM)
        .map((action: MenuActions.GetMenuItem) => { })
        .switchMap(
            () => {
                return this.menuService.getMenuItem();
            })
        .map(
            (menuItem) => {
                return {
                    type: MenuActions.SET_MENU_ITEM,
                    payload: menuItem
                }
            }
        );
}