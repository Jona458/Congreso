import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormTallerPage } from './form-taller.page';

const routes: Routes = [
  {
    path: '',
    component: FormTallerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormTallerPageRoutingModule {}
