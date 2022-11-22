import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendTableComponent } from './friend-table.component';

describe('FriendTableComponent', () => {
  let component: FriendTableComponent;
  let fixture: ComponentFixture<FriendTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendTableComponent ]
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
