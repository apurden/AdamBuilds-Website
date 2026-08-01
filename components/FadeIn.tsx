import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
  viewportMargin?: string; // Allow customizing when it triggers (e.g. "-100px")
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = '', 
  direction = 'up', 
  fullWidth = false,
  viewportMargin = '-50px' // Default: trigger when element is 50px inside viewport
}) => {
  // Render visible by default so SSR, slow hydration, blocked JavaScript, or a
  // missing IntersectionObserver can never turn the page into a blank screen.
  // Elements below the fold are hidden after hydration and still animate when
  // they enter the viewport.
  const [isVisible, setIsVisible] = useState(true);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;

    if (
      !currentRef ||
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const bounds = currentRef.getBoundingClientRect();
    const startsInViewport =
      bounds.bottom >= 0 && bounds.top <= window.innerHeight;

    if (!startsInViewport) {
      setIsVisible(false);
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Once the element enters the viewport, trigger animation and stop observing
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, {
      rootMargin: viewportMargin,
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [viewportMargin]);

  // Define initial positions based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-8';
      case 'down': return '-translate-y-8';
      case 'left': return 'translate-x-8';
      case 'right': return '-translate-x-8';
      case 'none': return '';
      default: return 'translate-y-8';
    }
  };

  return (
    <div
      ref={domRef}
      className={`
        ${fullWidth ? 'w-full' : ''}
        ${className}
        transition-all duration-700 ease-out will-change-[opacity,transform]
        ${isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0 blur-0' 
          : `opacity-0 blur-[2px] ${getInitialTransform()}`
        }
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
