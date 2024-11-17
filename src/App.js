import React, { lazy, Suspense } from 'react';
import { SearchProvider } from './context/SearchContext';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';

// Lazy loading para ImageGallery
const ImageGallery = lazy(() => import('./components/ImageGallery/ImageGallery'));

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <SearchBar />
        {/* Suspense para exibir fallback durante o carregamento */}
        <Suspense fallback={<div>Loading gallery...</div>}>
          <ImageGallery />
        </Suspense>
      </div>
    </SearchProvider>
  );
}

export default App;
