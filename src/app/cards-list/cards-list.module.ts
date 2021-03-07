import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { CardsListComponent } from './cards-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonCardCarouselComponent } from './pokemon-card-carousel/pokemon-card-carousel.component';
import { PokemonCardGridComponent } from './pokemon-card-grid/pokemon-card-grid.component';



@NgModule({
  declarations: [CardsListComponent, PokemonCardComponent, PokemonCardCarouselComponent, PokemonCardGridComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [CardsListComponent]
})
export class CardsListModule { }
