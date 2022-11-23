import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendScatterPlotComponent } from './friend-scatter-plot.component';
import {Friend} from "../interfaces/friend";
import {initialFriends} from "../mockdata/initial-friends";

describe('FriendScatterPlotComponent', () => {
  let component: FriendScatterPlotComponent;
  let fixture: ComponentFixture<FriendScatterPlotComponent>;
  let friends: Friend[] = initialFriends;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendScatterPlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendScatterPlotComponent);
    component = fixture.componentInstance;
    component.data = friends;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
