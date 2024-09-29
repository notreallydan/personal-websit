import React from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'dan bustamante',
  description: 'personal website for my work and thoughts',
  icons: [
    { rel: 'icon', url: '/avocado.png', sizes: '32x32', type: 'image/png' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
