import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import './styles.css';


const ImageGallery = () => {
  const { images, isLoading, imagesNotFoundError } = useContext(SearchContext);

  return (
    <div className="gallery">
      {isLoading && <LoadingSpinner />}
      {imagesNotFoundError && <p style={{ color: 'red' }}>{imagesNotFoundError}</p>}
      {!isLoading && images.length > 0 ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="gallery-swiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} watchSlidesProgress={true}>
              <img src={image.urls.small} alt={image.alt_description} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>Use the search above to find images</p>
      )}
    </div>
  );
};

export default ImageGallery;
