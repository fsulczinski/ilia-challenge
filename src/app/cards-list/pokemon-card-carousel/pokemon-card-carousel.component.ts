import { Component, HostListener, Input, OnInit } from '@angular/core';
import SwiperCore, { Scrollbar } from 'swiper/core';

SwiperCore.use([Scrollbar]);

@Component({
  selector: 'app-pokemon-card-carousel',
  templateUrl: './pokemon-card-carousel.component.html',
  styleUrls: ['./pokemon-card-carousel.component.scss']
})

export class PokemonCardCarouselComponent implements OnInit {

  @Input() pokemonCards: Array<{}> = [];
  public platformWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.platformWidth = event.target.innerWidth;
    console.log(this.platformWidth)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
