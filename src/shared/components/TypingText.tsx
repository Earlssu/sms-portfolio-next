"use client";

import React, { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number; // 초 단위로 지연 시간 설정
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 100, delay = 0, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsStarted(false);
  }, [text]);

  useEffect(() => {
    // delay가 0이면 즉시 시작, 아니면 지연 후 시작
    const delayTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay * 1000); // 초를 밀리초로 변환

    return () => {
      clearTimeout(delayTimer);
    };
  }, [text, delay]);

  useEffect(() => {
    if (!isStarted) return;

    let index = 0;
    let typingTimer: NodeJS.Timeout;

    const typeCharacter = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index == 0 ? index : index - 1]);
        index++;
        const nextSpeed = speed + Math.random() * speed; // 랜덤한 속도 변화
        typingTimer = setTimeout(typeCharacter, nextSpeed);
      }
    };

    typeCharacter();

    return () => {
      if (typingTimer) {
        clearTimeout(typingTimer);
      }
      index = text.length; // 컴포넌트 언마운트 시 타이핑 중지
    };
  }, [isStarted, text, speed]);

  return (
    <p className={className}>
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
