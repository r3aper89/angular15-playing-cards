import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app//models/card.model';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss'],
})
export class CardDeckComponent implements OnInit {
  cardId: number | undefined;
  cards: Card[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardId = this.cardService.getCardId();
    this.cards = this.cardService.getCards();
  }
  addCardToHand(cardId: number | undefined) {
    if (cardId !== undefined) {
      this.cardService.addCardToHand(cardId);
      const cardIds = this.cardService.getPlayerHand();
      this.cards = cardIds.map((id) => ({
        id,
        name: `Card ${id}`,
      }));
    }
  }
}
