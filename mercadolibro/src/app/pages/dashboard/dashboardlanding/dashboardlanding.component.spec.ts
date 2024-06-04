import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardlandingComponent } from './dashboardlanding.component';

describe('DashboardlandingComponent', () => {
  let component: DashboardlandingComponent;
  let fixture: ComponentFixture<DashboardlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardlandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
