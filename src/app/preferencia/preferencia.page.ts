import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LogoutService } from '../seguranca/logout.service';
import { AuthService } from '../seguranca/auth.service';

@Component({
  selector: 'app-preferencia',
  templateUrl: 'preferencia.page.html',
  styleUrls: ['preferencia.page.scss']
})
export class PreferenciaPage {

  data: any;
  
  constructor(    
    public auth: AuthService,
    private logoutService: LogoutService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private title: Title
    ) { }

    ionViewDidEnter () {
      this.title.setTitle('Minhas Preferências');

      setTimeout(() => {
        // this.data = {
        //   'heading': 'Normal text',
        //   'para1': 'Lorem ipsum dolor sit amet, consectetur',
        //   'para2': 'adipiscing elit.'
        // };
        this.perfil();
      }, 500);
    }

    perfil() {
      this.auth.usuarioLogado()
        .then((response) => {
            console.log(response);
            this.data = response;
        });
    }

    logout() {
      this.logoutService.logout()
        .then(() => {
          this.router.navigate(['/login']);
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
    
}
