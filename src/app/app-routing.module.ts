import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth-guard.service";

import { HeaderComponent } from "./core/header/header.component";
import { LoginComponent } from "./auth/login/login.component";
import { InsuranceComponent } from "./core/insurance/insurance.component";


const appRoutes: Routes = [
    {
        path: '', component: HeaderComponent, children: [
            { path: '', redirectTo: 'seguro', pathMatch: 'full' },
            { path: 'seguro', component: InsuranceComponent, canActivate: [AuthGuard] },            
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'ignore' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }