import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import {provideMockStore} from "@ngrx/store/testing";
import {initialState} from "../+state/app.reducer";
import {MatTabsModule} from "@angular/material/tabs";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTabsModule, BrowserAnimationsModule],
      declarations: [ LandingPageComponent ],
      providers: [provideMockStore({initialState})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
