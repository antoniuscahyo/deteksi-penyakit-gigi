import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KonsultasiPageRoutingModule } from './konsultasi-routing.module';

import { KonsultasiPage } from './konsultasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KonsultasiPageRoutingModule
  ],
  declarations: [KonsultasiPage]
})
export class KonsultasiPageModule {}
