'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;

  return (
    <nav className="flex items-center space-x-5">
      <div className="w-14"> {/* Fixed width container for home/works link */}
        {pathname === '/' ? (
          <Link href="/works" className="text-xl font-light hover:underline">
            works
          </Link>
        ) : (
          <Link href="/" className="text-xl font-light hover:underline">
            home
          </Link>
        )}
      </div>
      <a href={`mailto:${email}`} className="text-xl font-light hover:underline">
        email
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-xl font-light hover:underline">
        linkedin
      </a>
    </nav>
  );
};

export default Navigation;
