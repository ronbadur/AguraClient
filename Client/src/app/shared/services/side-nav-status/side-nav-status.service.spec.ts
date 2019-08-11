import { TestBed } from '@angular/core/testing';

import { SideNavStatusService } from './side-nav-status.service';

describe('SideNavStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideNavStatusService = TestBed.get(SideNavStatusService);
    expect(service).toBeTruthy();
  });
});
