'use client'

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="space-y-2">
      <h1 className="text-xl font-light">i&apos;m dan</h1>
      <p className="text-xl font-light text-stone-500">this is a repository of my works.</p> 
      <br />
      <p className="text-xl font-light text-stone-500">
        <span className="italic">current</span> sydney resident, mba student, intersect mbo, biotech startup.
      </p>
      <p className="text-xl font-light text-stone-500">
        <span className="italic">ex</span> tokyo resident, google, mastering studio lackey, consultant.
      </p>
    </header>
  );
}

export default Header;