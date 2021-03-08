import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailComponent } from './card-detail/card-detail.component';

import { CardsListComponent } from './cards-list.component';

const cardsListRoutes: Routes = [
    { path: '', component: CardsListComponent },
    { path: 'card/:id', component: CardDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(cardsListRoutes)],
    exports: [RouterModule]
})
export class CardsListRoutingModule { }
