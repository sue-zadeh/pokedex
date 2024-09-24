import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdvancedSearch from '../components/AdvancedSearch'

const Navbar: React.FC = () => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false)
  const navigate = useNavigate() // Replaces useHistory()

  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-home me-2"></i>Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                <i className="fas fa-images me-2"></i>Pokemon Gallery
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-link nav-link"
                onClick={toggleAdvancedSearch}
              >
                <i className="fas fa-search me-2"></i>
                {showAdvancedSearch
                  ? 'Hide Advanced Search'
                  : 'Show Advanced Search'}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Advanced Search Bar */}
      {showAdvancedSearch && (
        <div className="advanced-search bg-light p-4 mt-2">
          <AdvancedSearch />
        </div>
      )}
    </nav>
  )
}

export default Navbar
