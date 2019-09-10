import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FarmerSearchAbstractProvider } from 'src/app/core/services/farmer-search-abstract-provider.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.scss']
})
export class FarmerSearchCardComponent implements OnInit {
  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() onFarmerSelectedEvent = new EventEmitter();
  private search = new FormControl('')
  private destinatario = new FormControl({ value: '', disabled: true })
  private doc = new FormControl({ value: '', disabled: true })
  private endereco = new FormControl({ value: '', disabled: true })

  ngOnInit() {
    const url = new URL(window.location.href);
    const param = new URLSearchParams(url.search);
    const name = param.get('name');
    const documentNumber = param.get('documentNumber');
    param && param.toString() && name || documentNumber ? this.setByUrl(param) : null;
  }

  async setByUrl(param) {
    let farmerSearch: Promise<any> = this.farmerSearchAbstractProvider.searchFarmers(param);
    let find = await farmerSearch;

    this.setValues(find[0]);
  }

  async onSearch() {
    let farmer;
    let findByName = this.search.value == '' ? await this.findAll() : await this.searchByName()
    let findByDoc = await this.searchByDoc()
    if (findByDoc.length == 1) {
      farmer = findByDoc[0]
      this.setUrlParam('documentNumber');
    }
    else {
      const randomly = arr => arr[Math.floor(Math.random() * arr.length)];
      farmer = randomly(findByName)
      this.setUrlParam('name');
    }
    this.setValues(farmer);
  }

  setValues(val) {
    this.destinatario = new FormControl({ value: val.name, disabled: true });
    this.doc = new FormControl({ value: val.documentNumber, disabled: true });
    this.endereco = new FormControl({ value: val.address + ' ' + val.number + ' ' + val.cep, disabled: true });
  }

  setUrlParam(query) {
    let param = new URLSearchParams()
    param.set(query, this.search.value)
    console.log(param.toString())
    this.onFarmerSelectedEvent.emit(param);
  }

  searchByName(): Promise<any> {
    const param = new URLSearchParams('name=' + this.search.value);
    return this.farmerSearchAbstractProvider.searchFarmers(param);
  }

  searchByDoc(): Promise<any> {
    const param = new URLSearchParams('documentNumber=' + this.search.value);
    return this.farmerSearchAbstractProvider.searchFarmers(param);
  }

  findAll(): Promise<any> {
    const param = new URLSearchParams();
    return this.farmerSearchAbstractProvider.searchFarmers(param);
  }

}
