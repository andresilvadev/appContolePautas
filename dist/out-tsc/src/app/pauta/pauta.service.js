import * as tslib_1 from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import { environment } from '../../environments/environment';
import { CapptanHttp } from '../seguranca/capptan-http';
var PautaService = /** @class */ (function () {
    function PautaService(http) {
        this.http = http;
        this.pautaUrl = environment.apiUrl + "/api/pautas";
    }
    PautaService.prototype.listarTodas = function () {
        return this.http.get(this.pautaUrl)
            .toPromise()
            .then(function (response) { return response; });
    };
    PautaService.prototype.excluir = function (id) {
        return this.http.delete(this.pautaUrl + "/" + id)
            .toPromise()
            .then(function () { return null; });
    };
    PautaService.prototype.mudarStatus = function (id, status) {
        var headers = new HttpHeaders()
            .append('Content-Type', 'application/json');
        return this.http.put(this.pautaUrl + "/" + id + "/ativo", status, { headers: headers })
            .toPromise()
            .then(function () { return null; });
    };
    PautaService.prototype.adicionar = function (pauta) {
        return this.http.post(this.pautaUrl, pauta)
            .toPromise();
    };
    PautaService.prototype.atualizar = function (pauta) {
        return this.http.put(this.pautaUrl + "/" + pauta.id, pauta)
            .toPromise();
    };
    PautaService.prototype.buscarPorCodigo = function (id) {
        return this.http.get(this.pautaUrl + "/" + id)
            .toPromise();
    };
    PautaService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [CapptanHttp])
    ], PautaService);
    return PautaService;
}());
export { PautaService };
//# sourceMappingURL=pauta.service.js.map