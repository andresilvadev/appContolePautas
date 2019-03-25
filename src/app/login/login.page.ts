import { Component, OnInit } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Router } from '@angular/router';
import { UsuarioModel } from '../core/model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = new UsuarioModel();
  
  constructor(    
    public loadingController: LoadingController,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ionViewDidEnter () {}

  ngOnInit() {}

  login(usuario: string, senha: string) {
    this.presentLoadingWithOptions();
    this.auth.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/tabs']);
        this.usuarioLogado();
        this.loadingController.dismiss();
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }

  
  usuarioLogado() {
    this.auth.usuarioLogado()
    .then(response => {
        localStorage.setItem('usuarioNome', response.name);         
    })
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'lines',      
      message: 'Acessando...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  } 


}
