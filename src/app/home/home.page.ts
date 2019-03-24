import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { PautaService } from '../pauta/pauta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {

    data: any;
    opcao: string = 'ABERTO';    
    pautasAbertas = [];
    pautasFechadas = [];
    isChecked = true;

    constructor(
        private title: Title,
        private pautaService: PautaService,
        private router: Router,
        private route: ActivatedRoute,
        private errorHandler: ErrorHandlerService
    ) {
        setTimeout(() => {
        
        }, 1500);
    }

    ionViewDidEnter() {        
        this.title.setTitle('Home');        
        console.log("Entrou na home");        
        console.log(this.isChecked);

        if (this.opcao === 'ABERTO') {
            this.listaPautasAbertas();
        } else {
            this.listaPautasFechadas();
        }
    }

    segmentChanged(ev?: any) {

        if(ev.detail.value) {
            this.opcao = ev.detail.value;
        }

        console.log(this.opcao)

        if (this.opcao === 'ABERTO') {
            this.listaPautasAbertas();
        } else {
            this.listaPautasFechadas();
        }
    }

    listaPautasAbertas() {
        this.pautasAbertas = [];
        this.data = null;

        this.pautaService.listarTodas()
            .then(resultado => {
                let arrayPautas: any = resultado;
                arrayPautas.forEach(pauta => {
                    if (pauta.status === 'ABERTO') {
                        this.pautasAbertas.push(pauta)
                    }
                });
                
                setTimeout(() => {
                    this.data = this.pautasAbertas;        
                }, 300);
            })
            .catch(erro => this.errorHandler.handle(erro));
    }

    listaPautasFechadas() {
        this.pautasFechadas = [];
        this.data = null;

        this.pautaService.listarTodas()
            .then(resultado => {
                let arrayPautas: any = resultado;
                arrayPautas.forEach(pauta => {
                    if (pauta.status === 'FECHADO') {
                        this.pautasFechadas.push(pauta)
                    }
                });
                setTimeout(() => {
                    this.data = this.pautasFechadas;        
                }, 300);
            })
            .catch(erro => this.errorHandler.handle(erro));
    }
    
    pautaSelecionada(pauta: any) {        
        this.router.navigate(['/tabs/pauta/', { id: pauta.id }]);
    }
    
    clickedSearch() {

    }
}
