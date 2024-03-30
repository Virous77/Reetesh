'use client';

import React from 'react';
import { usePostHog } from 'posthog-js/react';

const Tabs = ({ children, items }: { children: any; items: string[] }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const posthog = usePostHog();

  const handleEvent = (type: string, tab?: string) => {
    if (posthog && process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
      posthog.capture('clicked_tab', {
        type: type,
        tab: tab || '',
      });
    }
  };

  return (
    <div className=" flex flex-col gap-2">
      <div
        className="flex w-full items-center gap-1 overflow-scroll rounded border p-1"
        style={{
          borderBottom: '0px',
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        {items.map((item, index) => (
          <span
            onClick={() => {
              setActiveTab(index);
              handleEvent('mouse_click', item);
            }}
            className={` m-2 cursor-pointer whitespace-nowrap rounded p-2 hover:bg-accent  ${activeTab === index ? ' text-heading underline underline-offset-4' : ''}`}
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
      {children[activeTab]}
    </div>
  );
};

export default Tabs;
