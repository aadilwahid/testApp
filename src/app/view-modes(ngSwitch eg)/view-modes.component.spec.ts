import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModesComponent } from './view-modes.component';

describe('ViewModesComponent', () => {
  let component: ViewModesComponent;
  let fixture: ComponentFixture<ViewModesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewModesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
