import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { CountryRequesterService } from 'src/app/api-requesters/country-requester.service';
import { CountryProcessService } from 'src/app/services/country-process/country-process.service';
import { mockCountries } from 'test/data/mock-country';

import { CountriesGalleryComponent } from './countries-gallery.component';

describe('CountriesGalleryComponent', () => {
  let component: CountriesGalleryComponent;
  let fixture: ComponentFixture<CountriesGalleryComponent>;
  const filteredCountriesMock$ = new Subject();
  beforeEach(async () => {
    const filteredCountries$ = new Subject();

    await TestBed.configureTestingModule({
        declarations: [ CountriesGalleryComponent ],
        providers: [
            { provide: CountryProcessService, useValue: { filteredCountries$: filteredCountriesMock$ } }
        ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    filteredCountriesMock$.next(mockCountries);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
