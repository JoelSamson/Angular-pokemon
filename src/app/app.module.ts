import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonService } from './pokemon.service';
import { PokemonStarterModule } from './pokemonstarter.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokemonStarterModule
  ],
  providers: [PokemonService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
