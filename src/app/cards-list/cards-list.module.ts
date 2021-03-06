import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardsListComponent } from './cards-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [CardsListComponent, PokemonCardComponent],
  imports: [
    CommonModule
  ],
  exports: [CardsListComponent]
})
export class CardsListModule { }
