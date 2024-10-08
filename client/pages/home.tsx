import React, { useState, useEffect } from 'react'
import { getPokemonDetails, getPokemonByType } from '../api/pokedexapi'
import PokemonCard from '../components/pokemonCard'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<any>(null)
  const [pokemonList, setPokemonList] = useState<any[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    getPokemonDetails(25).then((data) => {
      setPokemon(data)
    })
  }, [])

  const handleTypeClick = (type: string) => {
    getPokemonByType(type).then((data) => {
      const pokemonPromises = data.pokemon.map((pokeObj: any) =>
        fetch(pokeObj.pokemon.url).then((res) => res.json())
      )
      Promise.all(pokemonPromises).then((results) => {
        // Redirect to the gallery page with the filtered Pokémon list
        navigate('/gallery', { state: { pokemonList: results } })
      })
    })
  }

  if (!pokemon) return <p>Loading...</p>

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
          <p>
            {pokemon.flavor_text_entries
              ? pokemon.flavor_text_entries[0].flavor_text
              : 'When several of these Pokémon gather, their electricity could build and cause lightning storms.'}
          </p>

          <ul>
            <li>Height: {pokemon.height}</li>
            <li>Weight: {pokemon.weight}</li>
            <li>Category: {pokemon.types[0].type.name}</li>
          </ul>
          <div>
            <h4>Types</h4>
            {pokemon.types.map((typeObj: any) => (
              <button
                className="btn btn-primary px-5 mx-1"
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

export default Home
