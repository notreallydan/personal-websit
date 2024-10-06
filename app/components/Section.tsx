'use client'

import React from 'react';
import LinkList from './LinkList';

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
    <section className="space-y-2">
      <h2 className="text-xl font-light">{title}</h2>
      <LinkList links={links} />
    </section>
  );
};

export default Section;