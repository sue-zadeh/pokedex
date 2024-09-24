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
    <div className="container text-center">
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="modal-img"
      />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>
        {/* Mapping types and joining them */}
        Type: {pokemon.types.map((type: any) => type.type.name).join(', ')}
      </p>{' '}
    </div>
  )
}

export default PokemonDetails
