import React from 'react';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Globe, Zap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Vision: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="vision" className="py-16 md:py-32 bg-[#F5F5F7] dark:bg-black relative transition-colors duration-500 scroll-mt-20">
       {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/5 dark:bg-blue-900/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <Container>
        <SectionHeading 
          title={t.vision.title}
          subtitle={t.vision.subtitle}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <VisionCard 
            icon={<Globe className="w-8 h-8 text-blue-500 dark:text-blue-400" />}
            title={t.vision.cards.capital.title}
            description={t.vision.cards.capital.desc}
            delay="0"
          />
          <VisionCard 
            icon={<Zap className="w-8 h-8 text-aic-gold" />}
            title={t.vision.cards.rwa.title}
            description={t.vision.cards.rwa.desc}
            delay="100"
          />
          <VisionCard 
            icon={<ShieldCheck className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />}
            title={t.vision.cards.ai.title}
            description={t.vision.cards.ai.desc}
            delay="200"
          />
        </div>
      </Container>
    </section>
  );
};

const VisionCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: string }) => (
  <div className="glass-card p-6 md:p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 group" style={{ transitionDelay: `${delay}ms` }}>
    <div className="mb-6 md:mb-8 p-4 md:p-5 rounded-2xl bg-black/5 dark:bg-white/5 w-fit border border-black/5 dark:border-white/5 group-hover:scale-110 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-all duration-500 shadow-sm dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      {icon}
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white group-hover:text-aic-gold transition-colors">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base font-light">
      {description}
    </p>
  </div>
);