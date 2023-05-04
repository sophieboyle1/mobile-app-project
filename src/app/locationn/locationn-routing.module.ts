import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationnPage } from './locationn.page';

const routes: Routes = [
  {
    path: '',
    component: LocationnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationnPageRoutingModule {}
