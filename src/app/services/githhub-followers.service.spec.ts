import { TestBed } from '@angular/core/testing';

import { GithhubFollowersService } from './githhub-followers.service';

describe('GithhubFollowersService', () => {
  let service: GithhubFollowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithhubFollowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
