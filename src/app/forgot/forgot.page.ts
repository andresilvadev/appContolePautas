import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

import { UsuarioModel } from '../core/model';
import { AuthService } from '../seguranca/auth.service';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.page.html',
    styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

    usuario = new UsuarioModel();

    constructor(
        public toastController: ToastController,
        public loadingController: LoadingController,
        private router: Router,
        private auth: AuthService,
        private errorHandler: ErrorHandlerService,
    ) { }

    ionViewDidEnter() { }

    ngOnInit() { }

    forgot(email: string) {
        this.presentLoadingWithOptions();
        const emailObj = {
            email: email
        }
        this.auth.forgot(emailObj)
            .then(response => {
                let res: any = response;
                this.router.navigate(['/login']);
                this.presentToast(res.message);
                this.loadingController.dismiss();
            })
            .catch(erro => {
                this.loadingController.dismiss();
                this.errorHandler.handle(erro);
            });
    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message: message,
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
            message: 'Enviando solicitação de nova senha...',
            translucent: true,
            cssClass: 'custom-class custom-loading'
        });
        return await loading.present();
    }

}