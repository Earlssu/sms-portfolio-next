'use client';

import { useState } from 'react';
import CarouselCard from '@/app/career/components/CarouselCard';
import './CustomCarousel.css';
import './CarouselCard.css';
import carouselItems from '@/app/career/constants/carouselItems';

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselItems.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {carouselItems.map((item, index) => (
          <CarouselCard
            key={index}
            index={index}
            active={activeIndex}
            total={carouselItems.length}
            title={item.title}
            num={item.num}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>

      <div className="carousel-controls">
        <button
          onClick={handlePrevious}
          className="carousel-btn carousel-btn-prev"
        >
          ←
        </button>
        <button onClick={handleNext} className="carousel-btn carousel-btn-next">
          →
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;
