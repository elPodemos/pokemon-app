import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons-list';

@Component({
  selector: 'app-card',
  templateUrl: `card.component.html`
})
export class CardComponent {

  title: string = 'pokemon-app';
  pokemonList: Pokemon[] = POKEMONS;
  index: number = Math.floor(Math.random() * 12);

  ngOnInit(): void {
    console.log("C'est moi wsh");
    console.table(this.pokemonList);
  }

  selectPokemon(form: number): void{
    if(form > this.pokemonList.length || form < 1){
      console.log("Il n existe pas !");
    }else{
      console.log("Vous avez selectionner : "+ this.pokemonList[form-1].name);
    }
  }

  cliquePokemon(id:number):void{
    console.log("Vous avez selectionner : "+ this.pokemonList[id-1].name);
  }


}
