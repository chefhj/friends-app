import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import {MaterialModule} from "../../projects/material/src/lib/material.module";

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
