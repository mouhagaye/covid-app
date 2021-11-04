import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitesPrelevementsPageRoutingModule } from './sites-prelevements-routing.module';

import { SitesPrelevementsPage } from './sites-prelevements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitesPrelevementsPageRoutingModule
  ],
  declarations: [SitesPrelevementsPage]
})
export class SitesPrelevementsPageModule {}
