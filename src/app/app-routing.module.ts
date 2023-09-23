import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AplicacionesComponent } from './talleres/aplicaciones/aplicaciones.component';
import { IntegraiComponent } from './talleres/integrai/integrai.component';
import { RosypencvComponent } from './talleres/rosypencv/rosypencv.component';
import { GatheringComponent } from './talleres/gathering/gathering.component';
import { PythonComponent } from './talleres/python/python.component';
import { KaliComponent } from './talleres/kali/kali.component';
import { KotlinComponent } from './talleres/kotlin/kotlin.component';
import { ClusteringComponent } from './talleres/clustering/clustering.component';
import { PrincipalComponent } from './home/principal/principal.component';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'principal',
    component: PrincipalComponent,
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
  { path: 'rosypencv', component: RosypencvComponent},
  { path: 'gathering', component: GatheringComponent},
  { path: 'python', component: PythonComponent},
  { path: 'kali', component: KaliComponent},
  { path: 'kotlin', component: KotlinComponent},
  { path: 'clustering', component: ClusteringComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
