import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FarmersService {

  constructor(private http: HttpClient) { }

  getFarmers(url): Promise<any> {
    return this.http.get(url).toPromise()
  }
}
