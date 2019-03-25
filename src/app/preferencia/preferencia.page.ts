import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { LogoutService } from '../seguranca/logout.service';
import { AuthService } from '../seguranca/auth.service';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
    selector: 'app-preferencia',
    templateUrl: 'preferencia.page.html',
    styleUrls: ['preferencia.page.scss']
})
export class PreferenciaPage {

    data: any;

    constructor(
        public auth: AuthService,
        private title: Title,
        private router: Router,
        private logoutService: LogoutService,
        private errorHandler: ErrorHandlerService,
    ) { }

    ionViewDidEnter() {
        this.title.setTitle('Minhas Preferências');
        setTimeout(() => {
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