import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { HospitalsPageRoutingModule } from './hospitals-routing.module';

import { HospitalsPage } from './hospitals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HospitalsPage],
  providers: [Geolocation]
})
export class HospitalsPageModule {}
