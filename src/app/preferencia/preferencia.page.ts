import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-preferencia',
  templateUrl: 'preferencia.page.html',
  styleUrls: ['preferencia.page.scss']
})
export class PreferenciaPage {

  data: any;
  
  constructor(    
    private errorHandler: ErrorHandlerService,
    private title: Title
    ) { }

    ionViewDidEnter () {
      this.title.setTitle('Minhas Preferências');

      setTimeout(() => {
        this.data = {
          'heading': 'Normal text',
          'para1': 'Lorem ipsum dolor sit amet, consectetur',
          'para2': 'adipiscing elit.'
        };
      }, 5000);
    }
    
}
