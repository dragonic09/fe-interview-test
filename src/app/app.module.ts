import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CountriesGalleryComponent } from './components/countries-gallery/countries-gallery.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CacheInterceptor } from './interceptors/cache.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CountriesGalleryComponent,
    CountryCardComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
