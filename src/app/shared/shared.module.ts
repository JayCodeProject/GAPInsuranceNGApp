import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "./spinner/spinner.component";
import { NgModule } from "@angular/core";
import { CardRefreshDirective } from "./card/card-refresh.directive";
import { CardToggleDirective } from "./card/card-toggle.directive";
import { CardComponent } from "./card/card.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot()
    ],
    declarations: [
        CardToggleDirective,
        CardRefreshDirective,
        SpinnerComponent,
        CardComponent
    ],
    exports: [
        CardRefreshDirective,
        CardToggleDirective,
        SpinnerComponent,
        CardComponent,
        NgbModule
    ],
    providers: [

    ]
})

export class SharedModule { }
