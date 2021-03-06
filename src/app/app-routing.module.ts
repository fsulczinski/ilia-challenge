import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsListComponent } from './cards-list/cards-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cards-list' },
  { path: 'cards-list', pathMatch: 'full', component: CardsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
