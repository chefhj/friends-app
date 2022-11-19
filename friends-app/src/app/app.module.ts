import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { MaterialModule } from "../../projects/material/src/lib/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';
import {appReducer, initialState} from "./+state/app.reducer";
@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.forRoot({app: appReducer}, {initialState: {app: initialState}}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
