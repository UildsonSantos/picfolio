import React from 'react';
import { SearchProvider } from './context/SearchContext';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';

import './App.css';

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <SearchBar />
        <ImageGallery />
      </div>
    </SearchProvider>
  );
}

export default App;
