import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
