import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendTableComponent } from './friend-table.component';
import {provideMockStore} from "@ngrx/store/testing";
import {initialState} from "../+state/app.reducer";
import {MAT_DIALOG_SCROLL_STRATEGY, MatDialog, MatDialogModule} from "@angular/material/dialog";
import {Dialog} from "@angular/cdk/dialog";
import {MatTableModule} from "@angular/material/table";

describe('FriendTableComponent', () => {
  let component: FriendTableComponent;
  let fixture: ComponentFixture<FriendTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [ FriendTableComponent ],
      providers: [provideMockStore({initialState}), MatDialogModule, MatDialog,
        { provide: MAT_DIALOG_SCROLL_STRATEGY, useValue: {} }, { provide: Dialog, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
