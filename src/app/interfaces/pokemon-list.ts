export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: PokemonResult[];
}

export interface PokemonResult {
  name: string;
  url: string;
}

export interface PokemonSummarized {
  id: number;
  name: string;
  sprite: string;
}
