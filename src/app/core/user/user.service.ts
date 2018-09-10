import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

import { User } from "../../shared/user.model";
import { SessionService } from "../../shared/session.service";
import { TokenModel } from "../../auth/token.model";

@Injectable()
export class UserService {
    private apiUrl = environment.apiBaseUrl;
    private token: TokenModel;

    constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

    getUserDetails() {
        const userUrl = this.apiUrl + environment.userDetailUrl;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));

        var json =
        {
            "createdUser": this.token.userId
        }

        if (this.token != null) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<User>(userUrl, json, { headers: headers });
        }
    }
}