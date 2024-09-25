import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdvancedSearch from './AdvancedSearch'

const Navbar: React.FC = () => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false)

  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark fs-5">
      <div className="container">
        {/* Centered content inside the container */}
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Home Link */}
          <Link className="navbar-brand" to="/">
            <i className="fas fa-home me-2"></i>Home
          </Link>
          {/* Toggle button for mobile view */}
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
          {/* Navbar items */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    window.location.pathname === '/gallery'
                      ? 'text-warning'
                      : 'text-primary'
                  }`}
                  to="/gallery"
                >
                  <i className="fas fa-images me-2"></i>Pokemon Gallery
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className={`btn btn-link nav-link ${
                    showAdvancedSearch ? 'text-warning' : 'text-primary'
                  }`}
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
