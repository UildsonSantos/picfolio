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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for images..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setSearchError(null);
          }}
        />
        <button type="submit">Search</button>
        {searchError && <p style={{ color: 'red' }}>{searchError}</p>}
      </form>
    </div>
  );
};

export default SearchBar;
