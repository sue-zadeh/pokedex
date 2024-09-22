import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface Pokemon {
  id: number
  name: string
  image: string
  height: number
  weight: number
}

interface PokemonGalleryProps {
  pokemonList: Pokemon[]
}

const PokemonGallery: React.FC<PokemonGalleryProps> = ({ pokemonList }) => {
  AOS.init() // Initialize AOS for animations

  return (
    <div className="row">
      {pokemonList.map((pokemon) => (
        <div
          key={pokemon.id}
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          data-aos="fade-up"
        >
          <img src={pokemon.image} alt={pokemon.name} className="gallery-img" />
          <h5>{pokemon.name}</h5>
        </div>
      ))}
    </div>
  )
}

export default PokemonGallery
