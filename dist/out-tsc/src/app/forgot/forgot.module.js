import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ForgotPage } from './forgot.page';
var routes = [
    {
        path: '',
        component: ForgotPage
    }
];
var ForgotPageModule = /** @class */ (function () {
    function ForgotPageModule() {
    }
    ForgotPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ForgotPage]
        })
    ], ForgotPageModule);
    return ForgotPageModule;
}());
export { ForgotPageModule };
//# sourceMappingURL=forgot.module.js.map