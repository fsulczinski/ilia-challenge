import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { CardsListRoutingModule } from './cards-list-routing.module';
import { CardsListComponent } from './cards-list.component';
import { PokemonCardCarouselComponent } from './pokemon-card-carousel/pokemon-card-carousel.component';
import { PokemonCardGridComponent } from './pokemon-card-grid/pokemon-card-grid.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    CardsListComponent,
    PokemonCardComponent,
    PokemonCardCarouselComponent,
    PokemonCardGridComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    CardsListRoutingModule,
    FontAwesomeModule,
    SwiperModule
  ],
  exports: [CardsListComponent]
})
export class CardsListModule { }
