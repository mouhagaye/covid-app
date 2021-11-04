import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestCovidPageRoutingModule } from './test-covid-routing.module';

import { TestCovidPage } from './test-covid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestCovidPageRoutingModule
  ],
  declarations: [TestCovidPage]
})
export class TestCovidPageModule {}
