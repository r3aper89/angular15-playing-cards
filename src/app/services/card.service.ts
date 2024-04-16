import { Injectable } from '@angular/core';
import { Card } from 'src/app//models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  // private cards: Card[] = [];
  private playerHand: number[] = [];
  private cardId: number = 1;

  baseUrl = `https://pokeapi.co/api/v2/pokemon/`;

  private cards: Card[] = [
    { id: 1, name: 'Card 1 is a funny card about jokes' },
    { id: 2, name: 'Card 2 is a funny card about cats' },
    { id: 3, name: 'Card 3 is a funny card about dogs' },
  ];

  constructor() {
    // Sample cards
    // this.cards.push({ id: this.cardId++, name: 'Card 1' });
    // this.cards.push({ id: this.cardId++, name: 'Card 2' });
    // this.cards.push({ id: this.cardId++, name: 'Card 3' });
    // Add more cards as needed
  }

  getCards(): Card[] {
    return this.cards;
  }

  getCardId(): number {
    return this.cardId++;
  }

  getPlayerHand(): number[] {
    return this.playerHand;
  }

  addCardToHand(cardId: number) {
    this.playerHand.push(cardId);
  }
}
