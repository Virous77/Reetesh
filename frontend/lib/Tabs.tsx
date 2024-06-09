'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

const Tabs = ({ children, items }: { children: any; items: string[] }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex w-full items-center gap-1 overflow-scroll rounded border p-1"
        style={{
          borderBottom: '0px',
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        {items.map((item, index) => (
          <Button
            onClick={() => setActiveTab(index)}
            className={`m-2 cursor-pointer whitespace-nowrap rounded bg-transparent p-2 hover:bg-accent ${activeTab === index ? 'text-heading underline underline-offset-4' : 'text-secondary-foreground'}`}
            key={index}
          >
            {item}
          </Button>
        ))}
      </div>
      {children[activeTab]}
    </div>
  );
};

export default Tabs;
