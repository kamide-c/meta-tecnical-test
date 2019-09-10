import { Component } from '@angular/core';
import { FarmersService } from './core/services/farmers.service';
import { FarmerSearchAbstractProvider } from 'src/app/core/services/farmer-search-abstract-provider.service';
import { Farmer } from './shared/models/farmer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements FarmerSearchAbstractProvider{
  readonly SEARCH_URL = 'https://my-json-server.typicode.com/kamide-c/meta-tecnical-test-mock/resolve';

  constructor(private farmersService:FarmersService) { }

  searchFarmers(query: URLSearchParams): Promise<Farmer[]> {
    const url = new URL(this.SEARCH_URL);
    const params = new URLSearchParams(url.search);
    console.log(query)
    // params.set(query);

    return this.farmersService.getFarmers(`${url}`)
  }
  
  mySelectedFarmer(eve: Event) {
    const params = new URLSearchParams(eve.toString());
    this.searchFarmers(params)
  }
}
