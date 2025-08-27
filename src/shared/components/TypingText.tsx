"use client";

import React, { useEffect, useState, useRef } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number; // 초 단위로 지연 시간 설정
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 100, delay = 0, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const previousTextRef = useRef<string>("");
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const delayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 텍스트 유효성 검증
  const validText = text || "";
  
  // 디버깅용 로그 (개발 중에만)
  if (process.env.NODE_ENV === 'development') {
    console.log('TypingText received:', { text, validText });
  }

  // 텍스트 변경 감지 및 리셋 처리
  useEffect(() => {
    // 유효하지 않은 텍스트인 경우 조기 반환
    if (!validText) {
      setDisplayedText("");
      setIsStarted(false);
      setIsErasing(false);
      return;
    }

    // 텍스트가 변경되었고, 이전에 표시된 텍스트가 있으면 지우기 시작
    if (validText !== previousTextRef.current && displayedText.length > 0) {
      setIsErasing(true);
      setIsStarted(false);
      
      // 기존 타이머들 정리
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
        typingTimerRef.current = null;
      }
      if (delayTimerRef.current) {
        clearTimeout(delayTimerRef.current);
        delayTimerRef.current = null;
      }
    } else if (validText !== previousTextRef.current) {
      // 처음 로드이거나 빈 상태에서 변경된 경우
      setDisplayedText("");
      setIsStarted(false);
      setIsErasing(false);
    }
    
    previousTextRef.current = validText;
  }, [validText, displayedText.length]);

  // 지우기 애니메이션
  useEffect(() => {
    if (!isErasing) return;

    const eraseCharacter = () => {
      setDisplayedText((prev) => {
        const currentText = prev || "";
        if (currentText.length > 0) {
          const newText = currentText.slice(0, -1);
          typingTimerRef.current = setTimeout(eraseCharacter, 30); // 빠르게 지우기
          return newText;
        } else {
          // 지우기 완료
          setIsErasing(false);
          return "";
        }
      });
    };

    typingTimerRef.current = setTimeout(eraseCharacter, 30);

    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    };
  }, [isErasing]);

  // 지우기 완료 후 새 텍스트 타이핑 시작
  useEffect(() => {
    if (isErasing || isStarted || !validText) return;
    if (displayedText.length > 0) return; // 아직 지우는 중

    delayTimerRef.current = setTimeout(() => {
      setIsStarted(true);
    }, delay * 1000);

    return () => {
      if (delayTimerRef.current) {
        clearTimeout(delayTimerRef.current);
        delayTimerRef.current = null;
      }
    };
  }, [validText, delay, isErasing, isStarted, displayedText.length]);

  // 타이핑 애니메이션
  useEffect(() => {
    if (!isStarted || isErasing || !validText) return;

    let index = 0;
    setDisplayedText(""); // 타이핑 시작 전 완전히 초기화

    const typeCharacter = () => {
      if (index < validText.length) {
        const char = validText[index];
        // 문자가 유효한지 확인
        if (char !== undefined && char !== null) {
          setDisplayedText((prev) => (prev || "") + char);
        }
        index++;
        const nextSpeed = speed + Math.random() * (speed * 0.5); // 랜덤한 속도 변화 (50% 범위)
        typingTimerRef.current = setTimeout(typeCharacter, nextSpeed);
      }
    };

    typeCharacter();

    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    };
  }, [isStarted, validText, speed, isErasing]);

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
