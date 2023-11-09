import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormunoPage } from './formuno.page';

const routes: Routes = [
  {
    path: '',
    component: FormunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormunoPageRoutingModule {}
