import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalleresPageRoutingModule } from './talleres-routing.module';

import { TalleresPage } from './talleres.page';
import { FotografiasComponent } from './fotografias/fotografias.component';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TalleresPageRoutingModule
  ],
  declarations: [TalleresPage,FotografiasComponent,AplicacionesComponent,]
})
export class TalleresPageModule {}
