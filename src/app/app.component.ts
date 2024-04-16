import { Component } from '@angular/core';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng15template';
  constructor(private cardService: CardService) {}

  addCardToPlayerHand() {
    const cardId = this.cardService.getCardId();
    this.cardService.addCardToHand(cardId);
  }
}
