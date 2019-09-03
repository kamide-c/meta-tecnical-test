import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockupComponent } from './mockup.component';
import { AngularMaterialModule } from 'src/app/modules/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MockupComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class MockupModule { }
