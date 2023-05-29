import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { Card } from "./models/card.model";

const apiUrl = environment.pokeApiUrl;

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  getPokemons(id:number) {
    return this.http.get<any>(`${apiUrl}/${id}`);
  }
}
