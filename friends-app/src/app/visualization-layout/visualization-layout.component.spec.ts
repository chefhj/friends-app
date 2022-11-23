import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationLayoutComponent } from './visualization-layout.component';
import {provideMockStore} from "@ngrx/store/testing";
import {initialState} from "../+state/app.reducer";
import {MatTabsModule} from "@angular/material/tabs";
import {MatRadioModule} from "@angular/material/radio";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('VisualizationLayoutComponent', () => {
  let component: VisualizationLayoutComponent;
  let fixture: ComponentFixture<VisualizationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTabsModule, MatRadioModule, BrowserAnimationsModule],
      declarations: [ VisualizationLayoutComponent ],
      providers: [provideMockStore({initialState})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]


    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
