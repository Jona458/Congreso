import { IntegrantesEquipoComponent } from './../integrantes-equipo/integrantes-equipo.component';
import { RegistroEquipoComponent } from './../registro-equipo/registro-equipo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { CustomFooterComponent } from '../custom-footer/custom-footer.component';
import { InstitutionsComponent } from '../institutions/institutions.component';
import { OrganizationComponent } from '../organization/organization.component';
import { ContactComponent } from '../contact/contact.component';
import { AplicacionesComponent } from '../talleristas/aplicaciones/aplicaciones.component';
import { KaliComponent } from '../talleristas/kali/kali.component';
import { KotlinComponent } from '../talleristas/kotlin/kotlin.component';
import { PythonComponent } from '../talleristas/python/python.component';
import { RosypencvComponent } from '../talleristas/rosypencv/rosypencv.component';
import { TalleristasComponent } from '../talleristas/talleristas.component';
import { FotosComponent } from '../talleristas/fotos/fotos.component';
import { ProgramComponent } from './program/program.component';
import { IntegraiComponent } from '../talleristas/integrai/integrai.component';
import { ClusteringComponent } from '../talleristas/clustering/clustering.component';
import { GatheringgComponent } from '../talleristas/gatheringg/gatheringg.component';
import { NodeComponent } from '../talleristas/node/node.component';
import { DetallesComponent } from '../talleristas/fotos/detalles/detalles.component';
import { EncaComponent } from '../enca/enca.component';
import { ConferencistasComponent } from '../conferencistas/conferencistas.component';
import { InicioComponent } from '../conferencistas/inicio/inicio.component';
import { DetaConfeComponent } from '../conferencistas/deta-confe/deta-confe.component';
import { EscuelainfoComponent } from '../instituciones/escuelainfo/escuelainfo.component';
import { Inicio1Component } from '../instituciones/inicio1/inicio1.component';
import { InstitucionesComponent } from '../instituciones/instituciones.component';
import { RolesComponent } from '../roles/roles.component';
import { CategoriaComponent } from '../categoria/categoria.component';
import { RegistroIndividualComponent } from '../registro-individual/registro-individual.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,PrincipalComponent,CustomFooterComponent, InstitutionsComponent, OrganizationComponent, ContactComponent,AplicacionesComponent,KaliComponent,KotlinComponent,PythonComponent,RosypencvComponent,TalleristasComponent,FotosComponent, ProgramComponent,IntegraiComponent,ClusteringComponent,GatheringgComponent,NodeComponent,DetallesComponent,EncaComponent,ConferencistasComponent,InicioComponent,DetaConfeComponent,EscuelainfoComponent,Inicio1Component,InstitucionesComponent,RolesComponent,CategoriaComponent,RegistroIndividualComponent,RegistroEquipoComponent,IntegrantesEquipoComponent,RolesComponent,CategoriaComponent,RegistroIndividualComponent,RegistroEquipoComponent,IntegrantesEquipoComponent,]
})
export class HomePageModule {}
