import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudUsuaPageRoutingModule } from './crud-usua-routing.module';

import { CrudUsuaPage } from './crud-usua.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrudUsuaPageRoutingModule
  ],
  declarations: [CrudUsuaPage]
})
export class CrudUsuaPageModule {}
