import { Injectable, OnDestroy } from '@angular/core';
import { forkJoin, Observable, of, Subject, Subscription } from 'rxjs';
import { debounceTime, map, switchMap, take } from 'rxjs/operators';
import { CountryRequesterService } from 'src/app/api-requesters/country-requester.service';
import { CountryResponse } from 'src/app/models/country-response';

@Injectable({
    providedIn: 'root'
})
export class CountryProcessService implements OnDestroy{
    inputEvent$: Subject<string> = new Subject();
    filteredCountries$: Subject<CountryResponse[]> = new Subject();

    private subscriptions: Subscription[] = []

    constructor(private countryRequester: CountryRequesterService) {
        this.subscriptions.push(
            this.inputEvent$
                .pipe(this.filterCountriesOperator.bind(this))
                .subscribe(countries => {
                    this.filteredCountries$.next(countries);
                })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
    }

    private filterCountriesOperator(source: Observable<string>) {
        return source.pipe(
            debounceTime(250),
            switchMap((input: string, _: number) => {
                return forkJoin({
                    input: of(input),
                    countries: this.countryRequester.getCountries()
                });
            }),
            map(({input, countries}: {input: string, countries:CountryResponse[]}) => {
                return this.filterCountries(input, countries);
            })
        )
    }

    private filterCountries(input: string, countries:CountryResponse[]): CountryResponse[] {
        return countries.filter((country: CountryResponse) => {
            return country.name
                .toLowerCase()
                .includes(input.toLowerCase());
        });
    }
}
