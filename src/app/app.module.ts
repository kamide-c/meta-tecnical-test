import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FarmerSearchCardModule } from './shared/components/farmer-search-card/farmer-search-card.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
