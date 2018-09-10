import { Actions, Effect } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import { CompanyService } from "../company.service";
import * as CompanyActions from './company.actions';
import { Company } from "../../../shared/company.model";


@Injectable()
export class CompanyEffects {
    constructor(private action$: Actions,
        private companyService: CompanyService) {
    }

    @Effect() getCompanyDetailById = this.action$
        .ofType(CompanyActions.TRY_GET_COMPANY_DETAIL_BY_ID)
        .map((action: CompanyActions.TryGetCompanyDetailById) => {
            return action.payload;
        })
        .switchMap(
            (company: Company) => {
                return this.companyService.getCompanyById(company);
            })
        .map(
            (company) => {
                if (company) {
                    return {
                        type: CompanyActions.GET_COMPANY_DETAIL_BY_ID_RESPONSE,
                        payload: company
                    }
                }
            }
        )
}