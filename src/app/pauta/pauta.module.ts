import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PautaCadastroPage } from './pauta-cadastro.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: PautaCadastroPage },
            { path: ':id', component: PautaCadastroPage }
        ])
    ],
    declarations: [
        PautaCadastroPage
    ]
})
export class PautaPageModule { }
