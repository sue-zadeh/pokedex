import React from 'react'

interface FilterProps {
  onSortChange: (sortOption: string) => void
}

const Filter: React.FC<FilterProps> = ({ onSortChange }) => {
  return (
    <select
      onChange={(e) => onSortChange(e.target.value)}
      className="form-select"
    >
      <option value="">Sort By</option>
      <option value="name">Name</option>
      <option value="number">Number</option>
      <option value="height">Height</option>
      <option value="weight">Weight</option>
    </select>
  )
}

export default Filter
