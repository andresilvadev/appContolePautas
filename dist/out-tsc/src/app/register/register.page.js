import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(auth, errorHandler, toastController, router) {
        this.auth = auth;
        this.errorHandler = errorHandler;
        this.toastController = toastController;
        this.router = router;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function (nome, email, senha, confirmaSenha) {
        var _this = this;
        var userObj = {
            name: nome,
            email: email,
            password: senha
        };
        this.auth.register(userObj)
            .then(function (response) {
            _this.router.navigate(['/login']);
            _this.presentToast("Conta criada com sucesso.");
        })
            .catch(function (erro) {
            _this.errorHandler.handle(erro);
        });
    };
    RegisterPage.prototype.presentToast = function (message) {
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
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            ErrorHandlerService,
            ToastController,
            Router])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map