import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendScatterPlotComponent } from './friend-scatter-plot.component';

describe('FriendScatterPlotComponent', () => {
  let component: FriendScatterPlotComponent;
  let fixture: ComponentFixture<FriendScatterPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendScatterPlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendScatterPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
