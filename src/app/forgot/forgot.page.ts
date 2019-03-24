import { Component, OnInit } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    public toastController: ToastController,
    private router: Router
  ) { }

  ionViewDidEnter () {}

  ngOnInit() {}

  forgot(email: string) {
    const emailObj = {
      email : email
    }    
    this.auth.forgot(emailObj)
      .then(response => {        
        this.router.navigate(['/login']);
        this.presentToast(response.message);
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
