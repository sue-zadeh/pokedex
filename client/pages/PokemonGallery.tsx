import React, { useState, useEffect } from 'react'
import PokemonCard from '../components/pokemonCard'
import { getPokemonList } from '../api/pokedexapi'
import { useLocation } from 'react-router-dom'

interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  number: number
  types: { type: { name: string } }[]
  abilities: { ability: { name: string } }[]
  area: string
  url: string
}

const PokemonGallery: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([])
  const [visibleCount, setVisibleCount] = useState(20)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortType, setSortType] = useState('id')
  const location = useLocation()
  const { types, area, ability, number } = location.state || {}

  useEffect(() => {
    getPokemonList().then((data) => {
      setPokemonList(data.results)
    })
  }, [])

  useEffect(() => {
    if (pokemonList.length === 0) return

    let filteredPokemon = [...pokemonList]

    if (types) {
      filteredPokemon = filteredPokemon.filter((pokemon) =>
        pokemon.types?.some((typeObj) => typeObj.type.name === types)
      )
    }

    if (area) {
      filteredPokemon = filteredPokemon.filter(
        (pokemon) => pokemon.area === area
      )
    }

    if (ability) {
      filteredPokemon = filteredPokemon.filter((pokemon) =>
        pokemon.abilities?.some(
          (abilityObj) => abilityObj.ability.name === ability
        )
      )
    }

    if (number) {
      filteredPokemon = filteredPokemon.filter(
        (pokemon) => pokemon.id <= number
      )
    }

    setFilteredPokemonList(filteredPokemon)
  }, [types, area, ability, number, pokemonList])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase())
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value)
  }

  const visiblePokemon = filteredPokemonList
    .filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm))
    .sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name)
      } else if (sortType === 'height') {
        return a.height - b.height
      } else if (sortType === 'weight') {
        return a.weight - b.weight
      } else {
        return a.id - b.id
      }
    })
    .slice(0, visibleCount)

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10)
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="d-flex justify-content-between mb-3">
          <input
            type="text"
            className="form-control form-control-sm fs-5"
            placeholder="Search Pokémon"
            onChange={handleSearchChange}
          />
          <select
            className="form-select form-select-sm fs-5"
            onChange={handleSortChange}
          >
            <option value="id">Sort by ID</option>
            <option value="name">Sort by Name</option>
            <option value="height">Sort by Height</option>
            <option value="weight">Sort by Weight</option>
          </select>
        </div>

        {visiblePokemon.map((pokemon) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={pokemon.name}>
            <PokemonCard name={pokemon.name} url={pokemon.url} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4 mb-4">
        {visibleCount < filteredPokemonList.length && (
          <button className="btn btn-primary" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>
    </div>
  )
}

export default PokemonGallery
