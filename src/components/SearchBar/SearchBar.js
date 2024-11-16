import React, { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';

import './styles.css'; 

const SearchBar = () => {
  const { setSearchTerm, handleSearch, error } = useContext(SearchContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
    handleSearch();
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for images..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default SearchBar;
