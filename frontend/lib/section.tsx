import React from 'react';

const Section = ({ tab, children }: { tab: string; children: any }) => {
  return (
    <div slot={tab} className="figure h-fit" style={{ marginTop: '-10px' }}>
      {children}
    </div>
  );
};

export default Section;
