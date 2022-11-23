import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormComponent } from './input-form.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {provideMockStore} from "@ngrx/store/testing";
import {initialState} from "../+state/app.reducer";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerInputHarness} from "@angular/material/datepicker/testing";
import {HarnessLoader} from "@angular/cdk/testing";
import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed";

describe('InputFormComponent', () => {
  let component: InputFormComponent;
  let fixture: ComponentFixture<InputFormComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        BrowserAnimationsModule,],
      declarations: [ InputFormComponent ],
      providers: [FormBuilder, provideMockStore({initialState})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFormComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('calendar should work', async () => {
    const datepicker = await loader.getHarness(MatDatepickerInputHarness);
    await datepicker.setValue('9/27/1954');
    expect(await datepicker.getValue()).withContext('Date should be 9/27/1954').toBe('9/27/1954');
  });
});
