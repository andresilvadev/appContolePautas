import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LogoutService } from '../seguranca/logout.service';
import { AuthService } from '../seguranca/auth.service';
var PreferenciaPage = /** @class */ (function () {
    function PreferenciaPage(auth, logoutService, errorHandler, router, title) {
        this.auth = auth;
        this.logoutService = logoutService;
        this.errorHandler = errorHandler;
        this.router = router;
        this.title = title;
    }
    PreferenciaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.title.setTitle('Minhas Preferências');
        setTimeout(function () {
            // this.data = {
            //   'heading': 'Normal text',
            //   'para1': 'Lorem ipsum dolor sit amet, consectetur',
            //   'para2': 'adipiscing elit.'
            // };
            _this.perfil();
        }, 500);
    };
    PreferenciaPage.prototype.perfil = function () {
        var _this = this;
        this.auth.usuarioLogado()
            .then(function (response) {
            console.log(response);
            _this.data = response;
        });
    };
    PreferenciaPage.prototype.logout = function () {
        var _this = this;
        this.logoutService.logout()
            .then(function () {
            _this.router.navigate(['/login']);
        })
            .catch(function (erro) { return _this.errorHandler.handle(erro); });
    };
    PreferenciaPage = tslib_1.__decorate([
        Component({
            selector: 'app-preferencia',
            templateUrl: 'preferencia.page.html',
            styleUrls: ['preferencia.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            LogoutService,
            ErrorHandlerService,
            Router,
            Title])
    ], PreferenciaPage);
    return PreferenciaPage;
}());
export { PreferenciaPage };
//# sourceMappingURL=preferencia.page.js.map