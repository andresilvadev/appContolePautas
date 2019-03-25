import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreferenciaPage } from './preferencia.page';
var PreferenciaPageModule = /** @class */ (function () {
    function PreferenciaPageModule() {
    }
    PreferenciaPageModule = tslib_1.__decorate([
        NgModule({
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
    ], PreferenciaPageModule);
    return PreferenciaPageModule;
}());
export { PreferenciaPageModule };
//# sourceMappingURL=preferencia.module.js.map