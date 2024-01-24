import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadiasPage } from './listadias.page';

const routes: Routes = [
  {
    path: '',
    component: ListadiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadiasPageRoutingModule {}
