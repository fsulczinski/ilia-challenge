import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-modal-attack-detail',
  templateUrl: './modal-attack-detail.component.html',
  styleUrls: ['./modal-attack-detail.component.scss']
})
export class ModalAttackDetailComponent implements OnInit {

  @Input() attack: any;
  @Output() modalClosed = new EventEmitter();
  public faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  parseEnergyCostImg(name: string): string {
    const imgURL = '/assets/images/energy-types/' + name.toLowerCase() + '.svg';
    return imgURL;
  }

  dismissModal(): void {
    this.modalClosed.emit(false);
  }

}
