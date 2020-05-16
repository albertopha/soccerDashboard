import { TestBed } from '@angular/core/testing';

import { SoccerControllerService } from './soccer-controller.service';

describe('SoccerControllerService', () => {
  let service: SoccerControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoccerControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
