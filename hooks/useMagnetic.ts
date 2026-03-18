import { useEffect, useRef } from 'react';

/**
 * Custom hook to create a magnetic effect on a DOM element.
 * The element will subtly follow the cursor when it's within range.
 */
export const useMagnetic = <T extends HTMLElement>(strength: number = 0.5) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      // Only apply effect if cursor is relatively close (1.5x the element size)
      const radius = Math.max(width, height) * 1.5;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < radius) {
        const moveX = distanceX * strength;
        const moveY = distanceY * strength;
        element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      } else {
        element.style.transform = `translate3d(0, 0, 0)`;
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = `translate3d(0, 0, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
};

export default useMagnetic;
