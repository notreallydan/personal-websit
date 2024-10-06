import React from 'react';
import Section from '../components/Section';
import Layout from '../components/Layout';

export default function Works() {
  const workLinks = [
    { href: "#", text: "rip algorithm" },
    { href: "#", text: "marcus - journalling app" },
  ];

  const wordsLinks = [
    { href: "#", text: "working on it" },
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