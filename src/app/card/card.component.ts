import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons-list';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: `card.component.html`
})
export class CardComponent {

  constructor(
    private service:PokemonService,
  ){}

  title: string = 'pokemon-app';
  pokemonList: Pokemon[] = POKEMONS;
  pokemonListService:Pokemon[]= [];
  pokemonService:Pokemon;
  index: number = Math.floor(Math.random() * 12);

  getPokemon(){
    this.pokemonListService = this.service.fetchAllPokemon();
    return this.pokemonListService;
  }

  getPokemonById(i:number){
    this.pokemonService = this.service.fetchById(i);
    return this.pokemonService;
  }

  ngOnInit(): void {
    console.log("C'est moi wsh");
    console.table(this.pokemonList);
    console.log(this.getPokemonById(0).name);
  }


  selectPokemon(form: number): void{
    if(form > this.getPokemon().length || form < 1){
      console.log("Il n existe pas !");
    }else{
      console.log("Vous avez selectionner : "+ this.getPokemonById(form).name);
    }
  }

  cliquePokemon(id:number):void{
    console.log("Vous avez selectionner : "+ this.getPokemonById(id).name);
  }


}
