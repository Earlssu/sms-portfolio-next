// src/app/career/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Fragment } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Career Page',
  description: 'Career only',
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Fragment>{children}</Fragment>;
}
