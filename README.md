# 🚀 SEO 최적화된 다국어 포트폴리오 웹사이트

> 개발자 개인의 경력, 기술 스택, 프로젝트 경험을 효과적으로 보여주는 프로페셔널 포트폴리오 사이트

## 📋 프로젝트 개요

이 프로젝트는 **SEO 최적화**와 **다국어 지원**에 중점을 둔 개인 포트폴리오 웹사이트입니다. Next.js 14 App Router와 TypeScript를 기반으로 하여 현대적인 웹 개발의 베스트 프랙티스를 구현했습니다.

### ✨ 주요 특징

- 🔍 **SEO 최적화**: SSR + 구조화 데이터 (JSON-LD)
- 🌍 **다국어 지원**: 한국어/영어 (react-i18next)
- 📱 **반응형 디자인**: TailwindCSS 기반
- ⚡ **성능 최적화**: Next.js 14 App Router + TypeScript
- 🎨 **모던 UI/UX**: 타이핑 애니메이션, 스크롤 효과
- 📊 **구조화 데이터**: 검색엔진 최적화를 위한 JSON-LD

## 🛠️ 기술 스택

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Library**: React 18
- **Styling**: TailwindCSS + CSS Modules
- **Animation**: CSS3 + animate.css

### 다국어 지원
- **i18n**: react-i18next + i18next
- **Languages**: 한국어, 영어

### 개발 도구
- **Package Manager**: Bun
- **Linting**: ESLint
- **Formatting**: Prettier
- **Build**: Next.js built-in

## 🏛️ 시스템 아키텍처

### 아키텍처 패턴
이 프로젝트는 **Feature-Sliced Design (FSD)** + **Component Based Development (CBD)**의 하이브리드 패턴을 사용합니다.

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 글로벌 레이아웃
│   ├── page.tsx           # 루트 리디렉션
│   ├── home/              # 홈 Feature
│   │   ├── components/    # Feature별 컴포넌트
│   │   ├── constants/     # Feature별 상수
│   │   ├── hooks/         # Feature별 훅
│   │   └── metadata.ts    # SEO 메타데이터
│   ├── career/            # 경력 Feature
│   ├── skills/            # 기술스택 Feature
│   └── contact/           # 연락처 Feature
├── shared/                # 공유 리소스
│   ├── components/        # 재사용 가능한 컴포넌트
│   ├── hooks/             # 공통 훅
│   ├── utils/             # 유틸리티 함수
│   └── const/             # 공통 상수
├── i18n/                  # 다국어 설정
└── locales/               # 번역 데이터
    ├── en/
    └── ko/
```

### 컴포넌트 계층 구조 (Atomic Design 요소)
- **Atoms**: Button, TypingText
- **Molecules**: LanguageToggle, NavButtons
- **Organisms**: CommonHeader, TraitSection
- **Templates**: Layout 컴포넌트들
- **Pages**: Feature 페이지들

## 🚀 시작하기

### 개발 서버 실행

```bash
# 의존성 설치
bun install

# 개발 서버 시작
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드 및 배포

```bash
# 프로덕션 빌드
bun run build

# 프로덕션 서버 시작
bun start
```

## 📁 주요 디렉토리 설명

### `/src/app/` - App Router 구조
- **Feature 기반 구조**: 각 페이지가 독립적인 기능 단위
- **자체 완결성**: 각 feature는 자체 components, constants, hooks 보유
- **메타데이터 관리**: 페이지별 SEO 최적화

### `/src/shared/` - 공유 리소스
- **components/**: 재사용 가능한 UI 컴포넌트
- **utils/**: 메타데이터, 언어, 번역 유틸리티
- **hooks/**: 공통 React 훅

### `/src/locales/` - 다국어 데이터
- **구조화된 번역**: JSON 기반 번역 데이터
- **타입 안전성**: TypeScript 지원

## 🔧 주요 기능

### 1. SEO 최적화
- **SSR + CSR 하이브리드**: 검색엔진을 위한 서버 렌더링 + 사용자 경험을 위한 클라이언트 렌더링
- **구조화 데이터**: JSON-LD를 통한 Rich Snippets 지원
- **동적 메타데이터**: 다국어 지원 메타데이터 자동 생성

### 2. 다국어 지원
- **실시간 언어 변경**: 페이지 새로고침 없이 언어 전환
- **URL 파라미터**: `?lang=en` 형태로 언어 설정
- **SEO 친화적**: 언어별 alternate 태그 자동 생성

### 3. 성능 최적화
- **코드 분할**: Next.js의 자동 코드 분할
- **이미지 최적화**: Next.js Image 컴포넌트
- **폰트 최적화**: Google Fonts 자동 최적화

## 📊 아키텍처의 장점

### 확장성 (Scalability)
```
새로운 페이지 추가 과정:
1. src/app/새페이지/ 폴더 생성
2. metadata.ts로 SEO 자동 설정
3. shared 컴포넌트 재사용
```

### 유지보수성 (Maintainability)
- Feature별 격리로 Side Effect 최소화
- Shared 리소스로 중복 코드 제거
- TypeScript로 타입 안전성 보장

### 개발자 경험 (DX)
- 모듈화된 유틸리티 함수들
- 일관된 폴더 구조
- Hot Reload 지원

## 📚 참고 자료

- [Next.js SSR SEO 최적화 과정](./Next.js-SSR-SEO-최적화-여정.md) - 프로젝트 개발 과정에서 겪은 SEO 최적화 여정
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [react-i18next Documentation](https://react.i18next.com/)

## 🚀 배포

이 프로젝트는 [Vercel Platform](https://vercel.com/)에서 쉽게 배포할 수 있습니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/deployment)를 참조하세요.
