import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PakarPageRoutingModule } from './pakar-routing.module';

import { PakarPage } from './pakar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PakarPageRoutingModule
  ],
  declarations: [PakarPage]
})
export class PakarPageModule {}
