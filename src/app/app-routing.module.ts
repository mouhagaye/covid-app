import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'statistiques',
    pathMatch: 'full'
  },
  {
    path: 'statistiques',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'hospitals',
    loadChildren: () => import('./hospitals/hospitals.module').then(m => m.HospitalsPageModule)
  },
  {
    path: 'sites-prelevements',
    loadChildren: () => import('./sites-prelevements/sites-prelevements.module').then(m => m.SitesPrelevementsPageModule)
  },
  {
    path: 'site-view/:id',
    loadChildren: () => import('./site-view/site-view.module').then(m => m.SiteViewPageModule)
  },
  {
    path: 'symptomes',
    loadChildren: () => import('./symptomes/symptomes.module').then(m => m.SymptomesPageModule)
  },
  {
    path: 'all-symptoms',
    loadChildren: () => import('./symptomes/all-symptoms/all-symptoms.module').then(m => m.AllSymptomsPageModule)
  },
  {
    path: 'test-covid',
    loadChildren: () => import('./test-covid/test-covid.module').then(m => m.TestCovidPageModule)
  },  {
    path: 'map-world',
    loadChildren: () => import('./map-world/map-world.module').then( m => m.MapWorldPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
