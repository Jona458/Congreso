import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina5PageRoutingModule } from './pagina5-routing.module';

import { Pagina5Page } from './pagina5.page';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina5PageRoutingModule,ReactiveFormsModule
  ],
  declarations: [Pagina5Page]
})
export class Pagina5PageModule {}
