import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomesPage } from './symptomes.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomesPage
  },
  {
    path: 'all-symptoms',
    loadChildren: () => import('./all-symptoms/all-symptoms.module').then( m => m.AllSymptomsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomesPageRoutingModule {}
