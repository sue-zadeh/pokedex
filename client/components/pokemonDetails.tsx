import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPokemonDetails, getPokemonByType } from '../api/pokedexapi'
import PokemonCard from '../components/pokemonCard'

const PokemonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [pokemon, setPokemon] = useState<any>(null)
  const [speciesDetails, setSpeciesDetails] = useState<any>(null) // For description
  const [pokemonList, setPokemonList] = useState<any[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await getPokemonDetails(Number(id))
      setPokemon(response)

      // Fetch Pokémon species for description
      const speciesResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
      )
      const speciesData = await speciesResponse.json()
      setSpeciesDetails(speciesData)
    }
    fetchPokemonDetails()
  }, [id])

  const handleTypeClick = (type: string) => {
    getPokemonByType(type).then((data) => {
      const pokemonPromises = data.pokemon.map((pokeObj: any) =>
        fetch(pokeObj.pokemon.url).then((res) => res.json())
      )
      Promise.all(pokemonPromises).then((results) => {
        navigate('/gallery', { state: { pokemonList: results } })
      })
    })
  }

  if (!pokemon || !speciesDetails) return <p>Loading...</p>

  // Extract English description from flavor_text_entries
  const description =
    speciesDetails.flavor_text_entries.find(
      (entry: any) => entry.language.name === 'en'
    )?.flavor_text || 'No description available'

  return (
    <div className="home-container container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6">
          <h1>{pokemon.name}</h1>
          <p>{description}</p> {/* Description fetched from species API */}
          <ul>
            <li>Height: {pokemon.height}</li>
            <li>Weight: {pokemon.weight}</li>
            <li>Category: {pokemon.types[0].type.name}</li>
          </ul>
          <div>
            <h4>Types</h4>
            {pokemon.types.map((typeObj: any) => (
              <button
                className="btn btn-primary mx-1"
                key={typeObj.type.name}
                onClick={() => handleTypeClick(typeObj.type.name)}
              >
                {typeObj.type.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails
