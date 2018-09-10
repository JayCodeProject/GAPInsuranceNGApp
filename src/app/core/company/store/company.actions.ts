import { Action } from "@ngrx/store";

import { Company } from "../../../shared/company.model";
import { ResponseMessage } from "../../../shared/response_message.model";


export const TRY_GET_COMPANY_DETAIL_BY_ID = 'TRY_GET_COMPANY_DETAIL_BY_ID';
export const GET_COMPANY_DETAIL_BY_ID_RESPONSE = 'GET_COMPANY_DETAIL_BY_ID_RESPONSE';
export const TRY_UPDATE_COMPANY = 'TRY_UPDATE_COMPANY';
export const UPDATE_COMPANY_RESPONSE = 'UPDATE_COMPANY_RESPONSE';


export class TryGetCompanyDetailById implements Action {
    readonly type = TRY_GET_COMPANY_DETAIL_BY_ID;
    constructor(public payload: Company) { }
}

export class GetCompanyDetailByIdResponse implements Action {
    readonly type = GET_COMPANY_DETAIL_BY_ID_RESPONSE;
    constructor(public payload: Company) { }
}

export class TryUpdateCompany implements Action {
    readonly type = TRY_UPDATE_COMPANY;
    constructor(public payload: Company) { }
}

export class UpdateCompanyResponse implements Action {
    readonly type = UPDATE_COMPANY_RESPONSE;
    constructor(public payload: ResponseMessage) { }
}

export type CompanyActions = TryGetCompanyDetailById | GetCompanyDetailByIdResponse |
    TryUpdateCompany | UpdateCompanyResponse;