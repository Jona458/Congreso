import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormTallerPageRoutingModule } from './form-taller-routing.module';

import { FormTallerPage } from './form-taller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormTallerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormTallerPage]
})
export class FormTallerPageModule {}
