import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapWorldPage } from './map-world.page';

const routes: Routes = [
  {
    path: '',
    component: MapWorldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapWorldPageRoutingModule {}
