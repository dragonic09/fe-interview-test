import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCardComponent } from './country-card.component';

describe('CountryCardComponent', () => {
    let component: CountryCardComponent;
    let fixture: ComponentFixture<CountryCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ CountryCardComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CountryCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render countryName', () => {
        const countryName = 'name1';
        component.countryName = countryName
        fixture.detectChanges();
        const countryNameElement: HTMLElement = fixture.nativeElement.querySelector('h5');
        
        expect(countryNameElement.textContent).toEqual(countryName);
    });

    it('should render region and subregion', () => {
        const region = 'region1';
        const subregion = 'subregion1';
        component.region = region;
        component.subregion = subregion;
        
        fixture.detectChanges();
        const regionElement: HTMLElement = fixture.nativeElement.querySelector('#region');
        
        expect(regionElement.textContent).toEqual(`${region} , ${subregion}`);
    });

    it('should render capital in h5', () => {
        const capital = 'capital1';
        component.capital = capital;
        fixture.detectChanges();
        const capitalElement: HTMLElement = fixture.nativeElement.querySelector('#capital');
        
        expect(capitalElement.textContent).toEqual(capital);
    });
});
