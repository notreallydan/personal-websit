import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full flex flex-col justify-between p-8">
      <main className="flex-grow">
        {children}
      </main>
      <footer className="mt-8">
        {/* Navigation component removed from here */}
      </footer>
    </div>
  );
};

export default Layout;