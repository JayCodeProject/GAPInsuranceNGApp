import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { TokenModel } from "../../auth/token.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SessionService } from "../../shared/session.service";
import { Insurance } from "./insurance.model";
import { RiskLevel } from "./risk-level.model";
import { Coverage } from "./coverage.model";
import { ResponseMessage } from "../../shared/response_message.model";
import { InsuranceSale } from "./insuranceSale.model";
import { Customer } from "./customer.model";
import { CustomerInsurance } from "./customer-ins.model";

@Injectable()
export class InsuranceService {
    private apiUrl = environment.apiBaseUrl;
    private token: TokenModel;

    constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

    getInsurance(ins: Insurance) {
        const getInsuranceUrl = this.apiUrl + environment.getInsuranceUrl;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));

        if (this.token != null) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<Insurance[]>(getInsuranceUrl, ins, { headers: headers });
        }
    }

    getRiskLevelCatalog(risk: RiskLevel) {
        const getRiskLevelUrl = this.apiUrl + environment.getRiskLevelUrl;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));

        if (this.token != null) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<RiskLevel[]>(getRiskLevelUrl, risk, { headers: headers });
        }
    }

    getCoverageCatalog(cov: Coverage) {
        const getcoverageUrl = this.apiUrl + environment.getcoverageUrl;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));

        if (this.token != null) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<Coverage[]>(getcoverageUrl, cov, { headers: headers });
        }
    }

    createInsurance(ins: Insurance) {
        const createInsurance = this.apiUrl + environment.createInsurance;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));

        if (this.token != null) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<ResponseMessage>(createInsurance, ins, { headers: headers });
        }
    }

    deleteInsurance(ins: Insurance) {
        const deleteInsurance = this.apiUrl + environment.deleteInsurance;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));
        ins.CreatedUser = this.token.fullName;

        if (this.token != null) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<ResponseMessage>(deleteInsurance, ins, { headers: headers });
        }
    }

    editInsurance(ins: Insurance) {
        const updateInsurance = this.apiUrl + environment.updateInsurance;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));
        ins.CreatedUser = this.token.fullName;

        if (this.token != null) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<ResponseMessage>(updateInsurance, ins, { headers: headers });
        }
    }

    associateInsurance(ins: InsuranceSale) {
        const associateInsuranceUrl = this.apiUrl + environment.associateInsuranceUrl;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));

        if (this.token != null) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<ResponseMessage>(associateInsuranceUrl, ins, { headers: headers });
        }
    }

    getCustomer(customer: Customer) {
        const getCustomerUrl = this.apiUrl + environment.getCustomerUrl;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));

        if (this.token != null) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<ResponseMessage>(getCustomerUrl, customer, { headers: headers });
        }
    }

    getCustomerInsurance(ins: Insurance) {
        const getCustomerInsuranceUrl = this.apiUrl + environment.getCustomerInsuranceUrl;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));
        ins.CreatedUser = this.token.fullName;

        if (this.token != null) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<CustomerInsurance[]>(getCustomerInsuranceUrl, ins, { headers: headers });
        }
    }

    deleteCustomerInsurance(ins: CustomerInsurance) {
        const deleteCustomerInsUr = this.apiUrl + environment.deleteCustomerInsUr;
        this.token = JSON.parse(this.sessionService.getSession('TOKEN'));
        ins.CreatedUser = this.token.fullName;

        if (this.token != null) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this.token.access_token);

            return this.httpClient.post<ResponseMessage>(deleteCustomerInsUr, ins, { headers: headers });
        }
    }

}