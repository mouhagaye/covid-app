import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteViewPage } from './site-view.page';

const routes: Routes = [
  {
    path: '',
    component: SiteViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteViewPageRoutingModule {}
