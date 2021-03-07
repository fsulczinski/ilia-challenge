import { Component, HostListener, OnInit } from '@angular/core';

import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})


export class CardsListComponent implements OnInit {

  public pokemonCards: any;
  public platformWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.platformWidth = event.target.innerWidth;
    console.log(this.platformWidth)
  }

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardsService.getPokemonCards().subscribe((res: any) => {
      this.pokemonCards = res.data
    })
  }

}
