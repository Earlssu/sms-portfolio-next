"use client";

import React, { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingKey, setTypingKey] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setTypingKey((prev) => prev + 1);
  }, [text]);

  useEffect(() => {
    let index = 0;

    const typeCharacter = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index == 0 ? index : index - 1]);
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
