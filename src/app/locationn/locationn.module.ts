import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationnPageRoutingModule } from './locationn-routing.module';

import { LocationnPage } from './locationn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationnPageRoutingModule
  ],
  declarations: [LocationnPage]
})
export class LocationnPageModule {}
