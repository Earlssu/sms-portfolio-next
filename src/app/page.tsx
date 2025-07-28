"use client";

import TypingText from "@/shared/components/TypingText";
import "@/i18n/i18n";
import { useCommonTranslations } from "@/shared/hooks/useCommonTranslations";
import NavButtons from "@/shared/components/NavButtons";

export default function Home() {
  const { hero, heroDesc01, heroDesc02, typeText, career, skills, contact } =
    useCommonTranslations();

  return (
    <main className="mx-auto border-2 border-white w-full max-w-screen-xl mt-8 px-10 py-6 min-h-[90dvh] flex flex-col">
      <div className={"w-full flex flex-col flex-1 min-h-0"}>
        <div>
          <h1 className="text-3xl font-bold">{hero}</h1>
          <p className="mt-2 text-xl text-amber-400">
            {heroDesc01} <br />
            {heroDesc02}
          </p>
          <NavButtons buttons={[career, skills, contact]} />
        </div>
        <div className={"border-2 border-gray-500 w-full p-4 min-h-40 flex-1"}>
          <TypingText text={typeText} speed={25} />
        </div>
      </div>
    </main>
  );
}
