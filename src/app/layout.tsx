import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CommonHeader from '@/shared/components/CommonHeader';
import I18nProvider from '@/shared/components/I18nProvider';
import NavButtons from '@/shared/components/NavButtons';
import Footer from '@/shared/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // 페이지별 메타데이터가 없을 때만 사용되는 기본값
  title: {
    template: '%s',
    default: '심민섭 포트폴리오',
  },
  // 공통 설정만 유지
  authors: [{ name: '심민섭' }],
  creator: '심민섭',
  // Attribution for favicon
  other: {
    'flaticon-attribution': 'Favicon by Bharat Icons from Flaticon',
  },
  icons: {
    icon: '/ms_favicon.ico',
  },
  robots: 'index, follow',
  // 기본 OpenGraph 구조 (페이지별로 override됨)
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://msshim.com',
    siteName: '심민섭 포트폴리오',
  },
  // 기본 Twitter Card 설정
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <I18nProvider>
          <header className={'flex flex-col px-4 pt-1'}>
            <CommonHeader />
          </header>
          <main>
            <div className="relative flex-1 flex flex-col gap-6 min-h-0">
              {children}
            </div>
            <NavButtons />
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
