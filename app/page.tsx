import React from 'react';
import Header from './components/Header';
import Section from './components/Section';

export default function Home() {
  const workLinks = [
    { href: "#", text: "rip algorithm" },
    { href: "#", text: "journalling app" },
  ];

  const wordsLinks = [
    { href: "#", text: "coming soon" },
  ];

  return (
    <div className="min-h-screen bg-[#e8e3e0] text-[#3c3c3c] flex justify-center p-4">
      <div className="max-w-2xl w-full mt-24 space-y-16">
        <div className="mb-32">
          <Header />
        </div>
        <Section title="projects" links={workLinks} />
        <Section title="writing" links={wordsLinks} />
      </div>
    </div>
  );
}