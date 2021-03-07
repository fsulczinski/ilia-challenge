import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardsService } from '../cards.service';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  faAngleRight = faAngleRight;
  pokemonId: string = '';
  pokemonCard: any;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private cardsService: CardsService) { }

  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.params['id'];

    this.cardsService.getPokemonCardById(this.pokemonId).subscribe(res => {
      this.pokemonCard = res['data'];
      console.log(this.pokemonCard)
    })
  }

  onImageLoad() {
    this.isLoading = false;
  }

}
