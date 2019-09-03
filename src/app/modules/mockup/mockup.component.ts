import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FarmersService } from 'src/app/core/services/farmers.service';

@Component({
  selector: 'app-mockup',
  templateUrl: './mockup.component.html',
  styleUrls: ['./mockup.component.scss']
})
export class MockupComponent implements OnInit {

  queryField = new FormControl();

  constructor(private farmersService:FarmersService) { }

  ngOnInit() {
  }

  onSearch() {
    this.farmersService.getFarmers().subscribe(resp => console.log(resp))
  }

}
