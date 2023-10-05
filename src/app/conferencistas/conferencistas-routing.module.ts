import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConferencistasPage } from './conferencistas.page';

const routes: Routes = [
  {
    path: '',
    component: ConferencistasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConferencistasPageRoutingModule {}
