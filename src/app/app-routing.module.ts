import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './home/principal/principal.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { OrganizationComponent } from './organization/organization.component';
import { ContactComponent } from './contact/contact.component';
import { TalleristasComponent } from './talleristas/talleristas.component';
import { ProgramComponent } from './home/program/program.component';

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
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
