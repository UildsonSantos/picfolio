import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';

const SearchBar = () => {
  const { setSearchTerm } = useContext(SearchContext);
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setSearchTerm(input);  // Atualiza o termo de busca no contexto
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for images..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
