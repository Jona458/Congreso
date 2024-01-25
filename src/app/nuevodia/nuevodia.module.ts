import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevodiaPageRoutingModule } from './nuevodia-routing.module';

import { NuevodiaPage } from './nuevodia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevodiaPageRoutingModule
  ],
  declarations: [NuevodiaPage]
})
export class NuevodiaPageModule {}
