export interface PokemonData {
  id: number;
  name: string;
  sprites: Sprites;
  height: number;
  weight: number;
  types: PokemonType[];
}

export interface PokemonType {}

export interface Sprites {
  front_default: string;
}
