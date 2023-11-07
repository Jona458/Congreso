import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPrograPageRoutingModule } from './registro-progra-routing.module';

import { RegistroPrograPage } from './registro-progra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPrograPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [RegistroPrograPage]
})
export class RegistroPrograPageModule {}
