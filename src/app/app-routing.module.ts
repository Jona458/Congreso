import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AplicacionesComponent } from './talleres/aplicaciones/aplicaciones.component';
import { IntegraiComponent } from './talleres/integrai/integrai.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'talleres',
    pathMatch: 'full'
  },
  {
    path: 'talleres',
    loadChildren: () => import('./talleres/talleres.module').then( m => m.TalleresPageModule)
  },
  { path: 'aplicaciones', component: AplicacionesComponent},
  { path: 'integrai', component: IntegraiComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
