import React, { useState, useEffect } from 'react'
import { getPokemonDetails } from '../api/pokedexapi'

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<any>(null)

  useEffect(() => {
    // Load a default Pokémon, e.g., Bulbasaur, when the page loads
    getPokemonDetails(25).then((data) => {
      console.log(data) // Ensure you're logging data for debugging
      setPokemon(data)
    })
  }, [])

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
              : 'No description available'}
          </p>
          <ul>
            <li>Height: {pokemon.height}</li>
            <li>Weight: {pokemon.weight}</li>
            <li>Category: {pokemon.types[0].type.name}</li>
          </ul>
          <div>
            <h4>Types</h4>
            {pokemon.types.map((typeObj: any) => (
              <button className="btn btn-primary mx-1" key={typeObj.type.name}>
                {typeObj.type.name}
              </button>
            ))}
          </div>
          <div>
            <h4>Weaknesses</h4>
            {/* Weakness logic here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
