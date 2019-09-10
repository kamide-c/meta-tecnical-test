import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FarmerSearchCardModule } from './shared/components/farmer-search-card/farmer-search-card.module';
import { FarmerSearchAbstractProvider } from './core/services/farmer-search-abstract-provider.service';
import { JsonFarmerSearchProvider } from './core/providers/JsonFarmerSearchProvider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FarmerSearchCardModule    
  ],  
  providers: [
    {
      provide: FarmerSearchAbstractProvider,
      useClass: JsonFarmerSearchProvider,
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
