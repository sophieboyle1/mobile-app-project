import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllCocktailsPageRoutingModule } from './all-cocktails-routing.module';

import { AllCocktailsPage } from './all-cocktails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllCocktailsPageRoutingModule
  ],
  declarations: [AllCocktailsPage]
})
export class AllCocktailsPageModule {}
