/**
 * Content Formatting Utilities
 * 텍스트 콘텐츠를 스마트하게 문장별로 분리하고 포맷팅하는 유틸리티
 */

// 기술 스택 및 특수 키워드 예외 패턴들
const TECH_STACK_PATTERNS = [
  'Next.js',
  'Three.js', 
  'React.js',
  'Vue.js',
  'Express.js',
  'Node.js',
  'D3.js',
  'Chart.js',
  'Moment.js',
  'ES6+',
  'ES5+',
  'CSS3',
  'HTML5',
  'React-Three-Fiber',
] as const;

// 숫자 및 측정 단위 패턴들
const METRIC_PATTERNS = [
  '1.2초',
  '50%',
  '40개',
  '100건',
  'v1.0',
  'v2.0',
  'v3.0',
] as const;

// 모든 예외 패턴들을 합친 배열
const EXCEPTION_PATTERNS = [
  ...TECH_STACK_PATTERNS,
  ...METRIC_PATTERNS,
] as const;

/**
 * 날짜 패턴을 감지하는 정규식들
 */
const DATE_PATTERNS = {
  // YYYY.MM.DD 형식
  fullDate: /\d{4}\.\d{2}\.\d{2}/g,
  // YYYY.MM 형식  
  yearMonth: /\d{4}\.\d{2}/g,
  // YYYY.MM~DD 형식
  dateRange: /\d{4}\.\d{2}~\d{2}/g,
  // YYYY.MM ~ YYYY.MM 형식
  yearRange: /\d{4}\.\d{2}\s*~\s*\d{4}\.\d{2}/g,
} as const;

/**
 * 텍스트에서 날짜 패턴을 찾아 플레이스홀더로 치환하는 함수
 */
const protectDatePatterns = (content: string): { 
  content: string; 
  placeholders: { [key: string]: string } 
} => {
  let processedContent = content;
  const placeholders: { [key: string]: string } = {};
  let placeholderIndex = 1000; // 기술 스택과 구분하기 위해 큰 수부터 시작

  Object.entries(DATE_PATTERNS).forEach(([patternName, regex]) => {
    const matches = processedContent.match(regex);
    if (matches) {
      matches.forEach((match) => {
        const placeholder = `__DATE_PLACEHOLDER_${placeholderIndex}__`;
        placeholders[placeholder] = match;
        processedContent = processedContent.replace(match, placeholder);
        placeholderIndex++;
      });
    }
  });

  return { content: processedContent, placeholders };
};

/**
 * 고정 예외 패턴들을 플레이스홀더로 치환하는 함수
 */
const protectExceptionPatterns = (content: string): { 
  content: string; 
  placeholders: { [key: string]: string } 
} => {
  let processedContent = content;
  const placeholders: { [key: string]: string } = {};
  
  EXCEPTION_PATTERNS.forEach((pattern, index) => {
    const placeholder = `__EXCEPTION_PLACEHOLDER_${index}__`;
    if (processedContent.includes(pattern)) {
      placeholders[placeholder] = pattern;
      // 정규식 특수문자 이스케이프 처리
      const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      processedContent = processedContent.replace(
        new RegExp(escapedPattern, 'g'), 
        placeholder
      );
    }
  });

  return { content: processedContent, placeholders };
};

/**
 * 플레이스홀더를 원래 값으로 복원하는 함수
 */
const restorePlaceholders = (
  content: string, 
  placeholders: { [key: string]: string }
): string => {
  let restored = content;
  Object.entries(placeholders).forEach(([placeholder, original]) => {
    restored = restored.replace(new RegExp(placeholder, 'g'), original);
  });
  return restored.trim();
};

/**
 * 너무 짧은 문장들을 병합하는 함수
 */
