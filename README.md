# 🚀 SEO 최적화된 다국어 포트폴리오 웹사이트

> 프론트엔드 개발자 심민섭의 경력, 기술 스택, 프로젝트 경험을 효과적으로 보여주는 프로페셔널 포트폴리오 사이트

## 📋 프로젝트 개요

이 프로젝트는 **SEO 최적화**와 **다국어 지원**에 중점을 둔 개인 포트폴리오 웹사이트입니다. Next.js 14 App Router와 TypeScript를 기반으로 하여 현대적인 웹 개발의 베스트 프랙티스를 구현했습니다.

### ✨ 주요 특징

- 🔍 **완전한 SEO 최적화**: SSR + 구조화 데이터 (JSON-LD) + 정적 콘텐츠
- 🌍 **다국어 지원**: 한국어/영어 (react-i18next)
- 📱 **반응형 디자인**: TailwindCSS 기반 모던 UI
- ⚡ **성능 최적화**: Next.js 14 App Router + 코드 분할
- 🎨 **인터랙티브 UI/UX**: 글래스모피즘, 별빛 효과, 부드러운 애니메이션
- 📧 **실시간 연락 기능**: EmailJS 통합 연락 폼
- 🎯 **사용자 경험**: 직관적인 네비게이션과 상세 페이지 연결

## 🛠️ 기술 스택

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Library**: React 18
- **Styling**: TailwindCSS + CSS Modules
- **Animation**: CSS3 + animate.css
- **State Management**: Zustand

### 다국어 & 통신
- **i18n**: react-i18next + i18next
- **Languages**: 한국어, 영어
- **Email Service**: EmailJS
- **Routing**: Next.js App Router

### 개발 도구
- **Package Manager**: Bun
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Build**: Next.js built-in
- **Deployment**: Vercel

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

### 1. 완전한 SEO 최적화
- **SSR + 정적 콘텐츠**: 검색엔진을 위한 서버 렌더링 + 숨겨진 정적 콘텐츠
- **구조화 데이터 (JSON-LD)**: 모든 페이지에 적용된 Rich Snippets 지원
- **동적 메타데이터**: 다국어 지원 메타데이터 자동 생성
- **페이지별 최적화**: Home, Career, Skills, Contact 각각 특화된 SEO

### 2. 인터랙티브 UI/UX
- **글래스모피즘 디자인**: 반투명 효과와 백드롭 블러
- **별빛 배경 효과**: 동적 애니메이션 배경
- **부드러운 전환**: 페이지 간 자연스러운 애니메이션
- **모달 인터랙션**: 프로젝트 상세 정보 모달

### 3. 다국어 지원
- **실시간 언어 변경**: 페이지 새로고침 없이 언어 전환
- **URL 파라미터**: `?lang=en` 형태로 언어 설정
- **완전한 번역**: UI 요소부터 콘텐츠까지 모든 텍스트 지원

### 4. 실시간 연락 기능
- **EmailJS 통합**: 서버 없이 실시간 이메일 전송
- **폼 유효성 검사**: 클라이언트 사이드 검증
- **사용자 피드백**: 전송 상태 실시간 표시

### 5. 성능 최적화
- **코드 분할**: Next.js의 자동 코드 분할
- **이미지 최적화**: Next.js Image 컴포넌트
- **폰트 최적화**: Google Fonts 자동 최적화
- **Vercel 배포**: 최적화된 Edge Network 활용

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

## 🎨 Attribution

- Favicon: Icon made by [Bharat Icons](https://www.flaticon.com/authors/bharat-icons) from [Flaticon](https://www.flaticon.com/)

## 🚀 배포

이 프로젝트는 [Vercel Platform](https://vercel.com/)에서 쉽게 배포할 수 있습니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/deployment)를 참조하세요.
