'use client';

import TypingText from '@/shared/components/TypingText';
import { useCommonTranslations } from '@/shared/hooks/useCommonTranslations';
import 'animate.css';

export default function Home() {
  const { hero, heroDesc01, heroDesc02, typeText } = useCommonTranslations();

  return (
    <div className="mx-auto border-2 border-white w-full max-w-screen-xl mt-8 px-10 py-6 min-h-[90dvh] flex flex-col gap-4">
      <div className={'flex flex-col gap-2'}>
        <h1 className="text-7xl font-bold">
          <TypingText text={hero} speed={50} />
        </h1>
        <p className="text-xl text-amber-400 animate__animated animate__flipInX animate__delay-2s">
          {heroDesc01} <br />
          {heroDesc02}
        </p>
      </div>
      <div className="border-2 border-gray-500 w-full p-4 min-h-40 flex-1">
        {/*<TypingText text={typeText} speed={25} />*/}
      </div>
    </div>
  );
}
