import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { CountryProcessService } from 'src/app/services/country-process/country-process.service';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
    let component: SearchBarComponent;
    let fixture: ComponentFixture<SearchBarComponent>;
    let countryProcessServiceSpy: jasmine.SpyObj<CountryProcessService>;
    let inputEventMock$ = new Subject();
    let inputEventMockSpy: jasmine.Spy;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SearchBarComponent ],
            providers: [
                { provide: CountryProcessService, useValue: { inputEvent$: inputEventMock$ } }
            ]
        
        })
        .compileComponents();
        countryProcessServiceSpy = TestBed.inject(CountryProcessService) as jasmine.SpyObj<CountryProcessService>;
        inputEventMockSpy = spyOn(inputEventMock$, 'next');
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should send input text to inputEvent subject.', () => {
        const inputText = 'test';
        const inputElement = fixture.debugElement.query(By.css('input'));
        inputElement.nativeElement.value = inputText;
        inputElement.triggerEventHandler('keyup', {})
        expect(inputEventMockSpy).toHaveBeenCalledOnceWith(inputText);
    });
});
