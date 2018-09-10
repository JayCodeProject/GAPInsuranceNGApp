import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { SessionService } from "../../../shared/session.service";
import { TokenModel } from "../../../auth/token.model";
import { Menu } from "./menu.model";
import { Router } from "@angular/router";

@Injectable()
export class MenuService {
    private apiUrl = environment.apiBaseUrl;
    token: TokenModel;

    constructor(private httpClient: HttpClient, private sessionService: SessionService, private router: Router) { }

    getMenuItem() {
        const menuUrl = this.apiUrl + environment.menuUrl;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));

        var json =
        {
            "createdUser": this.token.userId,
            "company": "0"
        }

        if (this.token != null) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<Array<Menu>>(menuUrl, json, { headers: headers });
        }
    }
}