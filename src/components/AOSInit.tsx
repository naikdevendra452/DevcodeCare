'use client';

import { useEffect } from 'react';

export default function AOSInit() {
  useEffect(() => {
    // Dynamically import AOS to avoid SSR issues
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    };

    initAOS();
  }, []);

  return null;
}
