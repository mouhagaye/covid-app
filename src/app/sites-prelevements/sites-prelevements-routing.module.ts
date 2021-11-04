import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitesPrelevementsPage } from './sites-prelevements.page';

const routes: Routes = [
  {
    path: '',
    component: SitesPrelevementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitesPrelevementsPageRoutingModule {}
