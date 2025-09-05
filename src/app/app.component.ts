import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokeApiService } from './services/poke-api.service';
import {
  PokemonList,
  PokemonResult,
  PokemonSummarized,
} from './interfaces/pokemon-list';
import { DataCardComponent } from './components/data-card/data-card.component';
import { Observable } from 'rxjs';
import { PokemonData } from './interfaces/pokemon-data';
import { DataModalComponent } from './components/data-modal/data-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataCardComponent, CommonModule, DataModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'depokedex';

  pokeApiService: PokeApiService = inject(PokeApiService);
  pokemonSummarized: PokemonSummarized[] = [];
  selectedPokemon: PokemonData | undefined;
  isModalVisible: boolean = false;

  constructor() {
    this.pokeApiService.getPokemons(0, 10).subscribe((pokemonSummarized) => {
      this.pokemonSummarized = pokemonSummarized;
    });
  }

  filterResults(text: string) {
    this.pokeApiService.getPokemonByName(text).subscribe((pokemon) => {
      this.selectedPokemon = pokemon;
    });

    this.isModalVisible = true;
  }

  showDataModal(event: number) {
    this.pokeApiService.getPokemonById(event).subscribe((pokemon) => {
      this.selectedPokemon = pokemon;
    });

    this.isModalVisible = true;
  }

  hideDataModal() {
    this.isModalVisible = false;
  }
}
