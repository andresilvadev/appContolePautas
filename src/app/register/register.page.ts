import { Component, OnInit } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { UsuarioModel } from '../core/model';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    usuario = new UsuarioModel();

    constructor(
        public loadingController: LoadingController,
        private auth: AuthService,
        private errorHandler: ErrorHandlerService,
        public toastController: ToastController,
        private router: Router
    ) { }

    ionViewDidEnter () {}

    ngOnInit() {}

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
