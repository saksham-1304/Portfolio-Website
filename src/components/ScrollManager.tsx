import React, { useEffect } from 'react';

interface ScrollManagerProps {
  children: React.ReactNode;
}

const ScrollManager: React.FC<ScrollManagerProps> = ({ children }) => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return <div>{children}</div>;
};

export default ScrollManager;