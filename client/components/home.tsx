import React, { useEffect, useState } from 'react'
import Search from './search'
import Filter from './filter'
import PokemonGallery from './PokemonGallery'
import { getPokemonList } from '../api/pokedexapi'

interface Pokemon {
  id: number
  name: string
  type: string[]
  height: number
  weight: number
  image: string
}

const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [filteredList, setFilteredList] = useState<Pokemon[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [sortOption, setSortOption] = useState<string>('')

  useEffect(() => {
    getPokemonList().then((data) => setPokemonList(data))
  }, [])

  useEffect(() => {
    let result = pokemonList
    if (searchTerm) {
      result = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    if (sortOption) {
      result = result.sort((a, b) => {
        if (sortOption === 'name') return a.name.localeCompare(b.name)
        if (sortOption === 'number') return a.id - b.id
        if (sortOption === 'height') return a.height - b.height
        if (sortOption === 'weight') return a.weight - b.weight
        return 0
      })
    }
    setFilteredList(result)
  }, [searchTerm, sortOption, pokemonList])

  return (
    <div>
      <Search onSearch={setSearchTerm} />
      <Filter onSortChange={setSortOption} />
      <PokemonGallery pokemonList={filteredList} />
    </div>
  )
}

export default Home
