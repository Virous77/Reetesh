'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

type TUserRequests = {
  [userId: string]: number[];
};

const windowSize = 60000;
const maxRequests = 10;
const userRequests: TUserRequests = {};

const RateLimiter = () => {
  const [requestCount, setRequestCount] = useState(10);

  const cleanupOldRequests = (timestamps: number[]) => {
    const now = Date.now();
    return timestamps.filter((timestamp) => now - timestamp < windowSize);
  };

  const handleRateLimit = () => {
    const userId = 'test';

    if (!userRequests[userId]) {
      userRequests[userId] = [];
      userRequests[userId].push(Date.now());
    }

    userRequests[userId] = cleanupOldRequests(userRequests[userId]);
    setRequestCount(maxRequests - userRequests[userId].length);

    if (userRequests[userId].length >= maxRequests) {
      return alert('Rate limit exceeded!');
    }

    userRequests[userId].push(Date.now());
  };

  useEffect(() => {
    const resetRequestCount = () => {
      if (userRequests['test']?.length === 10) {
        setTimeout(() => {
          userRequests['test'] = [];
          setRequestCount(10);
        }, windowSize);
      }
    };

    resetRequestCount();

    return () => resetRequestCount();
  }, [userRequests['test']?.length]);

  return (
    <section
      className="flex flex-col gap-1 rounded border-2"
      style={{
        padding: '12px 20px',
      }}
    >
      <div>
        <h1 className="mb-0 text-xl leading-none">⚙️ Rate Limiter Example</h1>
        <p className="text-default mt-0 mb-0 pt-4 text-sm">
          1 minute window with 10 requests allowed. Click the button to test the
          rate limiter.
        </p>
        <p
          className="text-default mt-0 text-sm font-bold"
          style={{
            paddingTop: '5px',
          }}
        >
          (Testing with client side only, not a real rate limiter. But code is
          same for server side too expect the state management.)
        </p>
      </div>

      <Button onClick={handleRateLimit} disabled={requestCount === 0}>
        Rate Limiter {requestCount === 0 ? 'Exceeded' : requestCount}
      </Button>
    </section>
  );
};

export default RateLimiter;
