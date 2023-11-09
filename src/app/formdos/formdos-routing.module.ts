import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormdosPage } from './formdos.page';

const routes: Routes = [
  {
    path: '',
    component: FormdosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormdosPageRoutingModule {}
