import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface PokemonCardProps {
  name: string
  url: string
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
  const [pokemonDetails, setPokemonDetails] = useState<any>(null)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemonDetails(data))
  }, [url])

  if (!pokemonDetails) return <p>Loading...</p>

  const id = pokemonDetails.id

  return (
    <Link to={`/pokemon/${id}`} className="text-decoration-none">
      <div className="card shadow p-3">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={name}
          className="gallery-img"
        />
        <h5 className="mt-2">{name}</h5>
        <p>Height: {pokemonDetails.height}</p>
        <p>Weight: {pokemonDetails.weight}</p>
      </div>
    </Link>
  )
}

export default PokemonCard
