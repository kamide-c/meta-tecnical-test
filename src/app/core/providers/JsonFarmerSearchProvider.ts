import { FarmerSearchAbstractProvider } from '../services/farmer-search-abstract-provider.service';
import { Farmer } from 'src/app/shared/models/farmer';
import { HttpClient } from '@angular/common/http';

export class JsonFarmerSearchProvider implements FarmerSearchAbstractProvider {
    readonly SEARCH_URL = 'https://my-json-server.typicode.com/kamide-c/meta-tecnical-test-mock/resolve';
  
    constructor(private http: HttpClient) { }
  
    searchFarmers(params: URLSearchParams): Promise<Farmer[]> {
      const url = this.SEARCH_URL.concat('?' + params.toString())
      return this.http.get<Farmer[]>(`${url}`).toPromise();
    }
  }