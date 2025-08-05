'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      aria-label='Scroll to top'
      className='fixed bottom-6 right-6 z-50 rounded-full bg-black p-3 text-white shadow-lg hover:bg-neutral-800 transition'
    >
      <ChevronUp className='w-5 h-5' />
    </button>
  ) : null;
}
