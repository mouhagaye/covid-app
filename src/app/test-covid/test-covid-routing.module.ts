import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCovidPage } from './test-covid.page';

const routes: Routes = [
  {
    path: '',
    component: TestCovidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestCovidPageRoutingModule {}
