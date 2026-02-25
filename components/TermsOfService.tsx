import React from 'react';
import { Container } from './ui/Container';
import { useLanguage } from '../context/LanguageContext';

export const TermsOfService: React.FC = () => {
  const { t } = useLanguage();
  const content = t.legal.terms;

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-zinc-950 min-h-screen">
      <Container className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
          {content.title}
        </h1>
        <p className="text-gray-500 mb-12 text-sm uppercase tracking-wide">
          {content.lastUpdated}
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
           <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 text-sm text-gray-500 dark:text-gray-400 mb-10">
              {content.intro}
           </div>

          {content.sections.map((section: any, index: number) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {section.heading}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};