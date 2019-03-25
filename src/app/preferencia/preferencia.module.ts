import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PreferenciaPage } from './preferencia.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: PreferenciaPage }
        ])
    ],
    declarations: [
        PreferenciaPage
    ]
})
export class PreferenciaPageModule { }
