'use client';

import sdk from '@stackblitz/sdk';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const StackBlitzProject = ({
  id,
  file,
  repoUrl,
}: {
  id: string;
  file: string;
  repoUrl: string;
}) => {
  useEffect(() => {
    sdk.embedProjectId('open-stackblitz', id, {
      forceEmbedLayout: true,
      openFile: file,
      height: 600,
      width: '100%',
    });
  }, [id, file]);

  return (
    <div
      className="w-ful relative"
      style={{
        borderRight: '1px solid #2e3138',
        marginBottom: '2rem',
      }}
    >
      <div id="open-stackblitz" />
      <div className="absolute bottom-0 left-0 z-10 w-auto">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
          style={{
            padding: '2px 10px',
            paddingBottom: '7px',
            background: '#2e3138',
            color: '#fff',
            fontSize: '13px',
          }}
        >
          Open Github Repository
          <span className="inline-block h-4 w-4">
            <ArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
};

export default StackBlitzProject;
