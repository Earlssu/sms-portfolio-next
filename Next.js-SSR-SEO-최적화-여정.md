# Next.js에서 SEO 최적화하기: "use client"의 함정에서 벗어나는 여정

## 🤔 문제의 시작: Next.js를 쓰는데 왜 SEO가 안 될까?

포트폴리오 사이트를 Next.js로 만들면서 겪은 SEO 최적화 과정을 정리해보았습니다. 처음에는 단순히 Next.js를 사용하면 자동으로 SEO가 최적화될 것이라고 생각했지만, 현실은 달랐습니다.

### 초기 문제 상황

```tsx
// ❌ 문제가 있던 초기 page.tsx
'use client';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero')}</h1>
      <p>{t('description')}</p>
      {/* 모든 콘텐츠가 클라이언트에서만 렌더링 */}
    </div>
  );
}
```

**문제점:**
- 페이지 전체가 `'use client'`로 클라이언트 컴포넌트화
- 검색엔진이 빈 HTML만 받아감
- **Next.js의 SSR 장점을 전혀 활용하지 못함**

## 🎯 해결 과정: SSR과 CSR의 균형 찾기

### 1단계: 서버 컴포넌트와 클라이언트 컴포넌트 분리

```tsx
// ✅ 개선된 page.tsx (서버 컴포넌트)
export default function Home({ searchParams }) {
  const lang = detectLanguage(searchParams);
  
  return (
    <Fragment>
      {/* 서버에서 렌더링되는 SEO 콘텐츠 */}
      <I18nStaticContent lang={lang} />
      
      {/* 클라이언트에서만 필요한 인터랙티브 요소들 */}
      <ClientAnimations />
    </Fragment>
  );
}
```

**핵심 아이디어:**
- **SEO 필수 콘텐츠**: 서버 컴포넌트로 렌더링
- **인터랙티브 요소**: 클라이언트 컴포넌트로 분리

### 2단계: 다국어 지원과 메타데이터 최적화

**메타데이터가 SEO에 중요한 이유:**
- 검색 결과에서 표시되는 제목과 설명
- 소셜 미디어 공유 시 미리보기 정보 (Open Graph)
- 검색엔진의 페이지 이해도 향상

```tsx
// 동적 메타데이터 생성
export const generateMetadata = createGenerateMetadata(generateHomeMetadata);

// 언어별 정적 콘텐츠
export const I18nStaticContent = ({ lang }) => {
  const t = getTranslationData(lang); // 서버에서 직접 JSON 접근
  
  return (
    <div className="sr-only"> {/* SEO용 숨겨진 콘텐츠 */}
      <h1>{t.hero}</h1>
      <p>{t.description}</p>
      {/* 검색엔진이 인덱싱할 모든 콘텐츠 */}
    </div>
  );
};
```

## 🤨 중간에 생긴 의문점들과 해결

### Q1: "i18n 기능을 서버에서 어떻게 구현하지?"

**의문의 원인:** 
- `useTranslation` 훅은 React Context와 상태 관리에 의존
- React 훅은 클라이언트에서만 동작 (브라우저 환경 필요)
- 서버 컴포넌트에서는 훅 사용 불가능

**고민:** 기존 `useTranslation` 훅은 클라이언트 전용인데, 서버에서는 어떻게 번역 데이터에 접근할까?

**해결:** 
```tsx
// shared/utils/translationUtils.ts
import koTranslations from '@/locales/ko/translation.json';
import enTranslations from '@/locales/en/translation.json';

export function getTranslationData(lang: SupportedLanguage) {
  return translations[lang] || translations.ko;
}
```

**결과:** 서버와 클라이언트에서 동일한 번역 데이터를 다른 방식으로 접근

### Q2: "기존 컴포넌트들을 재사용할 수 없나?"

**의문의 원인:**
- 기존 컴포넌트는 `useTranslation` 훅에 의존
- SEO용 정적 콘텐츠(`I18nStaticContent`)에 이미 중복 내용 존재
- 서버/클라이언트 각각 다시 구현해야 하는지 의문

**고민:** `ThankYouSection.tsx`가 이미 있는데, 새로 만들어야 하나?

