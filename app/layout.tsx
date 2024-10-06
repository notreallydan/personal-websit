import React from 'react';
import type { Metadata } from 'next';
import './globals.css'; // Make sure this import is present

export const metadata: Metadata = {
  title: 'dan bustamante',
  description: 'personal website showcasing projects and writing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#e8e3e0] text-[#3c3c3c] flex items-center justify-center p-4">
          <div className="max-w-2xl w-full space-y-16">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}