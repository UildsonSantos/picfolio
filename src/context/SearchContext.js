import React, { createContext, useState, useEffect } from 'react';

export const SearchContext = createContext();

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
          if (!isSearching) return;

          if (!searchTerm.trim()) {
            setError('Please enter a search term.');
            return;
          }
      
          setIsLoading(true);
          setError(null);
          try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}`, {
              headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`,
              },
            });
            const data = await response.json();
            setImages(data.results);
            if (data.results.length === 0) {
              setError('No results found.');
            }
          } catch (error) {
            setError('Error fetching images. Please try again later.');
          }finally {
            setIsLoading(false); 
          }
        };
    
        fetchImages();
      }, [searchTerm]);

      const handleSearch = () => {
        setIsSearching(true);
      };

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm, images, setImages, isLoading, error, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
};
