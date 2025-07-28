import React from "react";
import Button from "./Button";
import {useRouter} from "next/navigation";

/**
 * NavButtons 컴포넌트의 props
 * @property buttons - 버튼에 표시할 문자열 배열 (각 문자열이 라우팅 경로가 됨)
 */
interface NavButtonsProps {
  buttons: string[];
}

/**
 * NavButtons 컴포넌트
 *
 * 버튼 문자열 배열을 받아, 각 버튼을 flex row로 균등하게 렌더링하며,
 * 버튼 클릭 시 해당 경로로 라우팅합니다.
 * 예: ["career", "skills", "contact"]
 */
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
