import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCocktailsPage } from './all-cocktails.page';

const routes: Routes = [
  {
    path: '',
    component: AllCocktailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCocktailsPageRoutingModule {}
