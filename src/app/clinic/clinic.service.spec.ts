import { TestBed } from '@angular/core/testing';
import { ClinicService } from '../service/clinic.service';

describe('ClinicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClinicService = TestBed.get(ClinicService);
    expect(service).toBeTruthy();
  });
});