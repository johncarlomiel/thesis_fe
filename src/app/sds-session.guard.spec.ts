import { TestBed, async, inject } from '@angular/core/testing';

import { SdsSessionGuard } from './sds-session.guard';

describe('SdsSessionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SdsSessionGuard]
    });
  });

  it('should ...', inject([SdsSessionGuard], (guard: SdsSessionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
