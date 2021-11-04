import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteViewPageRoutingModule } from './site-view-routing.module';

import { SiteViewPage } from './site-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiteViewPageRoutingModule
  ],
  declarations: [SiteViewPage]
})
export class SiteViewPageModule {}
