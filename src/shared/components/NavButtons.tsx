"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { NAV_ITEMS } from "@/shared/const/navButtonUrls";
import { useCommonTranslations } from "@/shared/hooks/useCommonTranslations";

const NavButtons: React.FC = () => {
  const router = useRouter();
  const { career, skills, contact } = useCommonTranslations();
  const labels = { career, skills, contact };
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full flex gap-4 py-4">
        {NAV_ITEMS.map((item, idx) => (
          <button
            key={`btn_placeholder_${idx}`}
            className="hover:bg-red-300 border-2 border-white p-4 flex-1"
            disabled
          >
            <span className="text-center">{item.key}</span>
          </button>
        ))}
      </div>
    );
  }

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
