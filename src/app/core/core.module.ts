import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthService } from '../seguranca/auth.service';
import { CapptanHttp } from '../seguranca/capptan-http';
import { PautaService } from '../pauta/pauta.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
    ],
    providers: [
        AuthService,
        CapptanHttp,
        PautaService,
        JwtHelperService
    ]
})
export class CoreModule { }
