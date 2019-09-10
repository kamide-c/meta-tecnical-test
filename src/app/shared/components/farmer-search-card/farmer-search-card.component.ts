import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FarmerSearchAbstractProvider } from 'src/app/core/services/farmer-search-abstract-provider.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.scss']
})
export class FarmerSearchCardComponent {
  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() onFarmerSelectedEvent = new EventEmitter();
  private search = new FormControl('')

  onSearch() {
    this.onFarmerSelectedEvent.emit(this.search.value);
  }

}
