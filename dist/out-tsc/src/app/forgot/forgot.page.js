import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
var ForgotPage = /** @class */ (function () {
    function ForgotPage(auth, errorHandler, toastController, router) {
        this.auth = auth;
        this.errorHandler = errorHandler;
        this.toastController = toastController;
        this.router = router;
    }
    ForgotPage.prototype.ionViewDidEnter = function () { };
    ForgotPage.prototype.ngOnInit = function () { };
    ForgotPage.prototype.forgot = function (email) {
        var _this = this;
        var emailObj = {
            email: email
        };
        this.auth.forgot(emailObj)
            .then(function (response) {
            var res = response;
            _this.router.navigate(['/login']);
            _this.presentToast(res.message);
        })
            .catch(function (erro) {
            _this.errorHandler.handle(erro);
        });
    };
    ForgotPage.prototype.presentToast = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000,
                            showCloseButton: true,
                            position: 'bottom',
                            closeButtonText: 'Fechar',
                            color: 'success'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPage = tslib_1.__decorate([
        Component({
            selector: 'app-forgot',
            templateUrl: './forgot.page.html',
            styleUrls: ['./forgot.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            ErrorHandlerService,
            ToastController,
            Router])
    ], ForgotPage);
    return ForgotPage;
}());
export { ForgotPage };
//# sourceMappingURL=forgot.page.js.map