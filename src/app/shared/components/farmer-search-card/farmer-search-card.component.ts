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
    this.setByUrl()
  }

  async setByUrl() {
    const url = new URL(window.location.href);
    const param = new URLSearchParams(url.search);

    let farmerSearch: Promise<any> = this.farmerSearchAbstractProvider.searchFarmers(param);
    let find = await farmerSearch;
    
    this.destinatario = new FormControl({ value: find[0].name, disabled: true });
    this.doc = new FormControl({ value: find[0].documentNumber, disabled: true });
    this.endereco = new FormControl({ value: find[0].address + ' ' + find[0].number + ' ' + find[0].cep, disabled: true });
  }

  async onSearch() {
    let findByName = this.search.value == '' ? await this.findAll() : await this.searchByName()
    let findByDoc = await this.searchByDoc()
    if (findByDoc.length == 1) {
      this.destinatario = new FormControl({ value: findByDoc[0].name, disabled: true });
      this.doc = new FormControl({ value: findByDoc[0].documentNumber, disabled: true });
      this.endereco = new FormControl({ value: findByDoc[0].address + ' ' + findByDoc[0].number + ' ' + findByDoc[0].cep, disabled: true });

      let param = new URLSearchParams()
      param.set('documentNumber', this.doc.value)
      this.onFarmerSelectedEvent.emit(param);
    }
    else {
      const randomly = arr => arr[Math.floor(Math.random() * arr.length)];
      const random = randomly(findByName)
      this.destinatario = new FormControl({ value: random.name, disabled: true });
      this.doc = new FormControl({ value: random.documentNumber, disabled: true });
      this.endereco = new FormControl({ value: random.address + ' ' + random.number + ' ' + random.cep, disabled: true });

      let param = new URLSearchParams()
      param.set('name', this.destinatario.value)
      this.onFarmerSelectedEvent.emit(param);
    }
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
