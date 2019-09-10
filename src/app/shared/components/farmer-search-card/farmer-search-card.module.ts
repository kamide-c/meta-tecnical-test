import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerSearchCardComponent } from './farmer-search-card.component';
import { AngularMaterialModule } from 'src/app/modules/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FarmerSearchCardComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports: [FarmerSearchCardComponent]
})
export class FarmerSearchCardModule { }
