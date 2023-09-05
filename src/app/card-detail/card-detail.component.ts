import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-card-detail',
  templateUrl: `card-detail.component.html`
})
export class CardDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private service:PokemonService,
    ) {}


    pokemon!: Pokemon;
    id: number = Number(this.route.snapshot.paramMap.get('id'));
    pokemonSelect: Pokemon = this.getMangaById(this.id);
  
    ngOnInit(): void {
  
  }
  
  getMangaById(id : number){
    this.pokemon = this.service.fetchById(id);
    return this.pokemon;
  }
  

}
