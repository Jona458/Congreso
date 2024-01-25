import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarDiaPage } from './editar-dia.page';

const routes: Routes = [
  {
    path: '',
    component: EditarDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarDiaPageRoutingModule {}
