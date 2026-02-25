import React from 'react';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Anchor, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Narrative: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="narrative" className="py-16 md:py-32 bg-[#F5F5F7] dark:bg-black border-t border-black/5 dark:border-white/5 relative transition-colors duration-500 scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white via-gray-100 to-gray-100 dark:from-zinc-900 dark:via-black dark:to-black opacity-30 pointer-events-none transition-colors duration-500" />
      
      <Container className="relative z-10">
        <SectionHeading 
          title={t.narrative.title} 
          subtitle={t.narrative.subtitle}
        />

        <div className="flex flex-col md:flex-row gap-10 md:gap-12">
          {/* Engine 1 */}
          <div className="flex-1 group">
            <div className="w-full aspect-[16/10] rounded-[2rem] bg-gray-200 dark:bg-zinc-900/40 border border-black/5 dark:border-white/10 mb-6 md:mb-10 overflow-hidden relative flex items-center justify-center transition-colors duration-500">
              {/* Complex gradient simulating oil/liquid */}
              <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-300 via-gray-100 to-gray-200 dark:from-zinc-800 dark:via-black dark:to-zinc-900 opacity-60 group-hover:scale-105 transition-transform duration-1000"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.05),transparent)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
              
              {/* Abstract Oil Rig Representation */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white dark:from-black to-transparent opacity-80"></div>
              
              <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-xl flex items-center justify-center border border-black/10 dark:border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:border-black/20 dark:group-hover:border-white/40 transition-colors">
                <Anchor className="w-8 h-8 md:w-10 md:h-10 text-black dark:text-white drop-shadow-sm dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors">{t.narrative.engine1.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 md:mb-8 text-base md:text-lg font-light">
              {t.narrative.engine1.desc}
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 md:gap-6 items-start group/item">
                <div className="w-0.5 h-12 bg-gradient-to-b from-black dark:from-white to-transparent opacity-30 mt-1 group-hover/item:opacity-100 transition-opacity"></div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold text-lg">{t.narrative.engine1.sub1}</h4>
                  <p className="text-sm text-gray-500 mt-1">{t.narrative.engine1.sub1_desc}</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6 items-start group/item">
                <div className="w-0.5 h-12 bg-gradient-to-b from-black dark:from-white to-transparent opacity-30 mt-1 group-hover/item:opacity-100 transition-opacity"></div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold text-lg">{t.narrative.engine1.sub2}</h4>
                  <p className="text-sm text-gray-500 mt-1">{t.narrative.engine1.sub2_desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Engine 2 */}
          <div className="flex-1 group mt-2 md:mt-0">
            <div className="w-full aspect-[16/10] rounded-[2rem] bg-gray-200 dark:bg-zinc-900/40 border border-black/5 dark:border-white/10 mb-6 md:mb-10 overflow-hidden relative flex items-center justify-center transition-colors duration-500">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-aic-gold/20 to-gray-100 dark:to-black opacity-60 group-hover:scale-105 transition-transform duration-1000"></div>
               <div className="absolute inset-0 bg-grid-white opacity-50 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
               
               <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-xl flex items-center justify-center border border-aic-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.2)] group-hover:border-aic-gold/60 transition-colors">
                <Activity className="w-8 h-8 md:w-10 md:h-10 text-aic-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white group-hover:text-aic-gold transition-colors">{t.narrative.engine2.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 md:mb-8 text-base md:text-lg font-light">
              {t.narrative.engine2.desc}
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 md:gap-6 items-start group/item">
                <div className="w-0.5 h-12 bg-gradient-to-b from-aic-gold to-transparent opacity-50 mt-1 group-hover/item:opacity-100 transition-opacity"></div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold text-lg">{t.narrative.engine2.sub1}</h4>
                  <p className="text-sm text-gray-500 mt-1">{t.narrative.engine2.sub1_desc}</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6 items-start group/item">
                <div className="w-0.5 h-12 bg-gradient-to-b from-aic-gold to-transparent opacity-50 mt-1 group-hover/item:opacity-100 transition-opacity"></div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold text-lg">{t.narrative.engine2.sub2}</h4>
                  <p className="text-sm text-gray-500 mt-1">{t.narrative.engine2.sub2_desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};