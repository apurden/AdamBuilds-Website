import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
  stagger?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = '', 
  direction = 'up', 
  fullWidth = false,
  stagger = 0
}) => {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = domRef.current;
      if (!el) return;

      const vars: gsap.TweenVars = {
        opacity: 0,
        duration: 1,
        delay: delay / 1000,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      };

      switch (direction) {
        case 'up': vars.y = 40; break;
        case 'down': vars.y = -40; break;
        case 'left': vars.x = 40; break;
        case 'right': vars.x = -40; break;
      }

      if (stagger > 0) {
        gsap.from(el.children, {
          ...vars,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        });
      } else {
        gsap.from(el, vars);
      }
    }, domRef);

    return () => ctx.revert();
  }, [delay, direction, stagger]);

  return (
    <div
      ref={domRef}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
