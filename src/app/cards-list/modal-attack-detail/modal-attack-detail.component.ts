import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-modal-attack-detail',
  templateUrl: './modal-attack-detail.component.html',
  styleUrls: ['./modal-attack-detail.component.scss']
})
export class ModalAttackDetailComponent implements OnInit {

  @Input() attack: any;
  @Output() onClose = new EventEmitter();
  public faTimes = faTimes

  constructor() { }

  ngOnInit(): void {
    console.log(this.attack);
  }

  parseManaCost(name: string) {
    return `/assets/images/energy-types/${name.toLowerCase}.svg`
  }

  dismissModal() {
    this.onClose.emit(false);
  }

}
