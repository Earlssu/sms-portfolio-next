'use client';

import { useTranslation } from 'react-i18next';
import { CarouselSlideData } from '@/app/home/types';

export const useCarouselData = () => {
  const { t } = useTranslation();

  const slides = t('traits.aboutMe.carouselSlides', {
    returnObjects: true,
  }) as CarouselSlideData[];

  const totalSlides = slides?.length || 0;

  return {
    slides,
    totalSlides,
  };
};
