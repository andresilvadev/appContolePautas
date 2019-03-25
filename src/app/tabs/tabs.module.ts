import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs.router.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule
    ],
    declarations: [
        TabsPage,
    ]
})
export class TabsPageModule { }
