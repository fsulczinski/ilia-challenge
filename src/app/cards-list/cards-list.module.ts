import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from 'swiper/angular';
import { HttpLoaderFactory } from '../app.module';

import { LoaderModule } from '../loader/loader.module';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardsListRoutingModule } from './cards-list-routing.module';
import { CardsListComponent } from './cards-list.component';
import { ModalAttackDetailComponent } from './modal-attack-detail/modal-attack-detail.component';
import { PokemonCardCarouselComponent } from './pokemon-card-carousel/pokemon-card-carousel.component';
import { PokemonCardGridComponent } from './pokemon-card-grid/pokemon-card-grid.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';



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
    SwiperModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [CardsListComponent]
})
export class CardsListModule { }
