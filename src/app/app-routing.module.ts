
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockupComponent } from './modules/mockup/mockup.component';

const routes: Routes = [
  { path: 'search', component: MockupComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },

];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}