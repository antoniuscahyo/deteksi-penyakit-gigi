import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KonsultasiPage } from './konsultasi.page';

const routes: Routes = [
  {
    path: '',
    component: KonsultasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KonsultasiPageRoutingModule {}
