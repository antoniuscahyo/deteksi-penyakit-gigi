import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePasienPage } from './home-pasien.page';

const routes: Routes = [
  {
    path: '',
    component: HomePasienPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePasienPageRoutingModule {}
