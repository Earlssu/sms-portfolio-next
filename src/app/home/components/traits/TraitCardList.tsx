import React, { Fragment } from 'react';
import { TRAIT_KEYS } from '@/app/home/types';
import { TraitSection } from './TraitSection';

interface TraitCardListProps {
  expandedCard: number | null;
}

/**
 * TraitCard 컴포넌트 리스트 (섹션)
 * @param expandedCard 현재 스크롤 기준 확장된 카드
 * @constructor
 */
export const TraitCardList: React.FC<TraitCardListProps> = ({
  expandedCard,
}) => {
  return (
    <Fragment>
      {TRAIT_KEYS.map((traitKey, index) => (
        <TraitSection
          key={traitKey}
          traitKey={traitKey}
          index={index}
          isExpanded={expandedCard === index}
        />
      ))}
    </Fragment>
  );
};
