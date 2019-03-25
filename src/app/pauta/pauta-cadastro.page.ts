import { Component } from '@angular/core';
import { PautaService } from './pauta.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { PautaModel } from '../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-pauta-cadastro',
    templateUrl: 'pauta-cadastro.page.html',
    styleUrls: ['pauta-cadastro.page.scss']
})
export class PautaCadastroPage {

    pauta = new PautaModel;
    pautas = [];
    isLoading = false;
    usuarioNome: string;

    constructor(
        public toastController: ToastController,
        public loadingController: LoadingController,
        private title: Title,
        private router: Router,        
        private route: ActivatedRoute,
        private pautaService: PautaService,
        private errorHandler: ErrorHandlerService,
    ) {
        
    }

    ionViewDidEnter() {
        this.title.setTitle('Inclusão de pautas');

        const idPauta = this.route.snapshot.params['id'];
        console.log("Id recebido:" + idPauta)

        if (idPauta) {
            this.carregarPauta(idPauta);
        }
        
        this.pauta.autor = localStorage.getItem('usuarioNome');
    }

    ionViewDidLeave() {
        this.pauta = new PautaModel;
    }

    get editando() {
        return Boolean(this.pauta.id)
    }

    carregarPauta(id: number) {        
        this.pautaService.buscarPorCodigo(id)
            .then(pauta => {
                this.pauta = pauta;
                this.atualizarTituloEdicao();                
            })
            .catch(erro => this.errorHandler.handle(erro));
    }

    salvar(form: FormControl) {
        if (this.editando) {
            this.atualizarPauta(form);
        } else {
            this.adicionarPauta(form);
        }
    }

    adicionarPauta(form: FormControl) {  
        this.presentLoadingWithOptions();         
        this.pautaService.adicionar(this.pauta)
            .then(pautaAdicionada => {
                this.presentToast();
                this.router.navigate(['']);
                this.pauta = new PautaModel;
                this.loadingController.dismiss();
            })
            .catch(erro => this.errorHandler.handle(erro));
    }

    atualizarPauta(form: FormControl) {
        this.presentLoadingWithOptions();
        this.pautaService.atualizar(this.pauta)
            .then(pautaAtualizada => {
                this.presentToast();
                this.atualizarTituloEdicao();
                this.router.navigate(['tabs/home']);
                this.loadingController.dismiss();
            })
            .catch(erro => this.errorHandler.handle(erro));
    }

    nova() {
        setTimeout(function () {
            this.pauta = new PautaModel();
            this.pauta.autor = this.pauta.autor = localStorage.getItem('usuarioNome');
        }.bind(this), 1);
        this.router.navigate(['/tabs/pauta']);
    }

    atualizarTituloEdicao() {
        this.title.setTitle(`Edição de pauta: ${this.pauta.titulo}`);
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Pauta salva com sucesso.',
            duration: 2000,
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Fechar',
            color: 'success'
        });
        toast.present();
    }

    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
          spinner: 'lines',      
          message: 'Enviando...',
          translucent: true,
          cssClass: 'custom-class custom-loading'
        });
        return await loading.present();
      } 

}