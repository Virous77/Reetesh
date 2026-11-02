'use client';

import React from 'react';

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
      <div key={activeTab} className="post-tab-panel">
        {children[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
