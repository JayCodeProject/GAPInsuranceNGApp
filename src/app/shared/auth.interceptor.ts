import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import 'rxjs/add/operator/take';

import 'rxjs/add/operator/switchMap';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store<fromApp.AppState>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select('auth')
            .take(1)
            .switchMap((authState: fromAuth.State) => {
                //const reqCopy = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });

                return next.handle(req);
            })

    }
}