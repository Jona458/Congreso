import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPrograPage } from './registro-progra.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPrograPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPrograPageRoutingModule {}
