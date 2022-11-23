import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendBarGraphsComponent } from './friend-bar-graphs.component';
import {Friend} from "../interfaces/friend";
import {initialFriends} from "../mockdata/initial-friends";

describe('FriendBarGraphsComponent', () => {
  let component: FriendBarGraphsComponent;
  let fixture: ComponentFixture<FriendBarGraphsComponent>;
  let friends: Friend[] = initialFriends;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendBarGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendBarGraphsComponent);
    component = fixture.componentInstance;
    component.data = friends;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
