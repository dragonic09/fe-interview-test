import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CountryRequesterService } from 'src/app/api-requesters/country-requester.service';
import { mockCountries } from 'test/data/mock-country';

import { CountryProcessService } from './country-process.service';
describe('CountryProcessService', () => {
    let service: CountryProcessService;
    let countryRequesterServiceSpy: jasmine.SpyObj<CountryRequesterService>;

    beforeEach(() => {
        countryRequesterServiceSpy = jasmine.createSpyObj('CountryRequesterService', ['getCountries']);

        TestBed.configureTestingModule({
            providers: [
                { provide: CountryRequesterService, useValue: countryRequesterServiceSpy }
            ]
        });
        service = TestBed.inject(CountryProcessService);
        countryRequesterServiceSpy = TestBed.inject(CountryRequesterService) as jasmine.SpyObj<CountryRequesterService>;
        countryRequesterServiceSpy.getCountries.and.returnValue(of(mockCountries))
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('filteredCountries$: should return filtered countries with name that has input included', (done: DoneFn) => {
        service.filteredCountries$.subscribe((countries) => {
            expect(countries).toEqual(mockCountries);
            done();
        });
        service.inputEvent$.next('name');
    });

    it('filteredCountries$: should return an empty array when input is not included in country name', (done: DoneFn) => {
        service.filteredCountries$.subscribe((countries) => {
            expect(countries).toEqual([]);
            done();
        });
        service.inputEvent$.next('invalidName');
    });
});
