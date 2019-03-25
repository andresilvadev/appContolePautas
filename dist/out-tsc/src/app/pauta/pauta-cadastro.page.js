import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PautaService } from './pauta.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { PautaModel } from '../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../seguranca/auth.service';
var PautaCadastroPage = /** @class */ (function () {
    function PautaCadastroPage(toastController, loadingController, title, router, auth, route, pautaService, errorHandler) {
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.title = title;
        this.router = router;
        this.auth = auth;
        this.route = route;
        this.pautaService = pautaService;
        this.errorHandler = errorHandler;
        this.pauta = new PautaModel;
        this.pautas = [];
        this.isLoading = false;
    }
    PautaCadastroPage.prototype.ionViewDidEnter = function () {
        this.title.setTitle('Inclusão de pautas');
        var idPauta = this.route.snapshot.params['id'];
        console.log("Id recebido:" + idPauta);
        if (idPauta) {
            this.carregarPauta(idPauta);
        }
        this.usuarioLogado();
    };
    PautaCadastroPage.prototype.ionViewDidLeave = function () {
        this.pauta = new PautaModel;
    };
    Object.defineProperty(PautaCadastroPage.prototype, "editando", {
        get: function () {
            return Boolean(this.pauta.id);
        },
        enumerable: true,
        configurable: true
    });
    PautaCadastroPage.prototype.carregarPauta = function (id) {
        var _this = this;
        this.pautaService.buscarPorCodigo(id)
            .then(function (pauta) {
            _this.pauta = pauta;
            _this.atualizarTituloEdicao();
        })
            .catch(function (erro) { return _this.errorHandler.handle(erro); });
    };
    PautaCadastroPage.prototype.salvar = function (form) {
        if (this.editando) {
            this.atualizarPauta(form);
        }
        else {
            this.adicionarPauta(form);
        }
    };
    PautaCadastroPage.prototype.adicionarPauta = function (form) {
        var _this = this;
        this.pautaService.adicionar(this.pauta)
            .then(function (pautaAdicionada) {
            _this.presentToast();
            _this.router.navigate(['']);
            _this.pauta = new PautaModel;
        })
            .catch(function (erro) { return _this.errorHandler.handle(erro); });
    };
    PautaCadastroPage.prototype.atualizarPauta = function (form) {
        var _this = this;
        this.pautaService.atualizar(this.pauta)
            .then(function (pautaAtualizada) {
            _this.presentToast();
            _this.atualizarTituloEdicao();
            _this.router.navigate(['tabs/home']);
        })
            .catch(function (erro) { return _this.errorHandler.handle(erro); });
    };
    PautaCadastroPage.prototype.nova = function () {
        setTimeout(function () {
            this.pauta = new PautaModel();
        }.bind(this), 1);
        this.router.navigate(['/tabs/pauta']);
    };
    PautaCadastroPage.prototype.atualizarTituloEdicao = function () {
        this.title.setTitle("Edi\u00E7\u00E3o de pauta: " + this.pauta.titulo);
    };
    PautaCadastroPage.prototype.usuarioLogado = function () {
        var _this = this;
        this.auth.usuarioLogado()
            .then(function (response) {
            _this.pauta = response.name;
            console.log(_this.pauta);
        });
    };
    PautaCadastroPage.prototype.presentToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Pauta salva com sucesso.',
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
    PautaCadastroPage = tslib_1.__decorate([
        Component({
            selector: 'app-pauta-cadastro',
            templateUrl: 'pauta-cadastro.page.html',
            styleUrls: ['pauta-cadastro.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController,
            LoadingController,
            Title,
            Router,
            AuthService,
            ActivatedRoute,
            PautaService,
            ErrorHandlerService])
    ], PautaCadastroPage);
    return PautaCadastroPage;
}());
export { PautaCadastroPage };
//# sourceMappingURL=pauta-cadastro.page.js.map