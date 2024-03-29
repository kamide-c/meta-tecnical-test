import { Component, OnInit } from '@angular/core';
import { FarmerSearchAbstractProvider } from 'src/app/core/services/farmer-search-abstract-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private myFarmerSearchProvider: FarmerSearchAbstractProvider) { }

  mySelectedFarmer(params) {
    window.history.replaceState({}, '', `${location.pathname}?${params}`);
  }
}