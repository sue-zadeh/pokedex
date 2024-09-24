import React, { useState, useEffect } from 'react'
import PokemonCard from '../components/pokemonCard'
import { getPokemonList } from '../api/pokedexapi'

interface Pokemon {
  id: number
  name: string
  url: string
}

const PokemonGallery: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [visibleCount, setVisibleCount] = useState(20)

  useEffect(() => {
    getPokemonList().then((data) => {
      setPokemonList(data.results)
    })
  }, [])

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10)
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {pokemonList.slice(0, visibleCount).map((pokemon) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={pokemon.name}>
            <PokemonCard name={pokemon.name} url={pokemon.url} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4 mb-4">
        {visibleCount < pokemonList.length && (
          <button className="btn btn-primary" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>
    </div>
  )
}

export default PokemonGallery
