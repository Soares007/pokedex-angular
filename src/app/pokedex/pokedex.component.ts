import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokedex } from '../pokedex';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  poke: Pokedex = {} as Pokedex;

  constructor(private service: PokedexService){}


  ngOnInit(): void {
    this.loadPoke();
  }

  loadPoke(): void {
    this.service.getPoke().subscribe(
      {
        next : data => this.poke = data
      }
    );
  }



  getId() : number {
    return this.service.pokeId;
  }

}
