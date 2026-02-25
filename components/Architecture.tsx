
import React from 'react';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Cpu, Repeat, Layers, CheckCircle2, Box, CircuitBoard, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Architecture: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="architecture" className="py-16 md:py-24 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-500 scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100/50 via-white to-white dark:from-zinc-900/50 dark:via-black dark:to-black opacity-50 transition-colors duration-500" />
      
      <Container className="relative z-10">
        <SectionHeading 
          title={t.arch.title} 
          subtitle={t.arch.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* Large Card: AI-DPoS */}
          <div className="md:col-span-2 glass-card rounded-[2.5rem] p-6 md:p-12 flex flex-col justify-between overflow-hidden relative group hover:border-aic-gold/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-50" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-aic-gold/10 rounded-xl border border-aic-gold/10">
                    <Cpu className="text-aic-gold w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{t.arch.consensus.title}</h3>
              </div>
              <p className={`text-gray-600 dark:text-gray-400 max-w-lg mb-8 text-base md:text-lg leading-relaxed ${language === 'ar' ? 'font-medium' : 'font-light'}`}>
                {t.arch.consensus.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-aic-gold rtl:ml-2" /> {t.arch.consensus.feat1}
                </span>
                <span className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-aic-gold rtl:ml-2" /> {t.arch.consensus.feat2}
                </span>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-60 h-60 md:w-80 md:h-80 bg-aic-gold/10 rounded-full blur-[80px] group-hover:bg-aic-gold/20 transition-all duration-700 rtl:right-auto rtl:-left-20" />
          </div>

          {/* Tall Card: Traffic & Compute Engine - Enhanced */}
          <div className="md:col-span-1 md:row-span-2 glass-card rounded-[2.5rem] p-6 md:p-10 flex flex-col relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
             <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-50" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/10">
                    <Repeat className="text-blue-500 dark:text-blue-400 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">{t.arch.traffic.title}</h3>
              </div>
              <p className={`text-gray-600 dark:text-gray-400 mb-8 text-base ${language === 'ar' ? 'font-medium' : 'font-light'}`}>
                {t.arch.traffic.desc}
              </p>
              
              <div className="space-y-4">
                 {/* Standard Features */}
                 <div className="grid grid-cols-2 gap-3">
                    <div className="bg-black/5 dark:bg-white/5 p-3 rounded-xl border border-black/5 dark:border-white/5 text-center">
                        <span className="text-xs text-gray-500 block mb-1 font-bold">Gas Fee</span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">&lt; $0.1</span>
                    </div>
                     <div className="bg-black/5 dark:bg-white/5 p-3 rounded-xl border border-black/5 dark:border-white/5 text-center">
                        <span className="text-xs text-gray-500 block mb-1 font-bold">EVM</span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">100%</span>
                    </div>
                 </div>

                 {/* AI Compute Section */}
                 <div className="pt-6 border-t border-dashed border-gray-200 dark:border-white/10 mt-2">
                    <div className="flex items-center gap-2 mb-4">
                        <CircuitBoard size={16} className="text-aic-gold" />
                        <span className="text-xs font-bold text-aic-gold uppercase tracking-widest">{t.arch.traffic.compute_title}</span>
                    </div>
                    
                    <div className="space-y-3">
                        <div className="bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent p-4 rounded-2xl border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-colors group/item">
                            <div className="flex items-center gap-3 mb-1">
                                <Box size={16} className="text-blue-500" />
                                <h4 className="text-gray-900 dark:text-white font-semibold text-sm">{t.arch.traffic.feat3}</h4>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 pl-7 rtl:pl-0 rtl:pr-7">{t.arch.traffic.feat3_desc}</p>
                        </div>

                         <div className="bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent p-4 rounded-2xl border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-colors group/item">
                            <div className="flex items-center gap-3 mb-1">
                                <CircuitBoard size={16} className="text-blue-500" />
                                <h4 className="text-gray-900 dark:text-white font-semibold text-sm">{t.arch.traffic.feat4}</h4>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 pl-7 rtl:pl-0 rtl:pr-7">{t.arch.traffic.feat4_desc}</p>
                        </div>

                        <div className="bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent p-4 rounded-2xl border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-colors group/item">
                            <div className="flex items-center gap-3 mb-1">
                                <Brain size={16} className="text-blue-500" />
                                <h4 className="text-gray-900 dark:text-white font-semibold text-sm">{t.arch.traffic.feat5}</h4>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 pl-7 rtl:pl-0 rtl:pr-7">{t.arch.traffic.feat5_desc}</p>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
             <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-700 rtl:right-auto rtl:-left-20" />
          </div>

          {/* Medium Card: RWA Stack */}
          <div className="md:col-span-2 glass-card rounded-[2.5rem] p-6 md:p-12 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500">
             <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-50" />
             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/10">
                      <Layers className="text-emerald-500 dark:text-emerald-400 w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{t.arch.rwa.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="border-s-2 border-black/10 dark:border-white/10 ps-6 hover:border-emerald-500/50 transition-colors">
                    <h4 className="text-gray-900 dark:text-white font-semibold mb-2 text-lg md:text-xl">{t.arch.rwa.feat1_title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{t.arch.rwa.feat1_desc}</p>
                  </div>
                  <div className="border-s-2 border-black/10 dark:border-white/10 ps-6 hover:border-emerald-500/50 transition-colors">
                    <h4 className="text-gray-900 dark:text-white font-semibold mb-2 text-lg md:text-xl">{t.arch.rwa.feat2_title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{t.arch.rwa.feat2_desc}</p>
                  </div>
                </div>
             </div>
             <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-l from-emerald-500/5 dark:from-emerald-900/10 to-transparent pointer-events-none rtl:bg-gradient-to-r rtl:right-auto rtl:left-0" />
          </div>
        </div>
      </Container>
    </section>
  );
};
