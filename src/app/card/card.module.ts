import { CardService } from './shared/card.service';
import { CardDeckPage } from './card-deck/card-deck.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardPage } from './card.page';
import { CardDetailPage } from './card-detail/card-detail.page';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardListingPage } from './card-listing/card-listing.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CardDeckPage },
      { path: 'cardDeck', component: CardDeckPage },
      { path: ':cardDeckGroup/:cardDeck', component: CardListingPage },
      { path: ':cardId', component: CardDetailPage }
    ])
  ],
  providers: [CardService],
  declarations: [
    CardPage,
    CardDetailPage,
    CardDeckPage,
    CardListComponent,
    CardListingPage
  ]
})
export class CardPageModule {}
