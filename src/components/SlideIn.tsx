'use client';
import clsx from 'clsx';
import React, { ReactNode, useEffect, useRef } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right';
  customClass?: 'slide-in-hidden-left' | 'slide-in-hidden-right';
};

export function SlideIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'right',
  customClass = 'slide-in-hidden-left'
}: Props) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.animation = `slide-in-${direction} ${duration}s ease ${delay}s forwards`;
          observer.unobserve(element);
        }
      },
      { threshold: 0, rootMargin: '-150px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, duration, direction]);

  return (
    <div ref={elementRef} className={customClass}>
      {children}
    </div>
  );
}