**해결:** 모드 기반 유니버설 컴포넌트
```tsx
// 서버/클라이언트 모두 지원하는 컴포넌트
export const ThankYouSection = (props) => {
  if (props.mode === 'server') {
    const homeData = getHomeData(props.lang); // 서버용
    return <section>{homeData.thankYou}</section>;
  } else {
    return <section>{props.t('home.thankYou')}</section>; // 클라이언트용
  }
};
```

### Q3: "Suspense가 SSR에 영향을 주나?"

**의문의 원인:**
- `Suspense`가 로딩 상태를 보여주는데, 이게 서버 렌더링을 방해하는 건 아닌지 우려
- 검색엔진이 "Loading..." 화면만 보게 되는 것은 아닌지 의문

**고민:** `Suspense`를 사용하면 SEO에 문제가 있을까?

**답변:** 
- SEO 콘텐츠가 `I18nStaticContent`로 이미 서버에서 렌더링됨
- `Suspense`는 클라이언트 인터랙션 부분만 영향 (검색엔진은 서버 HTML만 봄)
- 하지만 현재 구조에서는 실제 비동기 로딩이 없어 `Suspense` 자체가 불필요

**Suspense가 언제 필요한가:**
- 실제 코드 스플리팅 (`lazy()`) 사용 시
- 데이터 페칭이 필요한 컴포넌트
- 단순 클라이언트 컴포넌트라면 오히려 제거하는 것이 더 간단

### Q4: "utils 함수들의 적절한 위치는?"

**의문의 원인:**
- SEO 최적화를 위해 만든 유틸리티들이 home 페이지 전용으로 작성됨
- 다른 페이지(skills, career 등)에서도 동일한 패턴 필요
- 코드 중복을 피하고 일관성 있는 구조 필요

**고민:** `home/utils`에 있는 함수들을 다른 페이지에서도 쓸 수 있지 않을까?

**해결:** `shared/utils`로 이동하여 전역 재사용
```
src/shared/utils/
├── languageUtils.ts     # 언어 감지
├── translationUtils.ts  # 번역 데이터 접근  
└── metadataUtils.ts     # 메타데이터 생성
```

**결과:** 새 페이지 추가 시 3줄이면 다국어 SEO 완성
```tsx
// 어떤 페이지든 동일한 패턴
export const generateMetadata = createGenerateMetadata(generatePageMetadata);
```

## 🚀 최종 결과: 완벽한 SEO + UX

### 렌더링 흐름

```
1️⃣ 서버 렌더링 (SEO)
├── StructuredData (JSON-LD)
├── I18nStaticContent (sr-only)
└── generateMetadata (다국어 메타데이터)

2️⃣ 클라이언트 렌더링 (UX)  
├── TypingText 애니메이션
├── 스크롤 이벤트
└── 언어 변경 인터랙션
```

### 주요 성과

**✅ SEO 최적화**
- 검색엔진이 완전한 HTML 콘텐츠 받음
- 다국어 메타데이터 지원 (`/home?lang=en`)
- JSON-LD 구조화 데이터로 Rich Snippets 지원

**✅ 사용자 경험**
- 타이핑 애니메이션, 스크롤 효과 등 유지
- 즉시 언어 변경 가능
- 빠른 초기 로딩 (정적 콘텐츠 우선)

**✅ 개발 경험**
- 모듈화된 유틸리티로 코드 재사용
- 타입 안전성 보장
- 새 페이지 추가 시 3줄이면 다국어 SEO 완성

## 💡 핵심 교훈

1. **Next.js = SSR이 아니다** 
   - `'use client'` 사용 시 CSR로 동작
   - 의도적인 서버/클라이언트 분리 필요

2. **SEO vs UX는 대립하지 않는다**
   - `sr-only` 콘텐츠로 SEO 보장
   - 클라이언트 컴포넌트로 UX 향상

3. **모듈화의 힘**
   - 재사용 가능한 유틸리티 구축
   - 새 기능 추가 시 확장성 확보

4. **의문점을 두려워하지 말자**
   - 작은 질문들이 더 나은 구조로 이어짐
   - 기술의 본질을 이해하는 계기

---

*이 과정을 통해 Next.js의 진정한 가치는 단순히 "React + SSR"이 아니라, 서버와 클라이언트의 역할을 명확히 분리하여 각각의 장점을 극대화하는 것임을 깨달았습니다.*
