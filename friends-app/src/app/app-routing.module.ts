import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {VisualizationLayoutComponent} from "./visualization-layout/visualization-layout.component";

const routes: Routes = [
  { path: 'visualizations', component: VisualizationLayoutComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
