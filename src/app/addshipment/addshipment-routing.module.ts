import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddshipmentPage } from './addshipment.page';

const routes: Routes = [
  {
    path: '',
    component: AddshipmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddshipmentPageRoutingModule {}
