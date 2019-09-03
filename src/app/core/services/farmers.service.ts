import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FarmersService {
  readonly SEARCH_URL = 'https://my-json-server.typicode.com/kamide-c/meta-tecnical-test-mock/resolve';

  constructor(private http: HttpClient) { }

  getFarmers(): Promise<any> {
    return this.http.get(this.SEARCH_URL).toPromise()
  }
}
