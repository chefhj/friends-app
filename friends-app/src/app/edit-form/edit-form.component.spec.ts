import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditFormComponent} from './edit-form.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {provideMockStore} from "@ngrx/store/testing";
import {initialState} from "../+state/app.reducer";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDatepickerInputHarness} from "@angular/material/datepicker/testing";
import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed";
import {HarnessLoader} from "@angular/cdk/testing";
import {MatSelectModule} from "@angular/material/select";
import {initialFriends} from "../mockdata/initial-friends";
import {MatInputModule} from "@angular/material/input";

describe('EditFormComponent', () => {
  let component: EditFormComponent;
  let fixture: ComponentFixture<EditFormComponent>;
  let loader: HarnessLoader;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatSelectModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, BrowserAnimationsModule],
      declarations: [EditFormComponent],
      providers: [FormBuilder, provideMockStore({initialState}),
        {provide: MAT_DIALOG_DATA, useValue: {friends: initialFriends, selectedFriend: initialFriends[0]}},
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(EditFormComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
  it('calendar should work', async () => {
    const datepicker = await loader.getHarness(MatDatepickerInputHarness);
    await datepicker.setValue('9/27/1954');
    expect(await datepicker.getValue()).withContext('Date should be 9/27/1954').toBe('9/27/1954');
  });
});
