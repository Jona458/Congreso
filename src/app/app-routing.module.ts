import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { AuthGuard } from './auth.guard';
import { DetallesComponent } from './talleristas/fotos/detalles/detalles.component';
import { ConferencistasComponent } from './conferencistas/conferencistas.component';
import { DetaConfeComponent } from './conferencistas/deta-confe/deta-confe.component';
import { InstitucionesComponent } from './instituciones/instituciones.component';
import { EscuelainfoComponent } from './instituciones/escuelainfo/escuelainfo.component';
import { EncaComponent } from './enca/enca.component';
import { RolesComponent } from './roles/roles.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { RegistroIndividualComponent } from './registro-individual/registro-individual.component';
import { RegistroEquipoComponent } from './registro-equipo/registro-equipo.component';
import { IntegrantesEquipoComponent } from './integrantes-equipo/integrantes-equipo.component';
const routes: Routes = [
 {
 path: 'home',
 loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
 },
 {
 path: '',
 redirectTo: 'pagina3',
 pathMatch: 'full'
 },
 {
 path: 'institutions',
 component: InstitutionsComponent,
 canActivate: [AuthGuard],
 },
 {
 path: 'organization',
 component: OrganizationComponent,
 canActivate: [AuthGuard],
 },
 {
 path: 'contact',
 component: ContactComponent,
 canActivate: [AuthGuard],
 },
 { path: 'talleristas', component: TalleristasComponent,
 canActivate: [AuthGuard],
},
 {
 path: 'talleristas/:id', component: DetallesComponent,
 canActivate: [AuthGuard],
 },
 {
 path: 'conferencistas', component: ConferencistasComponent, canActivate: [AuthGuard],
 },
 {
 path: 'conferencistas/:id', component: DetaConfeComponent, canActivate: [AuthGuard],
 },
 {
 path: 'instituciones', component: InstitucionesComponent, canActivate: [AuthGuard],
 },
 {
 path: 'instituciones/:id', component: EscuelainfoComponent, canActivate: [AuthGuard],
 },
 {
 path: 'enca', component: EncaComponent, canActivate: [AuthGuard],
 },
 {
 path: 'enca/:id', component: EncaComponent, canActivate: [AuthGuard],
 },
 {
 path: 'program',
 component: ProgramComponent,
 canActivate: [AuthGuard],
 },
 { path: 'aplicaciones', component: AplicacionesComponent,canActivate: [AuthGuard],
},
 { path: 'integrai', component: IntegraiComponent,canActivate: [AuthGuard]},
 { path: 'rosypencv', component: RosypencvComponent,canActivate: [AuthGuard]},
 { path: 'gathering', component: GatheringgComponent,canActivate: [AuthGuard]},
 { path: 'python', component: PythonComponent,canActivate: [AuthGuard]},
 { path: 'kali', component: KaliComponent,canActivate: [AuthGuard]},
 { path: 'kotlin', component: KotlinComponent,canActivate: [AuthGuard]},
 { path: 'node', component: NodeComponent,canActivate: [AuthGuard]},
 { path: 'clustering', component: ClusteringComponent,canActivate: [AuthGuard]},
 {
 path: 'pagina1',
 loadChildren: () => import('./pagina1/pagina1.module').then( m => m.Pagina1PageModule),canActivate:
[AuthGuard]
 },
 {
 path: 'pagina2',
 loadChildren: () => import('./pagina2/pagina2.module').then( m => m.Pagina2PageModule),canActivate:
[AuthGuard]
 },
 {
 path: 'pagina3',
 loadChildren: () => import('./pagina3/pagina3.module').then( m => m.Pagina3PageModule)
 },
 {
 path: 'pagina4',
 loadChildren: () => import('./pagina4/pagina4.module').then( m => m.Pagina4PageModule),canActivate:
[AuthGuard]
 },
 {
 path: 'pagina5',
 loadChildren: () => import('./pagina5/pagina5.module').then( m => m.Pagina5PageModule),canActivate:
[AuthGuard]
 },
 {
 path: 'registro-progra',
 loadChildren: () => import('./registro-progra/registro-progra.module').then( m => m.RegistroPrograPageModule),canActivate: [AuthGuard]
 },
 { path: 'roles', component: RolesComponent,canActivate: [AuthGuard]},
 { path: 'categoria', component: CategoriaComponent,canActivate: [AuthGuard]},
 { path: 'registro-individual', component: RegistroIndividualComponent,canActivate: [AuthGuard]},
 { path: 'registro-equipo', component: RegistroEquipoComponent,canActivate: [AuthGuard]},
 { path: 'integrantes-equipo', component: IntegrantesEquipoComponent,canActivate: [AuthGuard]},
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule {}