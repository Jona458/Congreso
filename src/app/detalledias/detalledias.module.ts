import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallediasPageRoutingModule } from './detalledias-routing.module';

import { DetallediasPage } from './detalledias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallediasPageRoutingModule
  ],
  declarations: [DetallediasPage]
})
export class DetallediasPageModule {}
