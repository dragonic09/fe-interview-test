import { Component, OnInit } from '@angular/core';
import { CountryResponse } from 'src/app/models/country-response';
import { CountryProcessService } from 'src/app/services/country-process/country-process.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    constructor(private countryProcessService: CountryProcessService) { }

    ngOnInit(): void {}

    onKeyUp(value: string) {
        this.countryProcessService.inputEvent$.next(value);
    }

}
