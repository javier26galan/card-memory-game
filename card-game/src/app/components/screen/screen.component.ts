import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from '../../models/card.model';
import { PokeApiService } from '../../poke-api.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css'],
})
export class ScreenComponent implements OnInit {

  @Output() outData:EventEmitter<Card[]> = new EventEmitter<Card[]>();
  cardsArray = [] as Array<Card>;
  constructor(private pokeApiService: PokeApiService) {}

  // get the pokemon data and put in and array
  async getPokemons(id: number) {
    let pokeCard: Card;
    this.pokeApiService.getPokemons(id).subscribe((data: any) => {
      pokeCard = {
        id: data.id,
        name: data.name,
        imageUrl: data.sprites.front_default,
        side: false,
      };
      return this.cardsArray.push(pokeCard);
    });
  }

  ngOnInit(): void {
    this.getPokemons(25)
    this.getPokemons(3)
    this.getPokemons(102);
    this.outData.emit(this.cardsArray)
    // console.log("Array pokimos", this.cardsArray);
  }
}
