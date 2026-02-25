import React from 'react';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Droplet, ArrowLeftRight, LandPlot, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Ecosystem: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Droplet size={32} />,
      title: t.eco.c1.title,
      desc: t.eco.c1.desc,
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-100 dark:text-blue-200"
    },
    {
      icon: <LandPlot size={32} />,
      title: t.eco.c2.title,
      desc: t.eco.c2.desc,
      color: "from-emerald-500 to-teal-500",
      iconColor: "text-emerald-100 dark:text-emerald-200"
    },
    {
      icon: <ArrowLeftRight size={32} />,
      title: t.eco.c3.title,
      desc: t.eco.c3.desc,
      color: "from-purple-500 to-indigo-500",
      iconColor: "text-purple-100 dark:text-purple-200"
    },
    {
      icon: <Cpu size={32} />,
      title: t.eco.c4.title,
      desc: t.eco.c4.desc,
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-100 dark:text-orange-200"
    }
  ];

  return (
    <section id="ecosystem" className="py-16 md:py-32 bg-[#F5F5F7] dark:bg-black border-t border-black/5 dark:border-white/5 transition-colors duration-500 scroll-mt-20">
      <Container>
        <SectionHeading 
          title={t.eco.title}
          subtitle={t.eco.subtitle}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group p-6 md:p-8 rounded-[2rem] bg-white dark:bg-zinc-900/30 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-zinc-900/60 hover:shadow-xl dark:hover:border-white/10 transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center ${f.iconColor} mb-6 shadow-lg shadow-gray-200 dark:shadow-black/50 group-hover:scale-110 transition-transform duration-500`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};