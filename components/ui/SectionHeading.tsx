
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, className = '' }) => {
  const { language } = useLanguage();
  return (
    <div className={`mb-10 md:mb-24 ${className}`}>
      <h2 className={`font-semibold tracking-tight mb-4 text-gray-900 dark:text-white transition-colors duration-300 ${language === 'ar' ? 'text-2xl md:text-4xl lg:text-5xl' : 'text-3xl md:text-5xl lg:text-6xl'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-2xl font-normal max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400 transition-colors duration-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};
