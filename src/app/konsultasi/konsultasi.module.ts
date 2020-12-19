import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KonsultasiPageRoutingModule } from './konsultasi-routing.module';

import { KonsultasiPage } from './konsultasi.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KonsultasiPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [KonsultasiPage]
})
export class KonsultasiPageModule {}
