'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Accessibility = () => {
  const router = useRouter();

  // Next.js navigation does not fire hashchange, which the home page listens to.
  const openHomeSection = (section: string) => {
    if (window.location.pathname === '/') {
      window.location.hash = section;
    } else {
      router.push(`/#${section}`);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const masterKey = e.metaKey || e.ctrlKey;

      if (key === 'b' && masterKey) {
        e.preventDefault();
        router.push('/blogs');
      }

      if (key === 'h' && masterKey) {
        e.preventDefault();
        router.push('/');
      }

      if (key === 'p' && masterKey) {
        e.preventDefault();
        openHomeSection('projects');
      }

      if (key === 's' && masterKey) {
        e.preventDefault();
        openHomeSection('skills');
      }

      if (key === 'u' && masterKey) {
        e.preventDefault();
        router.replace('https://ui.reetesh.in');
      }

      if (key === 'm' && masterKey) {
        e.preventDefault();
        router.replace('https://cv.reetesh.in');
      }

      if (key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push('/blogs');
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return null;
};

export default Accessibility;
