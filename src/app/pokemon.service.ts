import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  fetchAllPokemon(){
    return POKEMONS;
  }

  fetchById(i:number){
    return POKEMONS[i-1];
  }

}
