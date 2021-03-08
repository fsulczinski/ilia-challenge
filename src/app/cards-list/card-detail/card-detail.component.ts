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

  public faAngleRight = faAngleRight;
  public pokemonId: string = '';
  public pokemonCard: any;
  public selectedAttack = {};
  public isLoading: boolean = true;
  public isModalAttackDetailVisible: boolean = false;

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

  toggleModalAttackDetail(isVisible: boolean, attack?: any) {
    this.isModalAttackDetailVisible = isVisible;

    if (this.isModalAttackDetailVisible) {
      this.selectedAttack = attack;
      this.toggleBodyScroll(true);
    } else {
      this.toggleBodyScroll(false);
    }
  }

  toggleBodyScroll(param: boolean) {
    if (param) {
      document.body.classList.add('lock-scroll-y');
    } else {
      document.body.classList.remove('lock-scroll-y');
    }
  }

}
