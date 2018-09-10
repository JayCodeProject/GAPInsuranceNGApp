import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { TokenModel } from "./token.model";
import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';
import { User } from "../shared/user.model";
import { Company } from "../shared/company.model";
import { SessionService } from "../shared/session.service";



@Injectable()
export class AuthService {
    private apiUrl = environment.apiBaseUrl;
    private token: TokenModel;
    private authState: Observable<fromAuth.State>;

    constructor(private httpClient: HttpClient,
        private store: Store<fromApp.AppState>,
        private sessionService: SessionService) { }

    getToken(user: User) {
        const tokenUrl = this.apiUrl + environment.tokenUrl;
        let urlSearchParams = new URLSearchParams();

        urlSearchParams.append('username', user.Username);
        urlSearchParams.append('password', user.Password);
        urlSearchParams.append('loginMethod', user.LoginMethod.toString());
        urlSearchParams.append('createdUser', user.CreatedUser);
        urlSearchParams.append('longitude', user.Longitude.toString());
        urlSearchParams.append('latitude', user.Latitude.toString());
        urlSearchParams.append('grant_type', "password");

        const body = urlSearchParams.toString();

        return this.httpClient.post<TokenModel>(tokenUrl, body)
    }

    getGeodata() {
        return Observable.create(observer => {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(
                    (position) => {
                        observer.next(position.coords);
                        observer.complete();
                    }
                )
            }
        })
    }


    getCompanyByUser() {
        const getCompanyByUserUrl = this.apiUrl + environment.getCompanyByUser;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));

        let user = new User();
        user.CreatedUser = this.token.fullName;

        if (this.token != null) {
            const headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<Company[]>(getCompanyByUserUrl, user, { headers: headers });
        }
    }

    errorHandler(error: any): void {
        console.log('auth service error: ' + error)
    }

}