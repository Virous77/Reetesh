'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: false,
  });
}

const PHProvider = ({ children }: { children: React.ReactNode }) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};

export default PHProvider;
