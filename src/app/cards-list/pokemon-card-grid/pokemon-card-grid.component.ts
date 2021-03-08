import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-grid',
  templateUrl: './pokemon-card-grid.component.html',
  styleUrls: ['./pokemon-card-grid.component.scss']
})
export class PokemonCardGridComponent implements OnInit {

  @Input() public pokemonCards: Array<{}> = [];
  public platformWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.platformWidth = event.target.innerWidth;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
