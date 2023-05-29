import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './poke-api.service';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'card-game';


}
