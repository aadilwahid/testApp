import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithhubFollowersComponent } from './githhub-followers.component';

describe('GithhubFollowersComponent', () => {
  let component: GithhubFollowersComponent;
  let fixture: ComponentFixture<GithhubFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithhubFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithhubFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
