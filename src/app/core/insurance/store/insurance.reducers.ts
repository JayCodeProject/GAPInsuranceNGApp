import { ResponseMessage } from "../../../shared/response_message.model";
import { Insurance } from "../insurance.model";

import * as InsuranceActions from './insurance.actions';
import { RiskLevel } from "../risk-level.model";
import { Coverage } from "../coverage.model";
import { Customer } from "../customer.model";
import { CustomerInsurance } from "../customer-ins.model";



export interface State {
    insuranceList: Insurance[];
    riskLevelList: RiskLevel[];
    coverageList: Coverage[];
    customerList: Customer[];
    customerInsList: CustomerInsurance[];
    isLoading: boolean;
    response: ResponseMessage | null;
}

const INITIAL_STATE: State = {
    insuranceList: [],
    coverageList: [],
    riskLevelList: [],
    customerList: [],
    customerInsList: [],
    isLoading: false,
    response: null
};


export function InsuranceReducers(state = INITIAL_STATE, action: InsuranceActions.InsuranceActions) {
    switch (action.type) {
        case InsuranceActions.TRY_GET_INSURANCE:
            return {
                ...state,
                isLoading: true
            }
        case InsuranceActions.GET_INSURANCE_RESPONSE:
            return {
                ...state,
                isLoading: false,
                insuranceList: action.payload
            }
        case InsuranceActions.TRY_GET_RISKLEVEL:
            return {
                ...state,
                isLoading: false
            }
        case InsuranceActions.GET_RISKLEVEL_RESPONSE:
            return {
                ...state,
                isLoading: false,
                riskLevelList: action.payload
            }
        case InsuranceActions.TRY_GET_COVERAGE:
            return {
                ...state,
                isLoading: false
            }
        case InsuranceActions.GET_CONVERAGE_RESPONSE:
            return {
                ...state,
                isLoading: false,
                coverageList: action.payload
            }
        case InsuranceActions.TRY_CREATE_INSURANCE:
            var riskName = state.riskLevelList.find(c => c.Id == action.payload.RiskLevelId).Name;
            var coverageName = state.coverageList.find(c => c.Id == action.payload.CoverageId).Name;

            action.payload.RiskLevel = riskName;
            action.payload.Coverage = coverageName;

            var insuranceList = [...state.insuranceList];
            insuranceList = [...state.insuranceList, action.payload];
            return {
                ...state,
                isLoading: false,
                insuranceList: insuranceList
            }
        case InsuranceActions.GET_CREATE_INSURANCE_RESPONSE:
            var insuranceList = [...state.insuranceList];
            var lastInsItem = insuranceList[insuranceList.length - 1];

            lastInsItem.Id = action.payload.Response;

            if (lastInsItem.Id > 0) {
                insuranceList.splice((insuranceList.length - 1), 1);
                insuranceList.push(lastInsItem);
            }
            return {
                ...state,
                isLoading: false,
                response: action.payload,
                insuranceList: insuranceList
            }
        case InsuranceActions.TRY_DELETE_INSURANCE:
            const insList = [...state.insuranceList];
            insList.splice(insList.indexOf(action.payload), 1);
            return {
                ...state,
                isLoading: false,
                insuranceList: insList
            }
        case InsuranceActions.GET_DELETE_INSURANCE_RESPONSE:
            return {
                ...state,
                isLoading: false,
                response: action.payload
            }
        case InsuranceActions.TRY_UPDATE_INSURANCE:
            const insurance = state.insuranceList.find(i => i.Id == action.payload.Id);
            const updatedinsurance = {
                ...insurance,
                ...action.payload
            };
            const updatedInsList = [...state.insuranceList];

            var riskName = state.riskLevelList.find(c => c.Id == action.payload.RiskLevelId).Name;
            var coverageName = state.coverageList.find(c => c.Id == action.payload.CoverageId).Name;

            updatedinsurance.RiskLevel = riskName;
            updatedinsurance.Coverage = coverageName;

            for (var i = 0; i < updatedInsList.length; i++) {
                if (updatedInsList[i].Id === action.payload.Id) {
                    updatedInsList[i] = updatedinsurance
                }
            }
            return {
                ...state,
                isLoading: false,
                insuranceList: updatedInsList
            }
        case InsuranceActions.GET_UPDATE_INSURANCE_RESPONSE:
            return {
                ...state,
                isLoading: false,
                response: action.payload
            }
        case InsuranceActions.TRY_ASSOCIATE_INS:
            return {
                ...state,
                isLoading: true
            }
        case InsuranceActions.GET_ASSOCIATE_INS_RESPONSE:
            return {
                ...state,
                isLoading: false,
                response: action.payload
            }
        case InsuranceActions.TRY_GET_CUSTOMER:
            return {
                ...state,
                isLoading: false
            }
        case InsuranceActions.GET_CUSTOMER_RESPONSE:
            return {
                ...state,
                isLoading: false,
                customerList: action.payload
            }
        case InsuranceActions.TRY_GET_CUSTOMER_INSURANCE:
            return {
                ...state,
                isLoading: false
            }
        case InsuranceActions.GET_CUSTOMER_INS_RESPONSE:
            return {
                ...state,
                isLoading: false,
                customerInsList: action.payload
            }
        case InsuranceActions.TRY_DELETE_CUSTOMER_INS:
            const customerInsList = [...state.customerInsList];
            customerInsList.splice(customerInsList.indexOf(action.payload), 1);
            return {
                ...state,
                isLoading: false,
                customerInsList: customerInsList
            }
        case InsuranceActions.GET_DELETE_CUSTOMER_INS_RESPONSE:
            return {
                ...state,
                isLoading: false,
                response: action.payload
            }
        default:
            return state;
    }
}