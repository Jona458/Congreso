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



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,PrincipalComponent,CustomFooterComponent, InstitutionsComponent, OrganizationComponent, ContactComponent,AplicacionesComponent,KaliComponent,KotlinComponent,PythonComponent,RosypencvComponent,TalleristasComponent,FotosComponent, ProgramComponent,IntegraiComponent,ClusteringComponent,GatheringgComponent,NodeComponent,DetallesComponent]
})
export class HomePageModule {}
