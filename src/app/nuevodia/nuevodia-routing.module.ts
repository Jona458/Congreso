import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevodiaPage } from './nuevodia.page';

const routes: Routes = [
  {
    path: '',
    component: NuevodiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevodiaPageRoutingModule {}
