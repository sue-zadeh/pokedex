// to see the slected pokemon's details

import React from 'react'

interface Pokemon {
  id: number
  name: string
  type: string[]
  height: number
  weight: number
  image: string
  abilities: string[]
}

interface PokemonProps {
  pokemon: Pokemon
}

const PokemonDetails: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div>
      <h2>
        {pokemon.name} #{pokemon.id}
      </h2>
      <img src={pokemon.image} alt={pokemon.name} className="modal-img" />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Type: {pokemon.type.join(', ')}</p>
      <p>Abilities: {pokemon.abilities.join(', ')}</p>
    </div>
  )
}

export default PokemonDetails
