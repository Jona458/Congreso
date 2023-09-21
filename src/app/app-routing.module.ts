import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './home/contact/contact.component';
import { OrganizationComponent } from './home/organization/organization.component';

import { AplicacionesComponent } from './talleres/aplicaciones/aplicaciones.component';
import { IntegraiComponent } from './talleres/integrai/integrai.component';
import { RosypencvComponent } from './talleres/rosypencv/rosypencv.component';
import { GatheringComponent } from './talleres/gathering/gathering.component';
import { PythonComponent } from './talleres/python/python.component';
import { KaliComponent } from './talleres/kali/kali.component';
import { KotlinComponent } from './talleres/kotlin/kotlin.component';
import { ClusteringComponent } from './talleres/clustering/clustering.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'footer',
    redirectTo: 'home', //talleres //programa
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'talleres', //talleres //programa
    pathMatch: 'full'
  },
  {
    path: 'programa',
    redirectTo: 'programa',  
    pathMatch: 'full'
  },
  {
    path: 'conferencistas',
    redirectTo: 'conferencistas', 
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'organization',
    component: OrganizationComponent,
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
  {
    path: 'conferencistas',
    redirectTo: 'conferencistas',
    pathMatch: 'full'
  },
  {
    path: 'conferencistas',
    loadChildren: () => import('./conferencistas/conferencistas.module').then( m => m.ConferencistasPageModule)
  },


  {
    path: 'programa',
    loadChildren: () => import('./programa/programa.module').then( m => m.ProgramaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
