import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PakarPage } from './pakar.page';

const routes: Routes = [
  {
    path: '',
    component: PakarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PakarPageRoutingModule {}
