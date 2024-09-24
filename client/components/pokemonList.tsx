import React from 'react'
import PokemonCard from './pokemonCard'

interface PokemonListProps {
  pokemon: any[]
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-list">
      {pokemon.map((poke) => (
        <PokemonCard key={poke.name} name={poke.name} url={poke.url} />
      ))}
    </div>
  )
}

export default PokemonList
