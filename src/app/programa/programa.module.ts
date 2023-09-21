import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramaPageRoutingModule } from './programa-routing.module';

import { ProgramaPage } from './programa.page';
import { IntinerarioComponent } from './intinerario/intinerario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramaPageRoutingModule
  ],
  declarations: [ProgramaPage, IntinerarioComponent]
})
export class ProgramaPageModule {}
