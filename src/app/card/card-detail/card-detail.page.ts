import { CardService } from './../shared/card.service';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../shared/card.model';
import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-card-detail',
  templateUrl: 'card-detail.page.html'
})
export class CardDetailPage {
  cardId: string;
  card: Card;
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private ionRouter: IonRouterOutlet
  ) {}

  ionViewWillEnter() {
    console.log('this.route');
    console.log(this.route);
    console.log(this.ionRouter);
    this.cardId = this.route.snapshot.paramMap.get('cardId');

    this.cardService.getCardById(this.cardId).subscribe((card: Card[]) => {
      this.card = card.map((card: Card) => {
        card.text = this.cardService.replaceCardTextLine(card.text);

        return card;
      })[0];
    });
  }

  updateImage() {
    this.card.img = 'assets/Image/DefaultCard.png';
  }
}
