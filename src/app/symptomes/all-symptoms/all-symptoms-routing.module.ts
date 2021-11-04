import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSymptomsPage } from './all-symptoms.page';

const routes: Routes = [
  {
    path: '',
    component: AllSymptomsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllSymptomsPageRoutingModule {}
