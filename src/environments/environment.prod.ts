// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  //apiBaseUrl: 'http://localhost:54400/api/v1/', 
  apiBaseUrl: 'http://gapinsrestapi.azurewebsites.net/api/v1/', 
  tokenUrl: 'token',
  loginUrl: 'usermanagement/authenticate',
  userDetailUrl: 'usermanagement/user',
  menuUrl: 'menu',
  getCompanyByUser: 'usermanagement/usercompany',

  //COMPANY
  getCompanyDetailUrl: 'company/get',
  headquarterStationUrl: 'company/headquarterStation',
  updateCompanyUrl: 'company/update',
  updateStationStatusUrl: 'company/station/status/update',
  dashboardUrl: 'company/dashboard',
  companyStatisticUrl: 'company/statistic',
  updateAnnouncementStatusUrl: 'company/announcement/status/update',

  //INSURANCE
  getInsuranceUrl: 'insurance/get',
  updateInsurance: 'insurance/update',
  createInsurance: 'insurance/create',
  deleteInsurance: 'insurance/delete',
  getRiskLevelUrl: 'catalog/risklevel',
  getcoverageUrl: 'catalog/coverage',
  associateInsuranceUrl: 'insurance/associate',

  //CUSTOMER
  getCustomerUrl: 'customer/get',
  getCustomerInsuranceUrl: 'insurance/customer/get',
  deleteCustomerInsUr: 'insurance/customer/delete',

  appName: 'NG-APP'
};
