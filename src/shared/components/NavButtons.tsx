import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface NavItem {
  key: string;
  url: string;
}

interface NavButtonsProps {
  navItems: NavItem[];
  labels: Record<string, string>;
}

/**
 * NavButtons 컴포넌트
 *
 * navItems(key/url 배열)과 labels를 받아, 각 버튼을 flex row로 균등하게 렌더링하며,
 * 버튼 클릭 시 해당 경로로 라우팅합니다.
 * 예: [ { key: "career", url: "career" }, ... ]
 */
const NavButtons: React.FC<NavButtonsProps> = ({ navItems, labels }) => {
  const router = useRouter();

  return (
    <div className="w-full flex gap-4 py-4">
      {navItems.map((item, idx) => (
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
