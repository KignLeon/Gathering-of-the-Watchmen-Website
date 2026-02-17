import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = false, className = '' }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <span className="block text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory-100 leading-tight">
        {title}
      </h2>
      <div className={`h-1 w-16 bg-gold-500 mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeader;