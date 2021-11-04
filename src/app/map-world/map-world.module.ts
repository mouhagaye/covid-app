import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapWorldPageRoutingModule } from './map-world-routing.module';

import { MapWorldPage } from './map-world.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapWorldPageRoutingModule
  ],
  declarations: [MapWorldPage]
})
export class MapWorldPageModule {}
