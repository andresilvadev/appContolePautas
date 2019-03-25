import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.auth.isAccessTokenInvalido()) {
            console.log('Navegação com access token inválido. Obtendo novo token...');
            return this.auth.obterNovoAccessToken()
                .then(function () {
                if (_this.auth.isAccessTokenInvalido()) {
                    _this.router.navigate(['/login']);
                    return false;
                }
                return true;
            });
        }
        else if (next.data.roles && !this.auth.temQualquerPermissao(next.data.roles)) {
            this.router.navigate(['/nao-autorizado']);
            return false;
        }
        return true;
    };
    AuthGuard = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map