import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

import * as fromApp from '../../../store/app.reducers';
import * as fromMenu from './store/menu.reducers';
import * as MenuActions from './store/menu.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  menuState: Observable<fromMenu.State>;

  constructor(private store: Store<fromApp.AppState>, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.store.dispatch(new MenuActions.GetMenuItem);
    this.menuState = this.store.select('menu');
  }
}



