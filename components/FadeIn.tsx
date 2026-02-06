import React from 'react';

// This is a "Pass-through" component to fix the blank page issue.
// It renders children immediately without hiding them first.
const FadeIn = ({ children }: { children: React.ReactNode; [key: string]: any }) => {
  return <>{children}</>;
};

export default FadeIn;