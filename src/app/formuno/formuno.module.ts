import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormunoPageRoutingModule } from './formuno-routing.module';

import { FormunoPage } from './formuno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormunoPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FormunoPage]
})
export class FormunoPageModule {}
