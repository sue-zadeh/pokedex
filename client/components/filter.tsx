import React from 'react'

interface FilterProps {
  onSortChange: (option: string) => void
}

const Filter: React.FC<FilterProps> = ({ onSortChange }) => {
  return (
    <select
      className="form-control"
      onChange={(e) => onSortChange(e.target.value)}
    >
      <option value="">Sort By</option>
      <option value="name">Name</option>
      <option value="height">Height</option>
      <option value="weight">Weight</option>
    </select>
  )
}

export default Filter
