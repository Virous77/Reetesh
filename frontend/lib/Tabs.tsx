'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { motion } from 'framer-motion';

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
            className={`hover:bg-accent m-2 cursor-pointer rounded bg-transparent p-2 whitespace-nowrap ${activeTab === index ? 'text-heading underline underline-offset-4' : 'text-secondary-foreground'}`}
            key={index}
          >
            {item}
          </Button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children[activeTab]}
      </motion.div>
    </div>
  );
};

export default Tabs;
