import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as fromApp from '../../store/app.reducers';
import * as fromUser from './store/user.reducers';
import * as UserActions from './store/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user: Observable<fromUser.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {

  }

  getUserDetails() {
    this.store.dispatch(new UserActions.GetUserDetails);
  }

}
