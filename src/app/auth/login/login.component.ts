import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

import { User } from '../../shared/user.model';
import { TokenModel } from '../token.model';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../store/auth.reducers';
import * as AuthActions from '../store/auth.actions';
import { SessionService } from '../../shared/session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup
  authState: Observable<fromAuth.State>;
  isErrorMessageVisible: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
  loginMethod = 1;
  token: TokenModel;
  selectedLanguage: string;
  languages = [{
    'language': 'en',
    'source': "../../../assets/images/flags/flag-uk.png",
    'name': 'English'
  },
  {
    'language': 'sp',
    'source': "../../../assets/images/flags/flag-es.png",
    'name': 'Español'
  },
  {
    'language': 'ch-trad',
    'source': "../../../assets/images/flags/flag-cn.png",
    'name': '中文'
  }]

  constructor(private store: Store<fromApp.AppState>,
    private route: Router,
    private sessionService: SessionService,
    private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.selectedLanguage = '../../../assets/images/flags/flag-uk.png';
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, Validators.minLength(6)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
    });

    this.token = JSON.parse(this.sessionService.getSession('TOKEN'));
    this.authState = this.store.select('auth');

    this.authState.subscribe(
      (state) => {
        this.isLoading = state.isLoading;
        this.isAuthenticated = state.isAuthenticated;
      }
    );
    if (this.token != null && this.token.tmpPassword != 'True' && this.token.status == 'Active') {
      this.store.dispatch(new AuthActions.SetToken(this.token));
      this.route.navigate(['']);
    }
  }

  onTextChange() {
    if (this.loginForm.get('email').touched) {
      this.isErrorMessageVisible = false;
    }
  }

  onSubmit() {
    this.isErrorMessageVisible = true;
    let email: string = this.loginForm.value['email'];
    let secret: string = this.loginForm.value['password'];
    email = email.toLowerCase();

    let user = new User(
      email,
      secret,
      email,
      this.loginMethod
    );
    this.store.dispatch(new AuthActions.SignIn(user));
  }
}
