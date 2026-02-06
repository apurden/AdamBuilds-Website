import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  className = '', 
  fullWidth = false
}) => {
  // FAILSAFE: Render content immediately without animation to fix blank page on Netlify
  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className} opacity-100`}>
      {children}
    </div>
  );
};

export default FadeIn; 