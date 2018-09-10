import { Action } from "@ngrx/store";
import { Insurance } from "../insurance.model";
import { RiskLevel } from "../risk-level.model";
import { Coverage } from "../coverage.model";
import { ResponseMessage } from "../../../shared/response_message.model";
import { InsuranceSale } from "../insuranceSale.model";
import { Customer } from "../customer.model";
import { CustomerInsurance } from "../customer-ins.model";

export const TRY_GET_INSURANCE = 'TRY_GET_INSURANCE';
export const GET_INSURANCE_RESPONSE = 'GET_INSURANCE_RESPONSE';
export const TRY_GET_RISKLEVEL = 'TRY_GET_RISKLEVEL';
export const GET_RISKLEVEL_RESPONSE = 'GET_RISKLEVEL_RESPONSE';
export const TRY_GET_COVERAGE = 'TRY_GET_COVERAGE';
export const GET_CONVERAGE_RESPONSE = 'GET_CONVERAGE_RESPONSE';
export const TRY_CREATE_INSURANCE = 'TRY_CREATE_INSURANCE';
export const GET_CREATE_INSURANCE_RESPONSE = 'GET_CREATE_INSURANCE_RESPONSE';
export const TRY_DELETE_INSURANCE = 'TRY_DELETE_INSURANCE';
export const GET_DELETE_INSURANCE_RESPONSE = 'GET_DELETE_INSURANCE_RESPONSE';
export const TRY_UPDATE_INSURANCE = 'TRY_UPDATE_INSURANCE';
export const GET_UPDATE_INSURANCE_RESPONSE = 'GET_UPDATE_INSURANCE_RESPONSE';
export const TRY_ASSOCIATE_INS = 'TRY_ASSOCIATE_INS';
export const GET_ASSOCIATE_INS_RESPONSE = 'GET_ASSOCIATE_INS_RESPONSE';
export const TRY_GET_CUSTOMER = 'TRY_GET_CUSTOMER';
export const GET_CUSTOMER_RESPONSE = 'GET_CUSTOMER_RESPONSE';
export const TRY_GET_CUSTOMER_INSURANCE = 'TRY_GET_CUSTOMER_INSURANCE';
export const GET_CUSTOMER_INS_RESPONSE = 'GET_CUSTOMER_INS_RESPONSE';
export const TRY_DELETE_CUSTOMER_INS = 'TRY_DELETE_CUSTOMER_INS';
export const GET_DELETE_CUSTOMER_INS_RESPONSE = 'GET_DELETE_CUSTOMER_INS_RESPONSE';


export class TryGetInsurance implements Action {
    readonly type = TRY_GET_INSURANCE;
    constructor(public payload: Insurance) { }
}

export class GetInsuranceResponse implements Action {
    readonly type = GET_INSURANCE_RESPONSE;
    constructor(public payload: Insurance[]) { }
}

export class TryGetRiskLevel implements Action {
    readonly type = TRY_GET_RISKLEVEL;
    constructor(public payload: RiskLevel) { }
}

export class GetRiskLevelResponse implements Action {
    readonly type = GET_RISKLEVEL_RESPONSE;
    constructor(public payload: RiskLevel[]) { }
}

export class TryGetCoverage implements Action {
    readonly type = TRY_GET_COVERAGE;
    constructor(public payload: Coverage) { }
}

export class GetCoverageResponse implements Action {
    readonly type = GET_CONVERAGE_RESPONSE;
    constructor(public payload: Coverage[]) { }
}

export class TryCreatensurance implements Action {
    readonly type = TRY_CREATE_INSURANCE;
    constructor(public payload: Insurance) { }
}

export class GetCreateInsuranceResponse implements Action {
    readonly type = GET_CREATE_INSURANCE_RESPONSE;
    constructor(public payload: ResponseMessage) { }
}

export class TryDeleteInsurance implements Action {
    readonly type = TRY_DELETE_INSURANCE;
    constructor(public payload: Insurance) { }
}

export class GetDeleteAInsuranceResponse implements Action {
    readonly type = GET_DELETE_INSURANCE_RESPONSE;
    constructor(public payload: ResponseMessage) { }
}

export class TryUpdateInsurance implements Action {
    readonly type = TRY_UPDATE_INSURANCE;
    constructor(public payload: Insurance) { }
}

export class GetUpdateInsuranceResponse implements Action {
    readonly type = GET_UPDATE_INSURANCE_RESPONSE;
    constructor(public payload: ResponseMessage) { }
}

export class TryAssociateIns implements Action {
    readonly type = TRY_ASSOCIATE_INS;
    constructor(public payload: InsuranceSale) { }
}

export class GetAssociateInsResponse implements Action {
    readonly type = GET_ASSOCIATE_INS_RESPONSE;
    constructor(public payload: ResponseMessage) { }
}

export class TryGetCustomer implements Action {
    readonly type = TRY_GET_CUSTOMER;
    constructor(public payload: Customer) { }
}

export class GetCustomerReponse implements Action {
    readonly type = GET_CUSTOMER_RESPONSE;
    constructor(public payload: Customer[]) { }
}

export class TryGetCustomerIns implements Action {
    readonly type = TRY_GET_CUSTOMER_INSURANCE;
    constructor(public payload: Insurance) { }
}

export class GetCustomerInsResponse implements Action {
    readonly type = GET_CUSTOMER_INS_RESPONSE;
    constructor(public payload: CustomerInsurance[]) { }
}

export class TryDeleteCustomerIns implements Action {
    readonly type = TRY_DELETE_CUSTOMER_INS;
    constructor(public payload: CustomerInsurance) { }
}

export class GetDeleteCustomerInsuranceResponse implements Action {
    readonly type = GET_DELETE_CUSTOMER_INS_RESPONSE;
    constructor(public payload: ResponseMessage) { }
}



export type InsuranceActions = TryGetInsurance | GetInsuranceResponse | TryGetRiskLevel | GetRiskLevelResponse | TryGetCoverage | GetCoverageResponse |
    TryCreatensurance | GetCreateInsuranceResponse | TryDeleteInsurance | GetDeleteAInsuranceResponse | TryUpdateInsurance | GetUpdateInsuranceResponse |
    TryAssociateIns | GetAssociateInsResponse | TryGetCustomer | GetCustomerReponse | TryGetCustomerIns | GetCustomerInsResponse |
    TryDeleteCustomerIns | GetDeleteCustomerInsuranceResponse;