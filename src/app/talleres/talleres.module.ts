import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalleresPageRoutingModule } from './talleres-routing.module';

import { TalleresPage } from './talleres.page';
import { FotografiasComponent } from './fotografias/fotografias.component';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';
import { IntegraiComponent } from './integrai/integrai.component';
import { RosypencvComponent } from './rosypencv/rosypencv.component';
import { GatheringComponent } from './gathering/gathering.component';
import { PythonComponent } from './python/python.component';
import { KaliComponent } from './kali/kali.component';
import { KotlinComponent } from './kotlin/kotlin.component';
import { ClusteringComponent } from './clustering/clustering.component';
import { NodeComponent } from './node/node.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TalleresPageRoutingModule
  ],
  declarations: [TalleresPage,FotografiasComponent,AplicacionesComponent,IntegraiComponent,RosypencvComponent, GatheringComponent,PythonComponent,KaliComponent,KotlinComponent,ClusteringComponent,NodeComponent]
})
export class TalleresPageModule {}
