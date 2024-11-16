import React, { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';

import './styles.css';

const SearchBar = () => {
  const { setSearchTerm, handleSearch, searchError, setSearchError } = useContext(SearchContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      setSearchError('Please enter a search term.');
    } else {
      setSearchTerm(input);
      handleSearch();
    }
  };

  return (
    <div className='search-bar'>
      <div className="search-container">
        <h1 className="app-title">PicFolio</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <div className="input-container">
            <input
              type="text"
              placeholder="Search for images..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setSearchError(null);
              }}
            />
            {searchError && <p className="error-message">{searchError}</p>}
          </div>
          <button type="submit">Search</button>

        </form>
      </div>

    </div>
  );
};

export default SearchBar;
