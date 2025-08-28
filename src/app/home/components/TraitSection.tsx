// 특성 카드 섹션 컴포넌트
import { getTraitTranslationKey } from '@/app/home/constants/traitData';
import React from 'react';
import TraitCard from '@/app/home/components/TraitCard';

interface TraitSectionProps {
  traitKey: string;
  index: number;
  isExpanded: boolean;
  t: (key: string, options?: any) => string;
}

export const TraitSection: React.FC<TraitSectionProps> = ({
  traitKey,
  index,
  isExpanded,
  t,
}) => {
  const title = t(getTraitTranslationKey(traitKey as any, 'title'));
  const detail = t(getTraitTranslationKey(traitKey as any, 'detail'));
  const skills = t(getTraitTranslationKey(traitKey as any, 'skills'), {
    returnObjects: true,
  }) as unknown as string[];

  const cardClassName = `transition-all duration-1000 ease-out ${
    isExpanded ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
  }`;

  return (
    <section className="h-screen flex items-center justify-center px-10 relative">
      <div className="max-w-screen-xl mx-auto w-full h-screen flex items-center justify-center">
        <TraitCard
          title={title}
          detail={detail}
          skills={skills}
          className={cardClassName}
          isExpanded={isExpanded}
        />
      </div>
    </section>
  );
};