const mergeShorSentences = (sentences: string[], minLength: number = 20): string[] => {
  const mergedSentences: string[] = [];
  let currentSentence = '';

  sentences.forEach((sentence, index) => {
    if (currentSentence.length === 0) {
      currentSentence = sentence;
    } else if (currentSentence.length < minLength || sentence.length < minLength) {
      currentSentence += ' ' + sentence;
    } else {
      mergedSentences.push(currentSentence);
      currentSentence = sentence;
    }

    // 마지막 문장 처리
    if (index === sentences.length - 1 && currentSentence.length > 0) {
      mergedSentences.push(currentSentence);
    }
  });

  return mergedSentences;
};

/**
 * content를 스마트하게 문장별로 분리하는 메인 함수
 * 기술 스택명, 날짜, 특수 패턴 등의 예외를 고려하여 처리
 * 
 * @param content - 분리할 텍스트 콘텐츠
 * @param options - 포맷팅 옵션
 * @returns 분리된 문장들의 배열
 */
export const formatContent = (
  content: string,
  options: {
    minSentenceLength?: number;
    preserveBulletPoints?: boolean;
    preserveLineBreaks?: boolean;
  } = {}
): string[] => {
  const {
    minSentenceLength = 20,
    preserveBulletPoints = true,
    preserveLineBreaks = true,
  } = options;

  // 이미 bullet point가 있는 경우 그대로 반환 (옵션에 따라)
  if (preserveBulletPoints && content.includes('•')) {
    return [content];
  }

  // 이미 여러 줄바꿈(\n\n)이 있는 경우, 단락별로 분리하여 반환
  if (preserveLineBreaks && content.includes('\n\n')) {
    return content
      .split(/\n\n+/)
      .map(paragraph => paragraph.trim())
      .filter(paragraph => paragraph.length > 0);
  }

  // 단일 줄바꿈만 있는 경우 그대로 반환
  if (preserveLineBreaks && content.includes('\n')) {
    return [content];
  }

  // 1. 날짜 패턴 보호
  const { content: dateProtected, placeholders: datePlaceholders } = 
    protectDatePatterns(content);

  // 2. 예외 패턴 보호
  const { content: exceptionProtected, placeholders: exceptionPlaceholders } = 
    protectExceptionPatterns(dateProtected);

  // 3. 문장 분리 (.으로 끝나고 공백이 있는 경우)
  const sentences = exceptionProtected
    .split(/\.\s+/)
    .filter(sentence => sentence.trim().length > 0)
    .map((sentence, index, array) => {
      // 마지막 문장이 아니고 .으로 끝나지 않으면 . 추가
      if (index < array.length - 1 && !sentence.endsWith('.')) {
        return sentence + '.';
      }
      return sentence;
    });

  // 4. 모든 플레이스홀더 복원
  const allPlaceholders = { ...datePlaceholders, ...exceptionPlaceholders };
  const restoredSentences = sentences.map(sentence => 
    restorePlaceholders(sentence, allPlaceholders)
  );

  // 5. 짧은 문장들 병합
  const mergedSentences = mergeShorSentences(restoredSentences, minSentenceLength);

  // 6. 결과 반환 (분리된 문장이 1개 이하면 원본 반환)
  return mergedSentences.length > 1 ? mergedSentences : [content];
};

/**
 * 디버깅용 함수: 어떤 패턴들이 감지되었는지 확인
 */
export const analyzeContentPatterns = (content: string) => {
  const dateMatches = Object.entries(DATE_PATTERNS).reduce((acc, [name, pattern]) => {
    const matches = content.match(pattern);
    if (matches) {
      acc[name] = matches;
    }
    return acc;
  }, {} as Record<string, string[]>);

  const exceptionMatches = EXCEPTION_PATTERNS.filter(pattern => 
    content.includes(pattern)
  );

  return {
    dateMatches,
    exceptionMatches,
    hasLineBreaks: content.includes('\n'),
    hasBulletPoints: content.includes('•'),
  };
};

/**
 * 패턴 정보를 외부에서 확인할 수 있도록 export
 */
export const contentFormatterInfo = {
  techStackPatterns: TECH_STACK_PATTERNS,
  metricPatterns: METRIC_PATTERNS,
  exceptionPatterns: EXCEPTION_PATTERNS,
  datePatternNames: Object.keys(DATE_PATTERNS),
} as const;
