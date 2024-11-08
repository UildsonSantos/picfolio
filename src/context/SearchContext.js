import React, { createContext, useState, useEffect } from 'react';

export const SearchContext = createContext();

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
          if (!searchTerm) return;
          try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}`, {
              headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`,
              },
            });
            const data = await response.json();
            setImages(data.results);
          } catch (error) {
            console.error('Error fetching images:', error);
          }
        };
    
        fetchImages();
      }, [searchTerm]);

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm, images, setImages }}>
            {children}
        </SearchContext.Provider>
    );
};
