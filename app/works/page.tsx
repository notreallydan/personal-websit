import React from 'react';
import Section from '../components/Section';
import Layout from '../components/Layout';

export default function Works() {
  const workLinks = [
    { href: "#", text: "wip" },
  ];

  const wordsLinks = [
    { href: "#", text: "also working on it" },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <Section title="projects" links={workLinks} />
        <Section title="writing" links={wordsLinks} />
      </div>
    </Layout>
  );
}
