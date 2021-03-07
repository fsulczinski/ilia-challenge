import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() public pokemon: any;
  @Input() public platformWidth: any;
  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onImageLoad(ev: Event) {
    console.log(ev)
    this.isLoading = false;
  }

}
