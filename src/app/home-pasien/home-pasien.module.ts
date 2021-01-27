import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePasienPageRoutingModule } from './home-pasien-routing.module';

import { HomePasienPage } from './home-pasien.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePasienPageRoutingModule
  ],
  declarations: [HomePasienPage]
})
export class HomePasienPageModule {}
