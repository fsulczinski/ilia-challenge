import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';
import { LoaderModule } from '../loader/loader.module';

import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardsListRoutingModule } from './cards-list-routing.module';
import { CardsListComponent } from './cards-list.component';
import { PokemonCardCarouselComponent } from './pokemon-card-carousel/pokemon-card-carousel.component';
import { PokemonCardGridComponent } from './pokemon-card-grid/pokemon-card-grid.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { ModalAttackDetailComponent } from './modal-attack-detail/modal-attack-detail.component';



@NgModule({
  declarations: [
    CardsListComponent,
    PokemonCardComponent,
    PokemonCardCarouselComponent,
    PokemonCardGridComponent,
    CardDetailComponent,
    ModalAttackDetailComponent
  ],
  imports: [
    CommonModule,
    CardsListRoutingModule,
    FontAwesomeModule,
    LoaderModule,
    SwiperModule
  ],
  exports: [CardsListComponent]
})
export class CardsListModule { }
