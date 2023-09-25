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
import { ClusterComponent } from '../talleristas/cluster/cluster.component';
import { GatheringtecComponent } from '../talleristas/gatheringtec/gatheringtec.component';
import { IntegrAiComponent } from '../talleristas/integr-ai/integr-ai.component';
import { KaliComponent } from '../talleristas/kali/kali.component';
import { KotlinComponent } from '../talleristas/kotlin/kotlin.component';
import { PythonComponent } from '../talleristas/python/python.component';
import { RosypencvComponent } from '../talleristas/rosypencv/rosypencv.component';
import { TalleristasComponent } from '../talleristas/talleristas.component';
import { FotosComponent } from '../talleristas/fotos/fotos.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,PrincipalComponent,CustomFooterComponent, InstitutionsComponent, OrganizationComponent, ContactComponent,AplicacionesComponent,ClusterComponent,GatheringtecComponent,IntegrAiComponent,KaliComponent,KotlinComponent,PythonComponent,RosypencvComponent,TalleristasComponent,FotosComponent]
})
export class HomePageModule {}
