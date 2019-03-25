import * as tslib_1 from "tslib";
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './auth.guard';
import { LogoutService } from './logout.service';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { environment } from '../../environments/environment';
// import { LoginPage } from '../login/login.page';
export function tokenGetter() {
    return localStorage.getItem('token');
}
var SegurancaModule = /** @class */ (function () {
    function SegurancaModule() {
    }
    SegurancaModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                JwtModule.forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: environment.tokenWhitelistedDomains,
                        blacklistedRoutes: environment.tokenBlacklistedRoutes
                    }
                }),
                SegurancaRoutingModule
            ],
            declarations: [
            // LoginPage
            ],
            providers: [
                AuthGuard,
                LogoutService
            ],
            exports: [
            // LoginPage
            ]
        })
    ], SegurancaModule);
    return SegurancaModule;
}());
export { SegurancaModule };
//# sourceMappingURL=seguranca.module.js.map