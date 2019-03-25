import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { PautaService } from '../pauta/pauta.service';
import { ActivatedRoute, Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(title, pautaService, router, route, errorHandler) {
        this.title = title;
        this.pautaService = pautaService;
        this.router = router;
        this.route = route;
        this.errorHandler = errorHandler;
        this.opcao = 'ABERTO';
        this.pautasAbertas = [];
        this.pautasFechadas = [];
        this.isChecked = true;
        setTimeout(function () {
        }, 1500);
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.title.setTitle('Home');
        console.log("Entrou na home");
        console.log(this.isChecked);
        if (this.opcao === 'ABERTO') {
            this.listaPautasAbertas();
        }
        else {
            this.listaPautasFechadas();
        }
    };
    HomePage.prototype.segmentChanged = function (ev) {
        if (ev.detail.value) {
            this.opcao = ev.detail.value;
        }
        console.log(this.opcao);
        if (this.opcao === 'ABERTO') {
            this.listaPautasAbertas();
        }
        else {
            this.listaPautasFechadas();
        }
    };
    HomePage.prototype.listaPautasAbertas = function () {
        var _this = this;
        this.pautasAbertas = [];
        this.data = null;
        this.pautaService.listarTodas()
            .then(function (resultado) {
            var arrayPautas = resultado;
            arrayPautas.forEach(function (pauta) {
                if (pauta.status === 'ABERTO') {
                    _this.pautasAbertas.push(pauta);
                }
            });
            setTimeout(function () {
                _this.data = _this.pautasAbertas;
                console.log(_this.data);
            }, 300);
        })
            .catch(function (erro) { return _this.errorHandler.handle(erro); });
    };
    HomePage.prototype.listaPautasFechadas = function () {
        var _this = this;
        this.pautasFechadas = [];
        this.data = null;
        this.pautaService.listarTodas()
            .then(function (resultado) {
            var arrayPautas = resultado;
            arrayPautas.forEach(function (pauta) {
                if (pauta.status === 'FECHADO') {
                    _this.pautasFechadas.push(pauta);
                }
            });
            setTimeout(function () {
                _this.data = _this.pautasFechadas;
                console.log(_this.data);
            }, 300);
        })
            .catch(function (erro) { return _this.errorHandler.handle(erro); });
    };
    HomePage.prototype.pautaSelecionada = function (pauta) {
        this.router.navigate(['/tabs/pauta/', { id: pauta.id }]);
    };
    HomePage.prototype.clickedSearch = function () {
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Title,
            PautaService,
            Router,
            ActivatedRoute,
            ErrorHandlerService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map