import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Ensure the correct import

const AdvancedSearch: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [selectedAbility, setSelectedAbility] = useState<string | null>(null)
  const [selectedNumber, setSelectedNumber] = useState<number>(1)

  const navigate = useNavigate() // Initialize useNavigate

  const handleTypeClick = (type: string) => setSelectedType(type)
  const handleAreaClick = (area: string) => setSelectedArea(area)
  const handleAbilityChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedAbility(e.target.value)
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedNumber(Number(e.target.value))

  const handleSearch = () => {
    // Redirect to the gallery page with the selected filters
    navigate('/gallery', {
      state: {
        types: selectedType,
        area: selectedArea,
        ability: selectedAbility,
        number: selectedNumber
      }
    })
  }

  return (
    <div className="advanced-search-container">
      <div>
        <h5>Type</h5>
        <div className="type-options">
          {['Fire', 'Water', 'Grass', 'Electric', 'Flying', 'Poison'].map(
            (type) => (
              <button
                key={type}
                className={`btn btn-sm ${
                  selectedType === type ? 'btn-primary' : 'btn-outline-primary'
                } mx-1 mb-1`}
                onClick={() => handleTypeClick(type)}
              >
                {type}
              </button>
            )
          )}
        </div>

        <h5>Area</h5>
        <div className="area-options">
          {['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Galar'].map((area) => (
            <button
              key={area}
              className={`btn btn-sm ${
                selectedArea === area ? 'btn-success' : 'btn-outline-success'
              } mx-1 mb-1`}
              onClick={() => handleAreaClick(area)}
            >
              {area}
            </button>
          ))}
        </div>

        <h5>Ability</h5>
        <select className="form-select" onChange={handleAbilityChange}>
          <option value="">All</option>
          <option value="Blaze">Blaze</option>
          <option value="Torrent">Torrent</option>
        </select>

        <h5>Number</h5>
        <input
          type="range"
          className="form-range"
          min="1"
          max="1025"
          value={selectedNumber}
          onChange={handleNumberChange}
        />
        <p>Range: {selectedNumber}</p>

        <button className="btn btn-primary mt-3" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  )
}

export default AdvancedSearch
