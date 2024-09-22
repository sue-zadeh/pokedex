import React from 'react'

interface SearchProps {
  onSearch: (searchTerm: string) => void
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokemon..."
      onChange={(e) => onSearch(e.target.value)}
      className="form-control"
    />
  )
}

export default Search
