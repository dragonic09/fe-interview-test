import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryResponse } from '../models/country-response';

@Injectable({
  providedIn: 'root'
})
export class CountryRequesterService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<CountryResponse[]> {
      return this.http.get<CountryResponse[]>('https://restcountries.eu/rest/v2/all');
  }
}
