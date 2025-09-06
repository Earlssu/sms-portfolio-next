'use client';

import React, { useState } from 'react';
import CarouselCard from '@/app/career/components/CarouselCard';
import carouselItems from '@/app/career/constants/carouselItems';
import './CustomCarousel.css';

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      {carouselItems.map((item, index) => (
        <CarouselCard
          key={`card_${index}`}
          index={index}
          active={activeIndex}
          total={carouselItems.length}
          title={item.title}
          num={item.num}
          imageSrc={item.imageSrc}
          onClick={() => changeIndex(index)}
        />
      ))}
    </div>
  );
};

export default CustomCarousel;
