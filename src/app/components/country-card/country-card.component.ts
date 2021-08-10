import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-country-card',
    templateUrl: './country-card.component.html',
    styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

    @Input()
    countryName = '';
    @Input()
    region = '';
    @Input()
    subregion = '';
    @Input()
    capital = '';
    @Input()
    population = 0;


    constructor() { }

    ngOnInit(): void {
    }

}
