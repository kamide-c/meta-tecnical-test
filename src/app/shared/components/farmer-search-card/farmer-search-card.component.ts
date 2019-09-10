import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FarmerSearchAbstractProvider } from 'src/app/core/services/farmer-search-abstract-provider.service';

@Component({
  selector: 'app-farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.scss']
})
export class FarmerSearchCardComponent {
  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() onFarmerSelectedEvent = new EventEmitter();

  constructor() { }

  ngOnChanges (changes: SimpleChanges) {
    try {
      console.log(this.farmerSearchAbstractProvider); //Async get data but i want
    } catch(err) {              //to do it more purer
      console.log(err);
    }
  }

  onSearch() {
    console.log(this.farmerSearchAbstractProvider);
    this.onFarmerSelectedEvent.emit({teste:'teste'});
  }

}
