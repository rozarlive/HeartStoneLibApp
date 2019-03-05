import { CardDeck, Card } from './card.model';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class CardService {
  public readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com';
  public readonly API_KEY =
    '426db3a8ecmsh4c6b7c3c0c8cf98p1e0fa7jsneb5c56ed4269';
  private headers: HttpHeaders;
  public readonly cardDecks: string[] = [
    'Druid',
    'Mage',
    'Warrior',
    'Rogue',
    'Shaman',
    'Priest',
    'Warlock',
    'Hunter',
    'Paladin'
  ];

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'X-RapidAPI-Key': this.API_KEY });
  }

  public getAllCardDecks(): Observable<CardDeck[]> {
    return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, {
      headers: this.headers
    });
  }

  public getCardsByDeck(
    cardDeckGroup: string,
    cardDeck: string
  ): Observable<Card[]> {
    return this.http.get<Card[]>(
      `${this.HS_API_URL}/cards/${cardDeckGroup}/${cardDeck}`,
      {
        headers: this.headers
      }
    );
  }

  public getCardById(cardId: string): Observable<Card[]> {
    console.log('cardname');
    console.log(cardId);
    return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardId}`, {
      headers: this.headers
    });
  }

  public replaceCardTextLine(text: string) {
    return text
      ? text.replace(new RegExp('\\\\n', 'g'), ' ')
      : 'No Description';
  }
}
