import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallediasPage } from './detalledias.page';

const routes: Routes = [
  {
    path: '',
    component: DetallediasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallediasPageRoutingModule {}
