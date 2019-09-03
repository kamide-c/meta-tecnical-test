import { Injectable } from '@angular/core';
import { Farmer } from 'src/app/shared/models/farmer';

@Injectable({
  providedIn: 'root'
})
export declare abstract class FarmerSearchAbstractProvider {
  abstract searchFarmers(params: URLSearchParams): Promise<Farmer[]>;
}

