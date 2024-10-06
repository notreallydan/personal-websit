import React, { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-56">
        {children}
      </main>
      <footer className="mt-auto pb-44">
        <Navigation />
      </footer>
    </div>
  );
};

export default Layout;