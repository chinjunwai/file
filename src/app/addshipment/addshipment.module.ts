import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddshipmentPageRoutingModule } from './addshipment-routing.module';

import { AddshipmentPage } from './addshipment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddshipmentPageRoutingModule
  ],
  declarations: [AddshipmentPage]
})
export class AddshipmentPageModule {}
