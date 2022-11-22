import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { MaterialModule } from "../../projects/material/src/lib/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';
import { FriendTableComponent } from './friend-table/friend-table.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {appReducer, initialState} from "./+state/app.reducer";
import { FriendBarGraphsComponent } from './friend-bar-graphs/friend-bar-graphs.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FriendScatterPlotComponent } from './friend-scatter-plot/friend-scatter-plot.component';
import { VisualizationLayoutComponent } from './visualization-layout/visualization-layout.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    FriendTableComponent,
    LandingPageComponent,
    FriendBarGraphsComponent,
    AppHeaderComponent,
    FriendScatterPlotComponent,
    VisualizationLayoutComponent,
    EditFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.forRoot({app: appReducer}, {initialState: {app: initialState}})
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },],
  bootstrap: [AppComponent]
})
export class AppModule { }
