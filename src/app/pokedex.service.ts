import { Pokedex } from './pokedex';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor( private http: HttpClient ) {

  }
  pokeId: number = 132;
  pokeName: string | undefined;

  getPoke(): Observable<Pokedex> {
    return this.http.get<Pokedex>(`https://pokeapi.co/api/v2/pokemon/${this.pokeId}`);
  }

  nextPoke() {
    this.pokeId++;
    this.getPoke();
  }
}
