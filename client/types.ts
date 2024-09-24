export interface PokemonType {
  type: {
    name: string
  }
}

export interface PokemonFlavorText {
  flavor_text: string
}

export interface PokemonDetails {
  id: number
  name: string
  height: number
  weight: number
  types: PokemonType[]
  flavor_text_entries: PokemonFlavorText[]
}
