import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { from as observableFromPromise } from 'rxjs';
import { AuthService } from './auth.service';
var NotAuthenticatedError = /** @class */ (function () {
    function NotAuthenticatedError() {
    }
    return NotAuthenticatedError;
}());
export { NotAuthenticatedError };
var CapptanHttp = /** @class */ (function (_super) {
    tslib_1.__extends(CapptanHttp, _super);
    function CapptanHttp(auth, httpHandler) {
        var _this = _super.call(this, httpHandler) || this;
        _this.auth = auth;
        _this.httpHandler = httpHandler;
        return _this;
    }
    CapptanHttp.prototype.delete = function (url, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.delete.call(_this, url, options); });
    };
    CapptanHttp.prototype.patch = function (url, body, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.patch.call(_this, url, options); });
    };
    CapptanHttp.prototype.head = function (url, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.head.call(_this, url, options); });
    };
    CapptanHttp.prototype.options = function (url, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.options.call(_this, url, options); });
    };
    CapptanHttp.prototype.get = function (url, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.get.call(_this, url, options); });
    };
    CapptanHttp.prototype.post = function (url, body, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.post.call(_this, url, body, options); });
    };
    CapptanHttp.prototype.put = function (url, body, options) {
        var _this = this;
        return this.fazerRequisicao(function () { return _super.prototype.put.call(_this, url, body, options); });
    };
    CapptanHttp.prototype.fazerRequisicao = function (fn) {
        var _this = this;
        if (this.auth.isAccessTokenInvalido()) {
            console.log('Requisição HTTP com access token inválido. Obtendo novo token...');
            var chamadaNovoAccessToken = this.auth.obterNovoAccessToken()
                .then(function () {
                if (_this.auth.isAccessTokenInvalido()) {
                    throw new NotAuthenticatedError();
                }
                return fn().toPromise();
            });
            return observableFromPromise(chamadaNovoAccessToken);
        }
        else {
            return fn();
        }
    };
    CapptanHttp = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            HttpHandler])
    ], CapptanHttp);
    return CapptanHttp;
}(HttpClient));
export { CapptanHttp };
//# sourceMappingURL=capptan-http.js.map