"use client";

import React, { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typeCharacter = () => {
      if (index < text.length - 1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        const nextSpeed = speed + Math.random() * speed; // 랜덤한 속도 변화
        setTimeout(typeCharacter, nextSpeed);
      }
    };

    typeCharacter();

    return () => {
      // Clean-up 함수로 모든 타임아웃을 제거합니다.
      index = text.length;
    };
  }, [text, speed]);

  return <p>{displayedText}</p>;
};

export default TypingText;
