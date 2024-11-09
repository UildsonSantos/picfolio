import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../context/SearchContext';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const ImageGallery = () => {
  const { images } = useContext(SearchContext);

  // Log to check the content of images
  useEffect(() => {
    console.log('Fetched images:', images);
  }, [images]);

  return (
    <div className="gallery">
      {images.length > 0 ? (
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
        <p>No images to display</p>
      )}
    </div>
  );
};

export default ImageGallery;
