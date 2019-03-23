import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(    
    private errorHandler: ErrorHandlerService,
    private title: Title
    ) { }

    ionViewDidEnter () {
      this.title.setTitle('Home');
    }
}
