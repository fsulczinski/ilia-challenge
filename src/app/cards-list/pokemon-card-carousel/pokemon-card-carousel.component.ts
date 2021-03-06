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
  onResize(event: any): void {
    this.platformWidth = event.target.innerWidth;
  }

  constructor() { }

  ngOnInit(): void {
  }

  getSlidesPerView(): number {
    if (this.platformWidth <= 332) {
      return 1;
    } else if (this.platformWidth > 328 && this.platformWidth <= 383) {
      return 1.2;
    } else if (this.platformWidth >= 383 && this.platformWidth <= 433) {
      return 1.3;
    } else {
      return 2.2;
    }
  }

}
