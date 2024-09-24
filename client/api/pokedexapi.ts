// api/pokedexapi.ts

export const getPokemonList = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
  const data = await response.json()
  return data
}

export const getPokemonDetails = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await response.json()
  return data
}
export const getPokemonByType = async (type: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
  const data = await response.json()
  return data
}
