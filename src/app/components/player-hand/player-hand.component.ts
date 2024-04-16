import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app//models/card.model';

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss'],
})
export class PlayerHandComponent implements OnInit {
  cardIds: number[] = [];
  cards: Card[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    // this.cardIds = this.cardService.getPlayerHand();
    // this.cardId = this.cardService.getCardId();
  }

  addCardToHand(cardId: number) {
    this.cardService.addCardToHand(cardId);
    const cardIds = this.cardService.getPlayerHand();
    this.cards = cardIds.map((id) => ({
      id,
      name: `Card ${id}`,
    }));
  }
}

// addCardToHand(cardId: number) {
//   this.cardService.addCardToHand(cardId);
//   // this.cardIds = this.cardService.getPlayerHand();
//   const cardIds = this.cardService.getPlayerHand();
//   this.cards = cardIds.map((id) => ({
//     id,
//     name: `Card ${id}`, // You can fetch card name from CardService if available
//   }));
// }

// addCardToHand(cardId: number) {
//   this.cardService.addCardToHand(cardId);
//   const cardIds = this.cardService.getPlayerHand();
//   this.cards = cardIds.map((id) => ({
//     id,
//     name: `Card ${id}`,
//   }));
// }

//   addCardToHand(cardId: number | undefined) {
//   if (cardId !== undefined) {
//     this.cardService.addCardToHand(cardId);
//     const cardIds = this.cardService.getPlayerHand();
//     this.cards = cardIds.map((id) => ({
//       id,
//       name: `Card ${id}`,
//     }));
//   }
// }
