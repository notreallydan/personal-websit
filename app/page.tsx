import React from 'react';
import Header from './components/Header';
import Section from './components/Section';

export default function Home() {
  const workLinks = [
    { href: "#", text: "misc" },
    { href: "#", text: "muse" },
    { href: "#", text: "loop" },
  ];

  const wordsLinks = [
    { href: "#", text: "a love letter to SVGs" },
    { href: "#", text: "in a year" },
    { href: "#", text: "you might as well enjoy it" },
  ];

  return (
    <div className="min-h-screen bg-[#e8e3e0] text-[#3c3c3c] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-16">
        <Header />
        <Section title="work" links={workLinks} />
        <Section title="words" links={wordsLinks} />
      </div>
    </div>
  );
}