'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type THeading = {
  id: string;
  text: string;
};

// Built from the rendered page, so links always match the real heading ids.
const usePostHeadings = () => {
  const [headings, setHeadings] = useState<THeading[]>([]);
  const [activeId, setActiveId] = useState('');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const elements = [
      ...document.querySelectorAll<HTMLElement>('.post-body .mdx > h2[id]'),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '0px 0px -75% 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    const frame = requestAnimationFrame(() => {
      setHeadings(
        elements.map((element) => ({
          id: element.id,
          text: (element.textContent ?? '').replace(/#$/, '').trim(),
        }))
      );
      setReady(true);
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return { headings, activeId, ready };
};

const TocLinks = ({
  headings,
  activeId,
  onSelect,
}: {
  headings: THeading[];
  activeId: string;
  onSelect?: () => void;
}) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id}>
        <a
          href={`#${heading.id}`}
          className="post-toc-link"
          data-active={heading.id === activeId}
          onClick={onSelect}
        >
          {heading.text}
        </a>
      </li>
    ))}
  </ul>
);

const PostToc = () => {
  const { headings, activeId, ready } = usePostHeadings();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeDetails = () => {
    if (detailsRef.current) detailsRef.current.open = false;
  };

  // The panel renders before headings load, so it does not shift the page.
  if (ready && headings.length < 2) return null;

  return (
    <>
      <details ref={detailsRef} className="post-toc-inline">
        <summary>
          On this page
          <ChevronDown size={18} aria-hidden="true" />
        </summary>
        <TocLinks
          headings={headings}
          activeId={activeId}
          onSelect={closeDetails}
        />
      </details>

      <nav aria-label="On this page" className="post-toc">
        <p className="home-soft mb-2 text-sm">On this page</p>
        <TocLinks headings={headings} activeId={activeId} />
      </nav>
    </>
  );
};

export default PostToc;
