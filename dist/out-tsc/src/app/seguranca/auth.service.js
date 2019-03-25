import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs';
import { environment } from './../../environments/environment';
var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.oauthTokenUrl = environment.apiUrl + "/oauth/token";
        this.usuarioUrl = environment.apiUrl + "/api/user/me";
        this.forgotUrl = environment.apiUrl + "/api/password/create";
        this.registerUrl = environment.apiUrl + "/api/register";
        this.carregarToken();
    }
    AuthService.prototype.login = function (usuario, senha) {
        var _this = this;
        var headers = new HttpHeaders()
            .append('Content-Type', 'application/x-www-form-urlencoded');
        var body = "grant_type=password&client_id=3&client_secret=F3oxF2nVenPLUloE7PnBhXhVjMDulUrtiw1ckvRF&username=" + usuario + "&password=" + senha;
        return this.http.post(this.oauthTokenUrl, body, { headers: headers, withCredentials: true })
            .toPromise()
            .then(function (response) {
            _this.armazenarToken(response.access_token);
        })
            .catch(function (response) {
            if (response.status === 400) {
                if (response.error === 'invalid_grant') {
                    return Promise.reject('Usuário ou senha inválida!');
                }
            }
            return Promise.reject(response);
        });
    };
    AuthService.prototype.obterNovoAccessToken = function () {
        var _this = this;
        var headers = new HttpHeaders()
            .append('Content-Type', 'application/x-www-form-urlencoded')
            .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
        var body = 'grant_type=refresh_token';
        return this.http.post(this.oauthTokenUrl, body, { headers: headers, withCredentials: true })
            .toPromise()
            .then(function (response) {
            _this.armazenarToken(response.access_token);
            console.log('Novo access token criado!');
            return Promise.resolve(null);
        })
            .catch(function (response) {
            console.error('Erro ao renovar token.', response);
            return Promise.resolve(null);
        });
    };
    AuthService.prototype.limparAccessToken = function () {
        localStorage.removeItem('token');
        this.jwtPayload = null;
    };
    AuthService.prototype.isAccessTokenInvalido = function () {
        var token = localStorage.getItem('token');
        return !token || this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.temPermissao = function (permissao) {
        return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
    };
    AuthService.prototype.temQualquerPermissao = function (roles) {
        for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
            var role = roles_1[_i];
            if (this.temPermissao(role)) {
                return true;
            }
        }
        return false;
    };
    AuthService.prototype.usuarioLogado = function () {
        return this.http.get(this.usuarioUrl)
            .toPromise()
            .then(function (response) { return response; });
    };
    AuthService.prototype.forgot = function (data) {
        var headers = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Accept', 'application/json');
        return this.http.post(this.forgotUrl, data, { headers: headers, withCredentials: true })
            .toPromise();
    };
    AuthService.prototype.register = function (data) {
        var headers = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Accept', 'application/json');
        return this.http.post(this.registerUrl, data, { headers: headers, withCredentials: true })
            .toPromise();
    };
    AuthService.prototype.armazenarToken = function (token) {
        this.jwtPayload = this.jwtHelper.decodeToken(token);
        localStorage.setItem('token', token);
    };
    AuthService.prototype.carregarToken = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.armazenarToken(token);
        }
    };
    AuthService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            JwtHelperService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map