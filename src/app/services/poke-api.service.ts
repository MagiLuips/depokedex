import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  PokemonList,
  PokemonResult,
  PokemonSummarized,
} from '../interfaces/pokemon-list';
import { map, Observable } from 'rxjs';
import { PokemonData } from '../interfaces/pokemon-data';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/';
  data: PokemonResult[] = [];
  pokemonList: PokemonList | undefined;

  getPokemons(limit: number, offset: number): Observable<PokemonSummarized[]> {
    return this.http
      .get<PokemonList>(`${this.url}/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(map(this.getSummarizedData));
  }

  getPokemonById(id: number): Observable<PokemonData> {
    return this.http.get<PokemonData>(`${this.url}/pokemon/${id}`);
  }

  getPokemonByName(name: string): Observable<PokemonData> {
    return this.http.get<PokemonData>(`${this.url}/pokemon/${name}`);
  }

  private getSummarizedData(pokemonList: PokemonList): PokemonSummarized[] {
    const SummarizedList: PokemonSummarized[] = pokemonList.results.map(
      (pokemon) => {
        const id = parseInt(pokemon.url.split('/')[6]);
        const name = pokemon.name;
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return {
          id,
          name,
          sprite,
        };
      }
    );

    return SummarizedList;
  }

  constructor(private http: HttpClient) {}
}
