import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountryResponse } from 'src/app/models/country-response';
import { CountryProcessService } from 'src/app/services/country-process/country-process.service';

@Component({
    selector: 'app-countries-gallery',
    templateUrl: './countries-gallery.component.html',
    styleUrls: ['./countries-gallery.component.scss']
})
export class CountriesGalleryComponent implements OnInit {
    countries: CountryResponse[] = [];

    private subscriptions: Subscription[] = []

    constructor(private countryProcessService: CountryProcessService) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.countryProcessService.filteredCountries$
                .subscribe((countries: CountryResponse[]) => {
                    this.countries = countries;
                })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
    }

    trackByFn(_: number, country: CountryResponse) {
        return country.name;
    }

}
