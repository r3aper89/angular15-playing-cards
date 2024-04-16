import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app//models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card: Card | undefined;
  @Output() cardAdded = new EventEmitter<number>();

  constructor() {}

  addCard() {
    this.cardAdded.emit(this.card?.id);
  }
}
