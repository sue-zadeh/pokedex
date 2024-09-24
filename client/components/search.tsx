import React from 'react'

interface SearchProps {
  onSearch: (term: string) => void
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search Pokémon..."
      onChange={(e) => onSearch(e.target.value)}
    />
  )
}

export default Search
