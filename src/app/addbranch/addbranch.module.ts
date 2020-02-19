import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbranchPageRoutingModule } from './addbranch-routing.module';

import { AddbranchPage } from './addbranch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbranchPageRoutingModule
  ],
  declarations: [AddbranchPage]
})
export class AddbranchPageModule {}
