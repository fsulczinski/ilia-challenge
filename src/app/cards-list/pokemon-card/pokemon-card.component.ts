import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  pokemon = {
    "id": "xy1-1",
    "name": "Venusaur-EX",
    "supertype": "Pokémon",
    "subtypes": [
      "Basic",
      "EX"
    ],
    "hp": 180,
    "types": [
      "Grass"
    ],
    "evolvesTo": [
      "M Venusaur-EX"
    ],
    "attacks": [
      {
        "name": "Poison Powder",
        "cost": [
          "Grass",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "60",
        "text": "Your opponent's Active Pokémon is now Poisoned."
      },
      {
        "name": "Jungle Hammer",
        "cost": [
          "Grass",
          "Grass",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "90",
        "text": "Heal 30 damage from this Pokémon."
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ],
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 4,
    "set": {
      "id": "xy1",
      "name": "XY",
      "series": "XY",
      "printedTotal": 146,
      "total": 146,
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "ptcgoCode": "XY",
      "releaseDate": "02/05/2014",
      "updatedAt": "03/04/2018 10:35:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/xy1/symbol.png",
        "logo": "https://images.pokemontcg.io/xy1/logo.png"
      },
      "_self": "https://beta.pokemontcg.io/sets/xy1"
    },
    "number": "1",
    "artist": "Eske Yoshinob",
    "rarity": "Rare Holo EX",
    "nationalPokedexNumbers": [
      3
    ],
    "legalities": {
      "unlimited": "Legal",
      "expanded": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/xy1/1.png",
      "large": "https://images.pokemontcg.io/xy1/1_hires.png"
    },
    "tcgplayer": {
      "url": "http://prices.pokemontcg.io/tcgplayer/xy1-1",
      "prices": [
        {
          "holofoil": {
            "low": 0.78,
            "mid": 2.51,
            "high": 12.27,
            "market": 1.38,
            "directLow": 1.99
          }
        }
      ]
    }


  }

  constructor() { }

  ngOnInit(): void {
  }

}