import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})

export class CardsListComponent implements OnInit {

  pokemonCards = [
    {
      "id": "xy1-1",
      "name": "Venusaur-EX",
      "types": [
        "Grass"
      ],
      "images": {
        "small": "https://images.pokemontcg.io/xy1/1.png",
        "large": "https://images.pokemontcg.io/xy1/1_hires.png"
      }
    },
    {
      "id": "xy1-1",
      "name": "Venusaur-EX",
      "types": [
        "Grass"
      ],
      "images": {
        "small": "https://images.pokemontcg.io/xy1/1.png",
        "large": "https://images.pokemontcg.io/xy1/1_hires.png"
      }
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
