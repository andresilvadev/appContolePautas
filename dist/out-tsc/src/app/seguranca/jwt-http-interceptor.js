import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var JwtHttpInterceptor = /** @class */ (function () {
    function JwtHttpInterceptor() {
    }
    JwtHttpInterceptor.prototype.intercept = function (request, next) {
        var token = localStorage.getItem('token');
        if (token && request.url.indexOf('/oauth/token') === -1) {
            request = request.clone({
                setHeaders: {
                    Accept: "application/json",
                    'Content-Type': "application/json",
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request);
    };
    JwtHttpInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], JwtHttpInterceptor);
    return JwtHttpInterceptor;
}());
export { JwtHttpInterceptor };
//# sourceMappingURL=jwt-http-interceptor.js.map