'use client';

import { useState } from 'react';
import CarouselCard from '@/app/career/components/CarouselCard';
import './CustomCarousel.css';
import './CarouselCard.css';
import carouselItems from '@/app/career/constants/carouselItems';

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        />
      ))}
    </div>
  );
};

export default CustomCarousel;
