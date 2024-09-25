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
  types: string
  ability: any
  area: any
  url: string
}

const PokemonGallery: React.FC = () => {
  const [originalPokemonList, setOriginalPokemonList] = useState<Pokemon[]>([]) // Store the original list
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]) // Display filtered list
  const [visibleCount, setVisibleCount] = useState(20)
  const [searchTerm, setSearchTerm] = useState('') // For search functionality
  const [sortType, setSortType] = useState('id') // For sorting
  const location = useLocation()
  const { types, area, ability, number } = location.state || {}

  useEffect(() => {
    getPokemonList().then((data) => {
      setOriginalPokemonList(data.results) // Fetch and store the original list
      setPokemonList(data.results) // Initially set the list to the full list
    })
  }, [])

  useEffect(() => {
    let filteredPokemon = [...originalPokemonList] // Use original list for filtering

    if (types) {
      filteredPokemon = filteredPokemon.filter((pokemon) =>
        pokemon.types.includes(types)
      )
    }

    if (area) {
      filteredPokemon = filteredPokemon.filter(
        (pokemon) => pokemon.area === area
      )
    }

    if (ability) {
      filteredPokemon = filteredPokemon.filter((pokemon) =>
        pokemon.ability.includes(ability)
      )
    }

    if (number) {
      filteredPokemon = filteredPokemon.filter(
        (pokemon) => pokemon.number <= number
      )
    }

    setPokemonList(filteredPokemon) // Update the displayed list
  }, [types, area, ability, number, originalPokemonList])

  // Handle search logic
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase())
  }

  // Handle sorting logic
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value)
  }

  // Filter the list of Pokémon by search term and sorting
  const filteredPokemonList = pokemonList
    .filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm))
    .sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name) // Use localeCompare for strings (name)
      } else if (sortType === 'height') {
        return a.height - b.height // For numbers, subtract them
      } else if (sortType === 'weight') {
        return a.weight - b.weight // For numbers, subtract them
      } else {
        return a.id - b.id // Default to sorting by ID
      }
    })

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
            onChange={handleSearchChange} // Search Pokémon by name
          />
          <select
            className="form-select form-select-sm fs-5"
            onChange={handleSortChange} // Sort by name or ID, height, weight
          >
            <option value="id">Sort by ID</option>
            <option value="name">Sort by Name</option>
            <option value="height">Sort by Height</option>
            <option value="weight">Sort by Weight</option>
          </select>
        </div>

        {filteredPokemonList.slice(0, visibleCount).map((pokemon) => (
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
