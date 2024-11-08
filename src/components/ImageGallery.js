import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../context/SearchContext';

const ImageGallery = () => {
  const { images } = useContext(SearchContext);

// Log to check the content of images
  useEffect(() => {
    console.log('Fetched images:', images);
  }, [images]);

  return (
    <div>
      {images.length > 0 ? (
        images.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.alt_description} />
        ))
      ) : (
        <p>No images to display</p>
      )}
    </div>
  );
};

export default ImageGallery;
