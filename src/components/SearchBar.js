import React from "react";

function SearchBar({ sortType, onSortChange, filterType, onFilterChange }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={sortType === "Alphabetically"}
          onChange={(e) => onSortChange(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={sortType === "Price"}
          onChange={(e) => onSortChange(e.target.value)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={filterType} onChange={(e) => onFilterChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Finance">Finance</option>
          <option value="Sportswear">Sportswear</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
