'use client';

import TypingText from '@/shared/components/TypingText';
import { useCommonTranslations } from '@/shared/hooks/useCommonTranslations';
import 'animate.css';
import TraitCard from '@/app/home/components/TraitCard';

export default function Home() {
  const { hero, heroDesc01, heroDesc02, typeText } = useCommonTranslations();

  return (
    <div className="mx-auto w-full max-w-screen-xl mt-8 px-10 py-6 min-h-[90dvh] flex flex-col gap-4">
      <div className={'flex flex-col gap-4'}>
        <h1 className="text-7xl font-bold">
          <TypingText text={hero} speed={50} />
        </h1>
        <TypingText
          text={heroDesc01 + '\n' + heroDesc02}
          delay={1.5}
          speed={30}
          className="text-xl text-amber-400 leading-10"
        />
      </div>
      <div className="border-2 border-gray-500 w-full p-4 min-h-40 flex-1 flex flex-col gap-4">
        <TraitCard title={'유학생'} className={'animate__delay-5s'} />

        <TraitCard
          title={'협업이 가장 편했던 개발자'}
          className={'animate__delay-6s'}
        />

        <TraitCard
          title={'힘들 때 웃어야 일류다'}
          className={'animate__delay-7s'}
        />

        <TraitCard title={'Fast Learner'} className={'animate__delay-8s'} />
      </div>
    </div>
  );
}
