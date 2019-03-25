import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Router } from '@angular/router';
var LoginPage = /** @class */ (function () {
    function LoginPage(auth, errorHandler, router) {
        this.auth = auth;
        this.errorHandler = errorHandler;
        this.router = router;
    }
    LoginPage.prototype.ionViewDidEnter = function () { };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function (usuario, senha) {
        var _this = this;
        this.auth.login(usuario, senha)
            .then(function () {
            _this.router.navigate(['/tabs']);
        })
            .catch(function (erro) {
            _this.errorHandler.handle(erro);
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            ErrorHandlerService,
            Router])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map