import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NotAuthenticatedError } from '../seguranca/capptan-http';
import { HttpErrorResponse } from '@angular/common/http';
var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService() {
    }
    ErrorHandlerService.prototype.handle = function (errorResponse) {
        var msg;
        if (typeof errorResponse === 'string') {
            msg = errorResponse;
        }
        else if (errorResponse instanceof NotAuthenticatedError) {
            msg = 'Sua sessão expirou!';
            //this.router.navigate(['/login']);
            console.log("Redirecionar para o login");
        }
        else if (errorResponse instanceof HttpErrorResponse
            && errorResponse.status >= 400 && errorResponse.status <= 499) {
            var mensagemErrorResponse = errorResponse.error.message;
            if (mensagemErrorResponse) {
                msg = mensagemErrorResponse;
            }
            else {
                msg = 'Ocorreu um erro ao processar a sua solicitação';
            }
            if (errorResponse.status === 403) {
                msg = 'Você não tem permissão para executar esta ação';
            }
            try {
                msg = errorResponse.error[0].mensagemUsuario;
            }
            catch (e) { }
            console.error('Ocorreu um erro', errorResponse);
        }
        else {
            msg = 'Erro ao processar serviço remoto. Tente novamente.';
            console.error('Ocorreu um erro', errorResponse);
        }
        console.log("Disparar o tost de erro");
        // this.messageService.add({ severity: 'error', detail: msg });
    };
    ErrorHandlerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());
export { ErrorHandlerService };
//# sourceMappingURL=error-handler.service.js.map