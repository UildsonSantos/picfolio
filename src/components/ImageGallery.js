import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const ImageGallery = () => {
  const { images, isLoading, error } = useContext(SearchContext);

  return (
    <div className="gallery">
      {isLoading && <p>Loading images...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && images.length > 0 ? (
        <Swiper
          spaceBetween={10}
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
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} watchSlidesProgress={true}>
              <img src={image.urls.small} alt={image.alt_description} style={{ width: '100%', borderRadius: '8px' }} />
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
