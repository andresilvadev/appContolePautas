import { Component } from '@angular/core';
import { PautaService } from './pauta.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pauta',
  templateUrl: 'pauta.page.html',
  styleUrls: ['pauta.page.scss']
})
export class PautaPage {

  pautas = [];

  constructor(
    private pautaService: PautaService,
    private errorHandler: ErrorHandlerService,
    private title: Title
    ) { }

    ionViewDidEnter() {
      this.title.setTitle('Pesquisa de pautas');
    }

}
