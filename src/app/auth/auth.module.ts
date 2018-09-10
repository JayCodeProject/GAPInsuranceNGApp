import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth-guard.service";
import { LoginComponent } from './login/login.component';
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        RouterModule,
        TranslateModule
    ],
    providers: [
        AuthService, AuthGuard
    ]
})

export class AuthModule { }