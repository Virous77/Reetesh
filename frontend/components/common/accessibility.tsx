'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Accessibility = () => {
  const router = useRouter();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === 'escape') {
        router.back();
      }

      if (key === 'b') {
        router.push('/blogs');
      }

      if (key === 'h') {
        router.push('/');
      }

      if (key === 'p') {
        router.push('/projects');
      }

      if (key === 's') {
        router.push('/skills');
      }

      if (key === 'u') {
        router.replace('https://ui.reetesh.in');
      }

      if (key === 'c') {
        router.replace('https://cv.reetesh.in');
      }

      if (key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push('/blogs');
        localStorage.setItem('commandOpen', JSON.stringify('true'));
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
