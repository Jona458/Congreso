import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConferencistasPageRoutingModule } from './conferencistas-routing.module';

import { ConferencistasPage } from './conferencistas.page';
import { NombresComponent } from './nombres/nombres.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConferencistasPageRoutingModule
  ],
  declarations: [ConferencistasPage, NombresComponent]
})
export class ConferencistasPageModule {}
