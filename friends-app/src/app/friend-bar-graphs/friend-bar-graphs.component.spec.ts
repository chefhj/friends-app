import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendBarGraphsComponent } from './friend-bar-graphs.component';

describe('FriendBarGraphsComponent', () => {
  let component: FriendBarGraphsComponent;
  let fixture: ComponentFixture<FriendBarGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendBarGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendBarGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
