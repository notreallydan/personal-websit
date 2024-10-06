import React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Navigation from './components/Navigation';

export const metadata: Metadata = {
  title: 'dan bustamante',
  description: 'personal website',
  icons: {
    icon: '/avocado.png',
    apple: '/avocado.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`${GeistSans.className} min-h-screen flex flex-col`}>
        <div className="flex-grow overflow-auto p-4 flex items-center justify-center">
          <div className="max-w-2xl w-full space-y-16 pb-32">
            {children}
          </div>
        </div>
        <footer className="fixed bottom-1/4 left-4 right-4">
          <div className="max-w-2xl w-full mx-auto pl-8">
            <Navigation />
          </div>
        </footer>
      </body>
    </html>
  );
}