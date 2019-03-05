import { CardService } from './../shared/card.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../shared/card.model';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss']
})
export class CardListingPage {
  cardDeckGroup: string;
  cardDeck: string;
  cards: Card[] = [];
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) {}

  ionViewWillEnter() {
    console.log('this.route');
    console.log(this.route);
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');
    this.cardService
      .getCardsByDeck(this.cardDeckGroup, this.cardDeck)
      .subscribe((cards: Card[]) => {
        this.cards = cards.map((card: Card) => {
          card.text = this.cardService.replaceCardTextLine(card.text);
          return card;
        });
      });
  }
}
