import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsListService } from './cards-list.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})


export class CardsListComponent implements OnInit {

  public platformWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.platformWidth = event.target.innerWidth;
    console.log(this.platformWidth)
  }

  // public pokemonCards = [
  //   {
  //     "id": "xy1-1",
  //     "name": "Venusaur-EX",
  //     "types": [
  //       "Grass"
  //     ],
  //     "images": {
  //       "small": "https://images.pokemontcg.io/xy1/1.png",
  //       "large": "https://images.pokemontcg.io/xy1/1_hires.png"
  //     }
  //   },
  //   {
  //     "id": "xy1-1",
  //     "name": "Venusaur-EX",
  //     "types": [
  //       "Grass",
  //       "Venom"
  //     ],
  //     "images": {
  //       "small": "https://images.pokemontcg.io/xy1/1.png",
  //       "large": "https://images.pokemontcg.io/xy1/1_hires.png"
  //     }
  //   },
  //   {
  //     "id": "xy1-1",
  //     "name": "Venusaur-EX",
  //     "types": [
  //       "Grass"
  //     ],
  //     "images": {
  //       "small": "https://images.pokemontcg.io/xy1/1.png",
  //       "large": "https://images.pokemontcg.io/xy1/1_hires.png"
  //     }
  //   },
  //   {
  //     "id": "xy1-1",
  //     "name": "Venusaur-EX",
  //     "types": [
  //       "Grass"
  //     ],
  //     "images": {
  //       "small": "https://images.pokemontcg.io/xy1/1.png",
  //       "large": "https://images.pokemontcg.io/xy1/1_hires.png"
  //     }
  //   },
  //   {
  //     "id": "xy1-1",
  //     "name": "Venusaur-EX",
  //     "types": [
  //       "Grass"
  //     ],
  //     "images": {
  //       "small": "https://images.pokemontcg.io/xy1/1.png",
  //       "large": "https://images.pokemontcg.io/xy1/1_hires.png"
  //     }
  //   },
  //   {
  //     "id": "xy1-1",
  //     "name": "Venusaur-EX",
  //     "types": [
  //       "Grass"
  //     ],
  //     "images": {
  //       "small": "https://images.pokemontcg.io/xy1/1.png",
  //       "large": "https://images.pokemontcg.io/xy1/1_hires.png"
  //     }
  //   },
  //   {
  //     "id": "xy1-1",
  //     "name": "Venusaur-EX",
  //     "types": [
  //       "Grass"
  //     ],
  //     "images": {
  //       "small": "https://images.pokemontcg.io/xy1/1.png",
  //       "large": "https://images.pokemontcg.io/xy1/1_hires.png"
  //     }
  //   },
  // ]

  public pokemonCards: any;

  constructor(private cardsListService: CardsListService) { }

  ngOnInit(): void {
    this.cardsListService.getPokemonCards().subscribe((res: any) => {
      this.pokemonCards = res.data
    })
  }

}
