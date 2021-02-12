import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatdashboardComponent } from './flatdashboard.component';

describe('FlatdashboardComponent', () => {
  let component: FlatdashboardComponent;
  let fixture: ComponentFixture<FlatdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
