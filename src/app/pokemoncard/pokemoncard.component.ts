import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  @Output() select: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  selectPokemon() {
    this.select.emit(this.pokemon);
  }
}