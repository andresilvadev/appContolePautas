import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from '../seguranca/auth.service';
import { CapptanHttp } from '../seguranca/capptan-http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PautaService } from '../pauta/pauta.service';

@NgModule({
  declarations: [
    
  ],
  imports: [    
    CommonModule,
    HttpClientModule,    
    RouterModule,    
  ],
  providers: [
    AuthService,
    CapptanHttp,
    JwtHelperService,
    PautaService
  ]
})
export class CoreModule { }
