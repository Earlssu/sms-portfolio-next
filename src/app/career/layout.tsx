// src/app/career/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import I18nProvider from "@/shared/components/I18nProvider";
import CommonHeader from "@/shared/components/CommonHeader";
import NavButtons from "@/shared/components/NavButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Career Page",
  description: "Career only",
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <I18nProvider>
          <header>
            <CommonHeader />
            {/* TODO: 적절한 네비게이션 생성 시 해당 컴포넌트는 삭제 */}
            <NavButtons />
          </header>
          {/* NavButtons, container div 등 제외 */}
          <main>{children}</main>
        </I18nProvider>
      </body>
    </html>
  );
}
