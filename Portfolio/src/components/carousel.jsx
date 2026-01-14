// Carousel.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ReviewsCarousel = () => {
  useEffect(() => {
    // Prevent loading the script multiple times
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="reviews-section">
      <div
        className="elfsight-app-13605dac-0938-4094-a024-382a8b5ecbbf"
        data-elfsight-app-lazy
      />
    </section>
  );
};

export default ReviewsCarousel;

