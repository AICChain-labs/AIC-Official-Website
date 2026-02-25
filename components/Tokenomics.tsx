
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Flame, Coins, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const Tokenomics: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  
  const data = [
    { name: 'Mining Output', value: 80, color: '#d4af37' }, // Gold
    { name: 'Genesis/Reserve', value: 20, color: theme === 'dark' ? '#27272a' : '#4b5563' }, // Zinc-800 or Gray-600
  ];

  return (
    <section id="tokenomics" className="py-16 md:py-32 bg-white dark:bg-zinc-950 overflow-hidden relative transition-colors duration-500 scroll-mt-20">
      <div className="absolute top-1/2 left-0 w-full h-[600px] bg-gradient-to-r from-aic-gold/5 via-transparent to-blue-500/5 dark:to-blue-900/10 blur-[100px] pointer-events-none rtl:bg-gradient-to-l" />

      <Container className="relative z-10">
        <SectionHeading 
          title={t.token.title}
          subtitle={t.token.subtitle}
        />

        {/* AIC Token Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-32">
          <div className="order-2 lg:order-1">
             <span className="text-aic-gold font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block animate-pulse-slow">{t.token.aic.label}</span>
             <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">AIC</h3>
             <p className={`text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-8 md:mb-10 leading-relaxed ${language === 'ar' ? 'font-medium' : 'font-light'}`}>
               {t.token.aic.desc}
             </p>
             
             <div className="grid gap-4 md:gap-6">
                <div className="p-6 md:p-8 rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group cursor-default">
                  <h4 className="text-gray-900 dark:text-white font-bold mb-2 text-lg group-hover:text-aic-gold transition-colors">Utility</h4>
                  <p className="text-base text-gray-600 dark:text-gray-400">{t.token.aic.utility}</p>
                </div>
                <div className="p-6 md:p-8 rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group cursor-default">
                  <h4 className="text-gray-900 dark:text-white font-bold mb-2 text-lg group-hover:text-aic-gold transition-colors">Distribution</h4>
                  <p className="text-base text-gray-600 dark:text-gray-400">{t.token.aic.dist}</p>
                </div>
             </div>
          </div>

          <div className="h-[300px] md:h-[500px] w-full relative order-1 lg:order-2 flex items-center justify-center">
            {/* Custom Glow behind chart */}
            <div className="absolute inset-0 bg-aic-gold/10 rounded-full blur-[80px] scale-75 animate-pulse-slow"></div>
            
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                  startAngle={90}
                  endAngle={-270}
                  cornerRadius={8}
                >
                  {data.map((entry, index) => (
                    <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color} 
                        className="hover:opacity-90 transition-opacity duration-300 outline-none"
                        style={{ filter: 'drop-shadow(0px 0px 8px rgba(0,0,0,0.5))' }} 
                    />
                  ))}
                </Pie>
                <Tooltip 
                    contentStyle={{ 
                        backgroundColor: theme === 'dark' ? 'rgba(20, 20, 22, 0.9)' : 'rgba(255, 255, 255, 0.9)', 
                        backdropFilter: 'blur(10px)',
                        borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', 
                        borderRadius: '16px', 
                        padding: '16px 20px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                        textAlign: language === 'ar' ? 'right' : 'left'
                    }}
                    itemStyle={{ color: theme === 'dark' ? '#fff' : '#000', fontSize: '15px', fontWeight: '500' }}
                    cursor={false}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <span className="block text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tighter drop-shadow-lg">100M</span>
              <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] mt-1 md:mt-2 block">Total Supply</span>
            </div>
          </div>
        </div>

        {/* USDI & Burn Mechanism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="glass-card rounded-[2.5rem] p-6 md:p-12 backdrop-blur-md hover:border-blue-500/20 transition-colors">
             <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 md:mb-8 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                <Coins className="text-blue-500 dark:text-blue-400 w-6 h-6 md:w-8 md:h-8" />
             </div>
             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{t.token.usdi.title}</h3>
             <p className={`text-gray-600 dark:text-gray-400 mb-6 md:mb-8 text-base md:text-lg ${language === 'ar' ? 'font-medium' : ''}`}>{t.token.usdi.desc}</p>
             <ul className="space-y-4 text-sm md:text-base text-gray-700 dark:text-gray-300">
                <li className="flex justify-between border-b border-black/5 dark:border-white/5 pb-3">
                  <span className="opacity-60">Peg</span>
                  <span className="text-gray-900 dark:text-white font-medium tracking-wide">{t.token.usdi.peg}</span>
                </li>
                <li className="flex justify-between items-start border-b border-black/5 dark:border-white/5 pb-4">
                  <span className="opacity-60 mt-1">Backing</span>
                  <div className="flex flex-col items-end gap-2 max-w-[70%]">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                        <ShieldCheck size={12} />
                        {t.token.usdi.excess}
                    </span>
                    <span className={`text-gray-900 dark:text-white font-medium text-end tracking-wide text-sm sm:text-base leading-snug`}>
                        {t.token.usdi.backing}
                    </span>
                  </div>
                </li>
                <li className="flex justify-between pt-2">
                  <span className="opacity-60">Supply</span>
                  <span className="text-gray-900 dark:text-white font-medium tracking-wide">100B</span>
                </li>
             </ul>
          </div>

          <div className="relative rounded-[2.5rem] p-6 md:p-12 overflow-hidden border border-aic-gold/20 group hover:border-aic-gold/40 transition-colors duration-500">
             {/* Dynamic background for burn card */}
             <div className="absolute inset-0 bg-gradient-to-br from-aic-gold/5 via-white to-gray-50 dark:via-black dark:to-black"></div>
             <div className="absolute -right-20 -top-20 w-60 h-60 bg-aic-gold/10 rounded-full blur-[80px] group-hover:bg-aic-gold/20 transition-all duration-700 rtl:right-auto rtl:-left-20"></div>
             
             <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-aic-gold/20 flex items-center justify-center mb-6 md:mb-8 relative z-10 border border-aic-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <Flame className="text-aic-gold w-6 h-6 md:w-8 md:h-8" />
             </div>
             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">{t.token.burn.title}</h3>
             <p className={`text-gray-600 dark:text-gray-400 mb-6 md:mb-8 relative z-10 text-base md:text-lg ${language === 'ar' ? 'font-medium' : ''}`}>{t.token.burn.desc}</p>
             
             <div className="bg-white/60 dark:bg-black/60 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-black/5 dark:border-white/10 relative z-10 shadow-inner">
               <div className="flex items-center justify-between text-sm md:text-base mb-3">
                 <span className="text-gray-500 dark:text-gray-400">Burn</span>
                 <span className="text-gray-900 dark:text-white font-mono font-bold" dir="ltr">1,000 USDI</span>
               </div>
               {/* Progress bar with shimmer */}
               <div className="w-full h-1.5 bg-black/5 dark:bg-white/10 my-4 relative overflow-hidden rounded-full">
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-aic-gold to-transparent animate-shimmer rtl:bg-gradient-to-l"></div>
                 <div className="absolute top-0 left-0 w-1/3 h-full bg-aic-gold/50 rounded-full rtl:left-auto rtl:right-0"></div>
               </div>
               <div className="flex items-center justify-between text-sm md:text-base">
                 <span className="text-aic-gold font-medium">Mine (Est.)</span>
                 <span className="text-aic-gold font-mono font-bold" dir="ltr">100 AIC / Year</span>
               </div>
             </div>
             <p className={`text-xs md:text-sm text-gray-500 mt-6 relative z-10 ${language === 'ar' ? 'font-medium' : 'font-light'}`}>
               {t.token.burn.detail}
             </p>
          </div>
        </div>

      </Container>
    </section>
  );
};
