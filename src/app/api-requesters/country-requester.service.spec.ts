import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CountryRequesterService } from './country-requester.service';

describe('CountryRequesterService', () => {
  let service: CountryRequesterService;

  beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
        });
        service = TestBed.inject(CountryRequesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
