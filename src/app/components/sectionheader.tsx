import React from 'react';

interface SectionHeadersProps {
  subHeader: string;
  mainHeader: string;
}

const SectionHeaders: React.FC<SectionHeadersProps> = ({ subHeader, mainHeader }) => {
  return (
    <div>
      <h3 className="font-semibold text-2xl">{subHeader}</h3>
      <h2 className="font-semibold text-primary text-xl italic">{mainHeader}</h2>
    </div>
  );
};

export default SectionHeaders;
