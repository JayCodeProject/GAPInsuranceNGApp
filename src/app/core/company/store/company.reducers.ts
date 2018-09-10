import { Company } from "../../../shared/company.model";
import * as CompanyActions from './company.actions';
import { ResponseMessage } from "../../../shared/response_message.model";


export interface State {
    company: Company,
    loading: boolean,
    errorMsg: string,
    response: ResponseMessage
}

const INITIAL_STATE: State = {
    company: null,
    loading: false,
    errorMsg: '',
    response: null
}

export function CompanyReducers(state = INITIAL_STATE, action: CompanyActions.CompanyActions) {
    switch (action.type) {
        case CompanyActions.TRY_GET_COMPANY_DETAIL_BY_ID:
            return {
                ...state,
                loading: true,
                company: action.payload
            }
        case CompanyActions.GET_COMPANY_DETAIL_BY_ID_RESPONSE:
            return {
                ...state,
                loading: false,
                company: action.payload
            }
        case CompanyActions.TRY_UPDATE_COMPANY:
            return {
                ...state,
                loading: true,
                company: action.payload
            }
        case CompanyActions.UPDATE_COMPANY_RESPONSE:
            return {
                ...state,
                loading: false,
                response: action.payload
            }
        default:
            return state;
    }
}