import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Scrollbar } from 'swiper/core';

SwiperCore.use([Scrollbar]);

@Component({
  selector: 'app-pokemon-card-carousel',
  templateUrl: './pokemon-card-carousel.component.html',
  styleUrls: ['./pokemon-card-carousel.component.scss']
})


export class PokemonCardCarouselComponent implements OnInit {

  @Input() pokemonCards: Array<{}> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
