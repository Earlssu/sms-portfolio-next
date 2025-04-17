"use client";

import TypingText from "@/shared/components/TypingText";
import Button from "@/shared/components/Button";
import { useTranslation } from "react-i18next";
import "@/i18n/i18n";
import { useRouter } from "next/navigation";

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  const navigateTo = (page: string) => {
    switch (page) {
      case "aboutMe":
        return router.push("/aboutMe");
      case "career":
        return router.push("/career");
      case "skills":
        return router.push("/skills");
      case "contact":
        return router.push("/contact");
    }
  };

  const hero = t("hero");
  const heroDesc01 = t("heroDesc01");
  const heroDesc02 = t("heroDesc02");
  const typeText = t("typeText");
  const aboutMe = t("about");
  const career = t("career");
  const skills = t("skills");
  const contact = t("contact");

  return (
    <main className="mx-auto border-2 border-white w-full max-w-screen-xl mt-8 px-10 py-6 min-h-[90dvh] flex flex-col">
      <div className={"w-full flex flex-col flex-1 min-h-0"}>
        <div>
          <h1 className="text-3xl font-bold">{hero}</h1>
          <p className="mt-2 text-xl text-amber-400">
            {heroDesc01} <br />
            {heroDesc02}
          </p>
          <div className={"w-full flex gap-4 py-4"}>
            <Button content={aboutMe} onClick={() => navigateTo("aboutMe")} />
            <Button content={career} onClick={() => navigateTo("career")} />
            <Button content={skills} onClick={() => navigateTo("skills")} />
            <Button content={contact} onClick={() => navigateTo("contact")} />
          </div>
        </div>
        <div className={"border-2 border-gray-500 w-full p-4 min-h-40 flex-1"}>
          <TypingText text={typeText} speed={25} />
        </div>
      </div>
    </main>
  );
}
