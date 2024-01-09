import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudUsuaPage } from './crud-usua.page';

const routes: Routes = [
  {
    path: '',
    component: CrudUsuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudUsuaPageRoutingModule {}
