import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadiasPageRoutingModule } from './listadias-routing.module';

import { ListadiasPage } from './listadias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadiasPageRoutingModule
  ],
  declarations: [ListadiasPage]
})
export class ListadiasPageModule {}
