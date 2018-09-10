import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective } from "../shared/accordion";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { MenuComponent } from './header/menu/menu.component';
import { MenuService } from "./header/menu/menu.service";
import { HeaderComponent } from "./header/header.component";
import { TimeAgoPipe } from "time-ago-pipe";
import { SharedModule } from "../shared/shared.module";
import { UserService } from "./user/user.service";
import { CompanyComponent } from './company/company.component';
import { CompanyService } from "./company/company.service";
import { UserComponent } from "./user/user.component";
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceService } from "./insurance/insurance.service";


@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    NgSelectModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    TranslateModule
  ],
  declarations: [
    MenuComponent,
    HeaderComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    TimeAgoPipe,
    UserComponent,
    CompanyComponent,
    InsuranceComponent
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    MenuComponent
  ],
  providers: [
    MenuService,
    UserService,
    CompanyService,
    InsuranceService
  ]
})

export class CoreModule { }