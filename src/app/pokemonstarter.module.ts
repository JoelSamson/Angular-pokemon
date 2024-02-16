import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pokemon/pokemon.component';
import { PokemonCardComponent } from './pokemoncard/pokemoncard.component';
import { PokemonService } from './pokemon.service';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonListComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  providers: [PokemonService],
  exports: [PokemonListComponent],
})
export class PokemonStarterModule {}