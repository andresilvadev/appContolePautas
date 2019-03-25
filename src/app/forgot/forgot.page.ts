import { Component, OnInit } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { UsuarioModel } from '../core/model';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  usuario = new UsuarioModel();

  constructor(
    private auth: AuthService,
    public loadingController: LoadingController,
    private errorHandler: ErrorHandlerService,
    public toastController: ToastController,
    private router: Router
  ) { }

  ionViewDidEnter () {}

  ngOnInit() {}

  forgot(email: string) {
    this.presentLoadingWithOptions();
    const emailObj = {
      email : email
    }    
    this.auth.forgot(emailObj)
      .then(response => {
        let res: any = response;
        this.router.navigate(['/login']);
        this.presentToast(res.message);
        this.loadingController.dismiss();
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
