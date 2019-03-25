import { Router } from '@angular/router';
import { AuthService } from '../seguranca/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

import { UsuarioModel } from '../core/model';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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

    register(nome: string, email: string, senha: string, confirmaSenha: string) {
        const userObj = {
            name: nome,
            email: email,
            password: senha
        }
        this.presentLoadingWithOptions();
        this.auth.register(userObj)
            .then(() => {
                this.router.navigate(['/login']);
                this.presentToast("Conta criada com sucesso.");
                this.loadingController.dismiss();
            })
            .catch(erro => {
                this.loadingController.dismiss();
                this.errorHandler.handle(erro);
            });
    }

    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
            spinner: 'lines',
            message: 'Registrando usuário...',
            translucent: true,
            cssClass: 'custom-class custom-loading'
        });
        return await loading.present();
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

}