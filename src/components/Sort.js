import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SortButton({ sortBy, onSortByChange }) {
  const handleSortByChange = (event) => {
    onSortByChange(event.target.value);
  };

  return (
    <div className='container'>
      <div className='ButtnCon'>
        <div className="sort-container-wrapper">
          <div className="sort-container">
            <label htmlFor="sort-by"></label>
            <select id="sort-by" value={sortBy} onChange={handleSortByChange}>
              <option value="popularity">Popularity</option>
              <option value="original_title">Title</option>
            </select>
          </div>
        </div>
        <div className="add-movie">
          <Link to="/newMovie" className="add-movie-button">Add Movie</Link>
        </div>
      </div>
    </div>
  );
}

export default SortButton;
