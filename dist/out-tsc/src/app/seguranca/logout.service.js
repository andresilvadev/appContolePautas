import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';
import { CapptanHttp } from './capptan-http';
var LogoutService = /** @class */ (function () {
    function LogoutService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.tokensRenokeUrl = environment.apiUrl + "/api/tokens/revoke";
    }
    LogoutService.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.tokensRenokeUrl, { withCredentials: true })
            .toPromise()
            .then(function () {
            _this.auth.limparAccessToken();
        });
    };
    LogoutService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [CapptanHttp,
            AuthService])
    ], LogoutService);
    return LogoutService;
}());
export { LogoutService };
//# sourceMappingURL=logout.service.js.map