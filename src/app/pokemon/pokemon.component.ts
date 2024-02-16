import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  selectedPokemon: Pokemon | null = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe();

    this.pokemonService.pokemonList$.subscribe((pokemons) => {
      console.log(pokemons);
      this.pokemonList = pokemons;
    });
  }

  selectPokemon(pokemon: Pokemon) {
    const confirmSelection = confirm('Do you want to select ' + pokemon.name + '?');
    if (confirmSelection) {
      this.selectedPokemon = pokemon;
      console.log('selectedPoke',this.selectPokemon);
      this.pokemonList = []; // Clear out original list
      console.log('updated poke list',this.pokemonList);
    }
  }
}