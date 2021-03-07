import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsListComponent } from './cards-list.component';

const cardsListRoutes: Routes = [
    { path: '', component: CardsListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(cardsListRoutes)],
    exports: [RouterModule]
})
export class CardsListRoutingModule { }
