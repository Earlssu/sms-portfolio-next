"use client";

import TypingText from "@/shared/components/TypingText";
import Button from "@/shared/components/Button";
import { useTranslation } from "react-i18next";
import "@/i18n/i18n";

export default function Home() {
  const { t } = useTranslation();

  const typeText = t("typeText");
  const aboutMe = t("about");
  const career = t("career");
  const skills = t("skills");
  const contact = t("contact");

  return (
    <main className="mx-auto border-2 border-white w-full max-w-screen-xl mt-8 px-12 pt-6 min-h-[90dvh] flex flex-col">
      <div className={"w-full flex flex-col flex-1 min-h-0 justify-between"}>
        <div className={"border-2 border-gray-500 w-full p-4 min-h-40"}>
          <TypingText text={typeText} speed={50} />
        </div>
        <div className={"w-full flex gap-4 py-4"}>
          <Button content={aboutMe} />
          <Button content={career} />
          <Button content={skills} />
          <Button content={contact} />
        </div>
      </div>
    </main>
  );
}
