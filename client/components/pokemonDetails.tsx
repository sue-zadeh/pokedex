import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>() // Extracts the id from URL params
  const [pokemon, setPokemon] = useState<any>(null)

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // Update with correct API endpoint
      const data = await response.json()
      console.log(data) // Debugging to see the fetched data in the console
      setPokemon(data)
    }
    fetchPokemonDetails()
  }, [id]) // Add `id` to dependencies array so it fetches new data if the id changes

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
export default PokemonDetails
