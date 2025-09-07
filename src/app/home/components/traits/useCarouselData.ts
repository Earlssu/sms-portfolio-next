'use client';

import { useTranslation } from 'react-i18next';

export interface CarouselSlideData {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  highlight?: string;
  closing?: string;
  features?: Array<{ title: string; content: string }>;
  activities?: Array<{
    icon: string;
    title: string;
    period: string;
    description: string;
  }>;
  experiences?: Array<{
    company: string;
    position: string;
    period: string;
    description: string;
    achievements: string[];
  }>;
  contact?: {
    email: string;
    github: string;
    blog: string;
    resume: string;
  };
}

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
