'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Tabs = ({ children, items }: { children: any; items: string[] }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div>
      <div className="post-tabs" role="tablist">
        {items.map((item, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            className="post-tab"
            aria-selected={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {item}
          </button>
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
