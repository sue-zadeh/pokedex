import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdvancedSearch: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [selectedAbility, setSelectedAbility] = useState<string | null>(null)
  const [selectedNumber, setSelectedNumber] = useState<number>(1)

  const navigate = useNavigate()

  const handleTypeClick = (type: string) => setSelectedType(type)
  const handleAreaClick = (area: string) => setSelectedArea(area)
  const handleAbilityChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedAbility(e.target.value)
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedNumber(Number(e.target.value))

  const handleSearch = () => {
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
    <div className="container-fluid bg-light p-4 rounded">
      <h5>
        <b>Type:</b>
      </h5>
      <div className="row mb-2">
        {['Fire', 'Water', 'Grass', 'Electric', 'Flying', 'Poison'].map(
          (type) => (
            <div className="col-4 mb-2" key={type}>
              <button
                className={`btn btn-sm w-100 ${
                  selectedType === type ? 'btn-info' : 'btn-primary'
                }`}
                onClick={() => handleTypeClick(type)}
              >
                {type}
              </button>
            </div>
          )
        )}
      </div>

      <h5>
        <b>Area:</b>
      </h5>
      <div className="row mb-2">
        {['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Galar'].map((area) => (
          <div className="col-4 mb-2" key={area}>
            <button
              className={`btn btn-sm w-100 ${
                selectedArea === area ? 'btn-info' : 'btn-danger'
              }`}
              onClick={() => handleAreaClick(area)}
            >
              {area}
            </button>
          </div>
        ))}
      </div>

      <h5>
        <b>Ability:</b>
      </h5>
      <select className="form-select mb-2" onChange={handleAbilityChange}>
        <option value="">All</option>
        <option value="Blaze">Blaze</option>
        <option value="Torrent">Torrent</option>
      </select>

      <h5>
        <b>Number:</b>
      </h5>
      <input
        type="range"
        className="form-range bg-secondary mb-2"
        min="1"
        max="1025"
        value={selectedNumber}
        onChange={handleNumberChange}
      />
      <p>Range: {selectedNumber}</p>

      <button className="btn btn-primary w-100" onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default AdvancedSearch
