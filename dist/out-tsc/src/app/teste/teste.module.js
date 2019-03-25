import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TestePage } from './teste.page';
var routes = [
    {
        path: '',
        component: TestePage
    }
];
var TestePageModule = /** @class */ (function () {
    function TestePageModule() {
    }
    TestePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TestePage]
        })
    ], TestePageModule);
    return TestePageModule;
}());
export { TestePageModule };
//# sourceMappingURL=teste.module.js.map