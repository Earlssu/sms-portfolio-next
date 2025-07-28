"use client";

import TypingText from "@/shared/components/TypingText";
import { useCommonTranslations } from "@/shared/hooks/useCommonTranslations";
import { Fragment } from "react";

export default function Home() {
  const { hero, heroDesc01, heroDesc02, typeText } = useCommonTranslations();

  return (
    <Fragment>
      <div>
        <h1 className="text-3xl font-bold">{hero}</h1>
        <p className="mt-2 text-xl text-amber-400">
          {heroDesc01} <br />
          {heroDesc02}
        </p>
      </div>
      <div className="border-2 border-gray-500 w-full p-4 min-h-40 flex-1">
        <TypingText text={typeText} speed={25} />
      </div>
    </Fragment>
  );
}
