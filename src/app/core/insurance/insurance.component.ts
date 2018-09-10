import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import * as fromApp from '../../store/app.reducers';
import * as fromInsurance from './store/insurance.reducers';
import * as InsuranceActions from './store/insurance.actions';
import { Insurance } from './insurance.model';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RiskLevel } from './risk-level.model';
import { Coverage } from './coverage.model';
import { Customer } from './customer.model';
import { InsuranceSale } from './insuranceSale.model';
import { CustomerInsurance } from './customer-ins.model';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  productForm: FormGroup;
  customerForm: FormGroup;
  insuranceState: Observable<fromInsurance.State>;
  appUser: string = 'NG-APP';
  key: string = 'ItemNumber';
  reverse: boolean = false;
  p: number = 1;
  filter: any;
  defaultDropdownValue: number = 1;
  selectedInsurance: Insurance;
  selectedCustomer: Customer;


  constructor(private store: Store<fromApp.AppState>, private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.productForm = new FormGroup({
      'riskLevelCatalog': new FormControl(''),
      'coverageCatalog': new FormControl(''),
      'name': new FormControl('', [Validators.required]),
      'price': new FormControl('', [Validators.required]),
      'validDate': new FormControl('', [Validators.required]),
      'coveragePeriod': new FormControl('', [Validators.required])
    });

    this.customerForm = new FormGroup({
      'customer': new FormControl('', [Validators.required]),
      'coverage': new FormControl('', [Validators.required])
    });

  }

  ngOnInit() {
    let ins = new Insurance(this.appUser);

    this.getInsurance(ins);
    this.insuranceState = this.store.select('insurance');
  };

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  private getInsurance(ins: Insurance) {
    this.store.dispatch(new InsuranceActions.TryGetInsurance(ins));
  }

  private getRiskLevelCatalog(risk: RiskLevel) {
    this.store.dispatch(new InsuranceActions.TryGetRiskLevel(risk));
  }

  private getCoverageCatalog(cov: Coverage) {
    this.store.dispatch(new InsuranceActions.TryGetCoverage(cov));
  }

  onAddNewproductClick() {
    let cov = new Coverage(this.appUser);
    this.getCoverageCatalog(cov);
    this.productForm.controls['coverageCatalog'].setValue(4);

    let risk = new RiskLevel(this.appUser);
    this.getRiskLevelCatalog(risk);
    this.productForm.controls['riskLevelCatalog'].setValue(this.defaultDropdownValue);

  }

  addNewInsurance() {
    let riskLevel = this.productForm.controls['riskLevelCatalog'].value;
    let coverage = this.productForm.controls['coverageCatalog'].value ? 4 : this.productForm.controls['coverageCatalog'].value;
    let name = this.productForm.controls['name'].value;
    let price = this.productForm.controls['price'].value;
    let validDate = this.productForm.controls['validDate'].value;
    let coveragePeriod = this.productForm.controls['coveragePeriod'].value;

    let insurance = new Insurance(this.appUser, name, '', price, validDate, riskLevel, coverage, coveragePeriod)
    this.store.dispatch(new InsuranceActions.TryCreatensurance(insurance));

    this.productForm.reset();
  }

  editInsurance(ins: Insurance) {
    let risk = new RiskLevel(this.appUser);
    let cov = new Coverage(this.appUser);

    this.getRiskLevelCatalog(risk);
    this.getCoverageCatalog(cov);

    if (ins) {
      this.selectedInsurance = ins;
      this.productForm.controls['riskLevelCatalog'].setValue(ins.RiskLevelId);
      this.productForm.controls['coverageCatalog'].setValue(ins.CoverageId);
      this.productForm.controls['name'].setValue(ins.Name);
      this.productForm.controls['price'].setValue(ins.Price);
      this.productForm.controls['validDate'].setValue(ins.ValidDate.substring(0, 10));
      this.productForm.controls['coveragePeriod'].setValue(ins.CovPeriod);
    }
  }

  saveEditedInsurance() {
    let riskLevelId = this.productForm.controls['riskLevelCatalog'].value;
    let coverageId = this.productForm.controls['coverageCatalog'].value;
    let name = this.productForm.controls['name'].value;
    let price = this.productForm.controls['price'].value;
    let validDate = this.productForm.controls['validDate'].value;
    let coveragePeriod = this.productForm.controls['coveragePeriod'].value;

    let insurance = new Insurance(this.appUser, name, '', price, validDate, riskLevelId, coverageId, coveragePeriod)
    insurance.Id = this.selectedInsurance.Id

    this.store.dispatch(new InsuranceActions.TryUpdateInsurance(insurance));
  }

  deleteInsurance(ins: Insurance) {
    if (ins) {
      this.store.dispatch(new InsuranceActions.TryDeleteInsurance(ins));
    }
  }

  resetForm(form: FormGroup) {
    form.reset();
  }

  getCustomer(ins) {
    this.selectedInsurance = ins;
    let customer = new Customer(this.appUser);
    this.store.dispatch(new InsuranceActions.TryGetCustomer(customer));
  }

  loadCustomerInsurance(ins: Insurance) {
    this.selectedInsurance = ins;
    this.store.dispatch(new InsuranceActions.TryGetCustomerIns(ins));
  }

  associateIns() {
    let customer = this.customerForm.controls['customer'].value;
    let coverage = this.customerForm.controls['coverage'].value;

    let sale = new InsuranceSale(customer, this.selectedInsurance.Id, coverage, this.appUser);

    this.store.dispatch(new InsuranceActions.TryAssociateIns(sale));
  }

  deleteCustomerIns(ins: CustomerInsurance) {
    if (ins) {
      this.store.dispatch(new InsuranceActions.TryDeleteCustomerIns(ins));
    }
  }

}
