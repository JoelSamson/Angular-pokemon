import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  Subject,
  map, 
  tap,
  from,
  filter,
  toArray,
  concatMap
} from 'rxjs';
import { Pokemon, PokemonResponse } from './pokemon.interface';

@Injectable()
export class PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  pokemonList$ = new BehaviorSubject<Pokemon[]>([]);

  get pokemonList() {
    return this.pokemonList$.value;
  }

  constructor(private http: HttpClient) { }

  starterPokemon = ['Bulbasaur', 'Squirtle', 'Charmander'];

  getPokemon() {
    return from(this.starterPokemon).pipe(
      concatMap((p) =>
        this.http.get<PokemonResponse>(this.baseUrl + p.toLowerCase())
      ),
      tap((pokemon) => {
        const newPokemon = {
          name: pokemon.forms[0].name,
          sprites: pokemon.sprites,
          id: pokemon.id,
          weight: pokemon.weight,
          height: pokemon.height,
          types: pokemon.types,
        };
        this.pokemonList$.next([...this.pokemonList, newPokemon]);
      })
    );
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('Select Pokemon', pokemon);
    return this.pokemonList$.pipe(
      map((item) => item.filter((p) => p.id === pokemon.id))
    );
  }
}