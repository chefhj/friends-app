import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderComponent } from './app-header.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]),],
      declarations: [ AppHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHeaderComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should navigate home', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.goHome();
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });
  fit('should navigate to visuals', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.goToVisuals();
    expect(navigateSpy).toHaveBeenCalledWith(['visualizations']);
  });
});
