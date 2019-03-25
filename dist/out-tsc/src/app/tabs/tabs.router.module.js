import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../seguranca/auth.guard';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'pauta',
                children: [
                    {
                        path: '',
                        loadChildren: '../pauta/pauta.module#PautaPageModule'
                    },
                    {
                        path: ':id',
                        loadChildren: '../pauta/pauta.module#PautaPageModule'
                    }
                ]
            },
            {
                path: 'preferencia',
                children: [
                    {
                        path: '',
                        loadChildren: '../preferencia/preferencia.module#PreferenciaPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map