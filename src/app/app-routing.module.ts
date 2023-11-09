import { ProtecGuard } from './login/protec.guard';
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
import { DetallesComponent } from './talleristas/fotos/detalles/detalles.component';

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
    canActivate: [ProtecGuard]
  },
  {
    path: 'organization',
    component: OrganizationComponent,
    canActivate: [ProtecGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [ProtecGuard]
  },
  {
    path: 'talleristas', component: TalleristasComponent,
    canActivate: [ProtecGuard]
  },
  {
    path: 'talleristas/:id', component: DetallesComponent,
    canActivate: [ProtecGuard]
  },
  {
    path: 'program',
    component: ProgramComponent,
    canActivate: [ProtecGuard]
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
  {
    path: 'pagina1',
    loadChildren: () => import('./pagina1/pagina1.module').then( m => m.Pagina1PageModule)
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'registrotall',
    loadChildren: () => import('./registrotall/registrotall.module').then( m => m.RegistrotallPageModule)
  },
  {
    path: 'formuno',
    loadChildren: () => import('./formuno/formuno.module').then( m => m.FormunoPageModule)
  },
  {
    path: 'formdos',
    loadChildren: () => import('./formdos/formdos.module').then( m => m.FormdosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'form-taller',
    loadChildren: () => import('./form-taller/form-taller.module').then( m => m.FormTallerPageModule)
  }





  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
