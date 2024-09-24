import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import PokemonGallery from './pages/PokemonGallery'
import PokemonDetails from './components/pokemonDetails'

const App: React.FC = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Router>
      <Navbar />
      <header className="header">
        <img src="/assets/pok.png" alt="Pokémon Banner" className="banner" />
        <h1>
          <b>Pokédex</b>
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<PokemonGallery />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  )
}

export default App
