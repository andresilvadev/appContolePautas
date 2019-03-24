import { Component, OnInit } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    constructor(
        private auth: AuthService,
        private errorHandler: ErrorHandlerService,
        public toastController: ToastController,
        private router: Router
    ) { }

    ngOnInit() {
    }

    register(nome: string, email: string, senha: string, confirmaSenha: string) {

        const userObj = {
            name: nome,
            email: email,
            password: senha
        }

        this.auth.register(userObj)
            .then(response => {
                this.router.navigate(['/login']);
                this.presentToast("Conta criada com sucesso.");
            })
            .catch(erro => {
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
}
