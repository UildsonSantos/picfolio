import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, images, setImages }}>
      {children}
    </SearchContext.Provider>
  );
};
