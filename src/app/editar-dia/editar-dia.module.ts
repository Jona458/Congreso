import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarDiaPageRoutingModule } from './editar-dia-routing.module';

import { EditarDiaPage } from './editar-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarDiaPageRoutingModule
  ],
  declarations: [EditarDiaPage]
})
export class EditarDiaPageModule {}
