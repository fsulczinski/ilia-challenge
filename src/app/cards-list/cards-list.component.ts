import { Component, HostListener, OnInit } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})


export class CardsListComponent implements OnInit {

  public pokemonCards: any;
  public filteredPokemonCards: any;
  public searchQuery: any;
  public platformWidth = window.innerWidth;

  public faSearch = faSearch;
  public faTimes = faTimes;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.platformWidth = event.target.innerWidth;
  }

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardsService.getPokemonCards().subscribe((res: any) => {
      this.pokemonCards = res.data;
    });
      this.pokemonCards.sort((a: any, b: any) => a.name.localeCompare(b.name));
    });
  }

  onQueryEntry(): void {
    if (this.searchQuery.length >= 3) {
      this.filteredPokemonCards = this.pokemonCards
        .filter((card: any) => card.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1);
    } else {
      this.filteredPokemonCards = this.pokemonCards;
    }
  }

  clearSearchQuery(): void {
    this.searchQuery = '';
  }
}
