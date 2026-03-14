import React, { useState, useEffect } from 'react';

interface TelemetryTypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const TelemetryTypewriter: React.FC<TelemetryTypewriterProps> = ({ 
  text, 
  speed = 50, 
  className = '' 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div className={`font-mono ${className}`}>
      {displayedText}
      <span className="inline-block w-2 h-4 bg-brand-accent ml-1 animate-pulse" />
    </div>
  );
};

export default TelemetryTypewriter;
