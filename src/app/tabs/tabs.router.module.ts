import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
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

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
