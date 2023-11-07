import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina5Page } from './pagina5.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina5PageRoutingModule {}
