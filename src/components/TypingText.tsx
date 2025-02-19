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
      index = text.length; // 컴포넌트 언마운트 시 타이핑 중지
    };
  }, [text, speed]);

  return (
    <p>
      {displayedText.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
};

export default TypingText;
