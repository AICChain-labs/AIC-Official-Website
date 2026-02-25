
import React from 'react';
import { ArrowRight, ChevronDown, TrendingUp, TrendingDown } from 'lucide-react';
import { Container } from './ui/Container';
import { useLanguage } from '../context/LanguageContext';

const rwaData = [
  { symbol: 'CL.F', name: 'Crude Oil WTI', price: '76.42', change: '+0.85%', up: true, type: 'Future' },
  { symbol: 'BZ.F', name: 'Brent Crude', price: '80.12', change: '+0.42%', up: true, type: 'Future' },
  { symbol: 'NG.F', name: 'Natural Gas', price: '2.45', change: '-1.20%', up: false, type: 'Future' },
  { symbol: 'HO.F', name: 'Heating Oil', price: '2.89', change: '+0.15%', up: true, type: 'Future' },
  { symbol: 'RB.F', name: 'RBOB Gasoline', price: '2.34', change: '-0.32%', up: false, type: 'Future' },
  { symbol: 'AIC-RWA', name: 'Abu Dhabi Solar', price: '102.50', change: '+2.10%', up: true, type: 'Spot' },
  { symbol: 'EUA', name: 'Carbon Credit', price: '65.20', change: '-0.50%', up: false, type: 'Spot' },
  { symbol: 'AIC-OIL', name: 'Tokenized Barrel', price: '76.40', change: '+0.80%', up: true, type: 'RWA' },
  { symbol: 'COMP', name: 'AI Compute Unit', price: '14.20', change: '+5.40%', up: true, type: 'Service' },
];

// Duplicate data to create seamless loop
const streamData = [...rwaData, ...rwaData, ...rwaData, ...rwaData];

interface RWAItemProps {
  item: typeof rwaData[0];
}

const RWAItem: React.FC<RWAItemProps> = ({ item }) => (
  <div className="bg-white/60 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-200 dark:border-white/10 p-4 rounded-xl flex items-center justify-between shadow-xl ring-1 ring-black/5 dark:ring-white/5 group hover:ring-aic-gold/30 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300">
    <div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded uppercase tracking-wider">{item.type}</span>
        <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-aic-gold transition-colors">{item.symbol}</span>
      </div>
      <div className="text-xs text-gray-500 font-medium">{item.name}</div>
    </div>
    <div className="text-end">
      <div className="text-sm font-mono text-gray-900 dark:text-white font-semibold">{item.price}</div>
      <div className={`text-xs font-bold flex items-center justify-end gap-1 ${item.up ? 'text-emerald-500 dark:text-emerald-400' : 'text-rose-500 dark:text-rose-400'}`}>
        {item.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
        {item.change}
      </div>
    </div>
  </div>
);

const BackgroundRWAStream = () => {
  return (
    <div className="absolute inset-0 overflow-hidden flex justify-between px-4 md:px-20 pointer-events-none opacity-40 dark:opacity-50 select-none z-0 mix-blend-multiply dark:mix-blend-screen" dir="ltr">
      {/* Force LTR for the background stream to keep animation consistency */}
      {/* Column 1 - Scroll Up */}
      <div className="hidden md:flex flex-col gap-6 animate-scroll-up w-72 transform -rotate-12 translate-y-20 opacity-80">
        {streamData.map((item, i) => (
          <RWAItem key={`c1-${i}`} item={item} />
        ))}
      </div>

      {/* Column 2 - Scroll Down - Main Focus */}
      <div className="flex flex-col gap-6 animate-scroll-down w-80 transform rotate-3 scale-110 z-10 opacity-100">
        {streamData.map((item, i) => (
          <RWAItem key={`c2-${i}`} item={item} />
        ))}
      </div>

      {/* Column 3 - Scroll Up */}
      <div className="hidden lg:flex flex-col gap-6 animate-scroll-up w-72 transform -rotate-6 opacity-80">
        {streamData.map((item, i) => (
          <RWAItem key={`c3-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
      {/* Background Ambience - Adapts to light/dark */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200/50 via-gray-50 to-gray-50 dark:from-zinc-900/40 dark:via-black dark:to-black opacity-90 z-0 transition-colors duration-500" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-aic-gold/5 dark:bg-aic-gold/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-slow z-0" />

      {/* Dynamic RWA Data Stream Background */}
      <BackgroundRWAStream />

      {/* Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50 dark:from-black dark:via-transparent dark:to-black z-0 pointer-events-none opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50/80 via-transparent to-gray-50/80 dark:from-black/80 dark:via-transparent dark:to-black/80 z-0 pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="animate-slide-up flex justify-center" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block py-1.5 px-4 border border-aic-gold/30 rounded-full text-xs font-semibold text-aic-gold mb-6 md:mb-8 uppercase tracking-widest bg-aic-gold/5 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:bg-aic-gold/10 transition-colors cursor-default">
            {t.hero.tagline}
          </span>
        </div>

        <h1 className={`font-bold mb-6 md:mb-8 animate-slide-up drop-shadow-2xl text-gray-900 dark:text-white transition-colors duration-300 ${language === 'ar' ? 'text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-relaxed tracking-normal' : 'text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.1] md:leading-[0.9] tracking-tighter'}`} style={{ animationDelay: '0.2s' }}>
          {t.hero.title1} <br />
          <span className="text-gradient-gold-shine">
            {t.hero.title2}
          </span>
        </h1>

        <p className={`text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed animate-slide-up drop-shadow-md transition-colors duration-300 px-4 ${language === 'ar' ? 'text-base md:text-xl font-medium tracking-normal' : 'text-lg md:text-2xl font-light tracking-wide'}`} style={{ animationDelay: '0.3s' }}>
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://dev.aicchain.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-bold hover:bg-aic-gold dark:hover:bg-aic-gold hover:text-white dark:hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            <span className="relative z-10 flex items-center gap-3">
              {t.hero.cta_primary}
              <ArrowRight size={18} className="transition-transform ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer rtl:bg-gradient-to-l" />
          </a>

          <button
            onClick={() => handleScrollTo('ecosystem')}
            className="text-gray-900 dark:text-white border border-black/10 dark:border-white/10 bg-white/5 backdrop-blur-sm px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            {t.hero.cta_secondary}
          </button>
        </div>
      </Container>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-600 opacity-50 z-10 transition-colors">
        <ChevronDown size={28} className="md:w-8 md:h-8" />
      </div>
    </section>
  );
};
