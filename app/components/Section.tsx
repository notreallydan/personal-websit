'use client'

import React from 'react';

interface Link {
  href: string;
  text: string;
}

interface SectionProps {
  title: string;
  links: Link[];
}

const Section: React.FC<SectionProps> = ({ title, links }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-light text-[#3c3c3c]">{title}</h2>
      <ul className="space-y-2 pl-6 font-light relative">
        <div className="absolute left-2 top-1 bottom-1 w-px bg-[#3c3c3c] opacity-30"></div>
        {links.map((link, index) => (
          <li key={index} className="pl-6 text-stone-500">
            <a href={link.href} className="hover:underline">{link.text}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section;