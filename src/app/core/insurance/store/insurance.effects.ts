import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { InsuranceService } from "../insurance.service";

import * as InsuranceAction from './insurance.actions';

@Injectable()
export class InsuranceEffects {
    constructor(private action$: Actions, private insuranceService: InsuranceService) { }


    @Effect() getInsurance = this.action$
        .ofType(InsuranceAction.TRY_GET_INSURANCE)
        .map(
            (action: InsuranceAction.TryGetInsurance) => {
                return action.payload;
            })
        .switchMap(
            (insurance) => {
                return this.insuranceService.getInsurance(insurance);
            }
        )
        .map(
            (insuranceList) => {
                if (insuranceList) {
                    return {
                        type: InsuranceAction.GET_INSURANCE_RESPONSE,
                        payload: insuranceList,
                        isLoading: false
                    }
                }
            }
        )

    @Effect() getRiskLevelList = this.action$
        .ofType(InsuranceAction.TRY_GET_RISKLEVEL)
        .map(
            (action: InsuranceAction.TryGetRiskLevel) => {
                return action.payload;
            })
        .switchMap(
            (risk) => {
                return this.insuranceService.getRiskLevelCatalog(risk);
            }
        )
        .map(
            (riskList) => {
                if (riskList) {
                    return {
                        type: InsuranceAction.GET_RISKLEVEL_RESPONSE,
                        isLoading: false,
                        payload: riskList
                    }
                }
            }
        )

    @Effect() getCoverageList = this.action$
        .ofType(InsuranceAction.TRY_GET_COVERAGE)
        .map(
            (action: InsuranceAction.TryGetCoverage) => {
                return action.payload;
            })
        .switchMap(
            (cov) => {
                return this.insuranceService.getCoverageCatalog(cov);
            }
        )
        .map(
            (coverageList) => {
                if (coverageList) {
                    return {
                        type: InsuranceAction.GET_CONVERAGE_RESPONSE,
                        isLoading: false,
                        payload: coverageList
                    }
                }
            }
        )

    @Effect() createInsurance = this.action$
        .ofType(InsuranceAction.TRY_CREATE_INSURANCE)
        .map(
            (action: InsuranceAction.TryCreatensurance) => {
                return action.payload;
            })
        .switchMap(
            (insurance) => {
                return this.insuranceService.createInsurance(insurance);
            }
        )
        .map(
            (response) => {
                if (response) {
                    return {
                        type: InsuranceAction.GET_CREATE_INSURANCE_RESPONSE,
                        isLoading: false,
                        payload: response
                    }
                }
            }
        )

    @Effect() deleteInsurance = this.action$
        .ofType(InsuranceAction.TRY_DELETE_INSURANCE)
        .map(
            (action: InsuranceAction.TryDeleteInsurance) => {
                return action.payload;
            })
        .switchMap(
            (insurance) => {
                return this.insuranceService.deleteInsurance(insurance);
            }
        )
        .map(
            (response) => {
                if (response) {
                    return {
                        type: InsuranceAction.GET_DELETE_INSURANCE_RESPONSE,
                        isLoading: false,
                        payload: response
                    }
                }
            }
        )

    @Effect() updateInsurance = this.action$
        .ofType(InsuranceAction.TRY_UPDATE_INSURANCE)
        .map(
            (action: InsuranceAction.TryUpdateInsurance) => {
                return action.payload;
            })
        .switchMap(
            (insurance) => {
                return this.insuranceService.editInsurance(insurance);
            }
        )
        .map(
            (response) => {
                if (response) {
                    return {
                        type: InsuranceAction.GET_UPDATE_INSURANCE_RESPONSE,
                        isLoading: false,
                        payload: response
                    }
                }
            }
        )

    @Effect() associateInsurance = this.action$
        .ofType(InsuranceAction.TRY_ASSOCIATE_INS)
        .map(
            (action: InsuranceAction.TryAssociateIns) => {
                return action.payload;
            })
        .switchMap(
            (insurance) => {
                return this.insuranceService.associateInsurance(insurance);
            }
        )
        .map(
            (response) => {
                if (response) {
                    return {
                        type: InsuranceAction.GET_ASSOCIATE_INS_RESPONSE,
                        isLoading: false,
                        payload: response
                    }
                }
            }
        )

    @Effect() getCustomer = this.action$
        .ofType(InsuranceAction.TRY_GET_CUSTOMER)
        .map(
            (action: InsuranceAction.TryGetCustomer) => {
                return action.payload;
            })
        .switchMap(
            (customer) => {
                return this.insuranceService.getCustomer(customer);
            }
        )
        .map(
            (customerList) => {
                if (customerList) {
                    return {
                        type: InsuranceAction.GET_CUSTOMER_RESPONSE,
                        isLoading: false,
                        payload: customerList
                    }
                }
            }
        )

    @Effect() getCustomerIns = this.action$
        .ofType(InsuranceAction.TRY_GET_CUSTOMER_INSURANCE)
        .map(
            (action: InsuranceAction.TryGetCustomerIns) => {
                return action.payload;
            })
        .switchMap(
            (ins) => {
                return this.insuranceService.getCustomerInsurance(ins);
            }
        )
        .map(
            (customerInsList) => {
                if (customerInsList) {
                    return {
                        type: InsuranceAction.GET_CUSTOMER_INS_RESPONSE,
                        isLoading: false,
                        payload: customerInsList
                    }
                }
            }
        )

    @Effect() deleteCustomerIns = this.action$
        .ofType(InsuranceAction.TRY_DELETE_CUSTOMER_INS)
        .map(
            (action: InsuranceAction.TryDeleteCustomerIns) => {
                return action.payload;
            })
        .switchMap(
            (ins) => {
                return this.insuranceService.deleteCustomerInsurance(ins);
            }
        )
        .map(
            (response) => {
                if (response) {
                    return {
                        type: InsuranceAction.GET_DELETE_CUSTOMER_INS_RESPONSE,
                        isLoading: false,
                        payload: response
                    }
                }
            }
        )

}
