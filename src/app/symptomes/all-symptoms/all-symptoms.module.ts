import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllSymptomsPageRoutingModule } from './all-symptoms-routing.module';

import { AllSymptomsPage } from './all-symptoms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllSymptomsPageRoutingModule
  ],
  declarations: [AllSymptomsPage]
})
export class AllSymptomsPageModule {}
