import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrotallPageRoutingModule } from './registrotall-routing.module';

import { RegistrotallPage } from './registrotall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrotallPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrotallPage]
})
export class RegistrotallPageModule {}
