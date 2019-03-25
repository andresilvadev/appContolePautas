import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PautaCadastroPage } from './pauta-cadastro.page';
var PautaPageModule = /** @class */ (function () {
    function PautaPageModule() {
    }
    PautaPageModule = tslib_1.__decorate([
        NgModule({
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
    ], PautaPageModule);
    return PautaPageModule;
}());
export { PautaPageModule };
//# sourceMappingURL=pauta.module.js.map