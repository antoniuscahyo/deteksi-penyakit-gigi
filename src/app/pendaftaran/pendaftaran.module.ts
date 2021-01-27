import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendaftaranPageRoutingModule } from './pendaftaran-routing.module';

import { PendaftaranPage } from './pendaftaran.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendaftaranPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [PendaftaranPage]
})
export class PendaftaranPageModule {}
