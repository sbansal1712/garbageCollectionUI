import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { FlatdashboardComponent } from "./flatdashboard/flatdashboard.component";







const routes: Routes = [
  { path: "", component: FlatdashboardComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
