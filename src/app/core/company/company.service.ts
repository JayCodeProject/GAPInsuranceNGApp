import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";

import { Company } from "../../shared/company.model";
import { SessionService } from "../../shared/session.service";
import { TokenModel } from "../../auth/token.model";


@Injectable()
export class CompanyService {
    private apiUrl = environment.apiBaseUrl;
    private token: TokenModel;

    constructor(private httpClient: HttpClient, private sessionService: SessionService) {

    }

    getCompanyById(company: Company) {
        const getCompanyDetailUrl = this.apiUrl + environment.getCompanyDetailUrl;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));

        if (this.token != null) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<Company>(getCompanyDetailUrl, company, { headers: headers });
        }

    }

}