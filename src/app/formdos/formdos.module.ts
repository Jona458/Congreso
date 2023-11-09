import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormdosPageRoutingModule } from './formdos-routing.module';

import { FormdosPage } from './formdos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormdosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormdosPage]
})
export class FormdosPageModule {}
