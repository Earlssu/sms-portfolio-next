"use client";

import { useState } from "react";
import CarouselCard from "@/app/career/components/CarouselCard";
import "./CustomCarousel.css";
import "./CarouselCard.css";

interface CarouselItem {
  title: string;
  num: string;
  imageSrc: string;
}

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Sample carousel data - you can replace this with your actual career data
  const carouselItems: CarouselItem[] = [
    {
      title: "Frontend Developer",
      num: "01",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop"
    },
    {
      title: "Full Stack Developer", 
      num: "02",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop"
    },
    {
      title: "React Specialist",
      num: "03", 
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=600&fit=crop"
    },
    {
      title: "Next.js Expert",
      num: "04",
      imageSrc: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=600&fit=crop"
    },
    {
      title: "TypeScript Developer",
      num: "05",
      imageSrc: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=600&fit=crop"
    }
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
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
        <button onClick={handlePrevious} className="carousel-btn carousel-btn-prev">
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
