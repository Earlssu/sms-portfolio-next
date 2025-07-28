import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface NavButtonsProps {
  buttons: string[];
}

const NavButtons: React.FC<NavButtonsProps> = ({ buttons }) => {
  const router = useRouter();

  return (
    <div className="w-full flex gap-4 py-4">
      {buttons.map((btn, idx) => (
        <Button
          key={`btn_${idx}`}
          content={btn}
          onClick={() => router.push(`/${btn}`)}
        />
      ))}
    </div>
  );
};

export default NavButtons;
