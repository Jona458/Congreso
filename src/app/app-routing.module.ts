import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './home/principal/principal.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { OrganizationComponent } from './organization/organization.component';
import { ContactComponent } from './contact/contact.component';
import { TalleristasComponent } from './talleristas/talleristas.component';
import { ProgramComponent } from './home/program/program.component';
import { AplicacionesComponent } from './talleristas/aplicaciones/aplicaciones.component';
import { RosypencvComponent } from './talleristas/rosypencv/rosypencv.component';
import { PythonComponent } from './talleristas/python/python.component';
import { KaliComponent } from './talleristas/kali/kali.component';
import { KotlinComponent } from './talleristas/kotlin/kotlin.component';
import { NodeComponent } from './talleristas/node/node.component';
import { IntegraiComponent } from './talleristas/integrai/integrai.component';
import { GatheringgComponent } from './talleristas/gatheringg/gatheringg.component';
import { ClusteringComponent } from './talleristas/clustering/clustering.component';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: '',
    component: PrincipalComponent,
    pathMatch: 'full'
  },
  {
    path: 'institutions',
    component: InstitutionsComponent,
  },
  {
    path: 'organization',
    component: OrganizationComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'talleristas', component: TalleristasComponent,
  },
  {
    path: 'program',
    component: ProgramComponent,
  }, 
  { path: 'aplicaciones', component: AplicacionesComponent},
  { path: 'integrai', component: IntegraiComponent},
  { path: 'rosypencv', component: RosypencvComponent},
  { path: 'gathering', component: GatheringgComponent},
  { path: 'python', component: PythonComponent},
  { path: 'kali', component: KaliComponent},
  { path: 'kotlin', component: KotlinComponent},
  { path: 'node', component: NodeComponent},
  { path: 'clustering', component: ClusteringComponent},

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
