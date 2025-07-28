"use client";

import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { NAV_ITEMS } from "@/shared/const/navButtonUrls";
import { useCommonTranslations } from "@/shared/hooks/useCommonTranslations";

const NavButtons: React.FC = () => {
  const router = useRouter();
  const { career, skills, contact } = useCommonTranslations();
  const labels = { career, skills, contact };

  return (
    <div className="w-full flex gap-4 py-4">
      {NAV_ITEMS.map((item, idx) => (
        <Button
          key={`btn_${idx}`}
          content={labels[item.key as keyof typeof labels]}
          onClick={() => router.push(`/${item.url}`)}
        />
      ))}
    </div>
  );
};

export default NavButtons;
