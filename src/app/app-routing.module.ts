import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinentsComponent } from './continents/continents.component';
import { ContinentComponent } from './continents/continent/continent.component';

const routes: Routes = [
  { path: 'continents', component: ContinentsComponent },
  { path: 'continents/:code', component: ContinentComponent },
  { path: '', redirectTo: '/continents', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
