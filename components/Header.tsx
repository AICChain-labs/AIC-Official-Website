
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container } from './ui/Container';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Language } from '../data/translations';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage, dir } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [ecoExpanded, setEcoExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const ecosystemLinks = [
    { name: t.nav.ecoLinks.swap, href: 'https://swap.aicchain.io' },
    { name: t.nav.ecoLinks.bridge, href: 'https://bridge.aicchain.io' },
    { name: t.nav.ecoLinks.scan, href: 'https://scan.aicchain.io' },
    { name: t.nav.ecoLinks.faucet, href: 'https://dev.aicchain.io/#/faucet' },
    { name: t.nav.ecoLinks.devHub, href: 'https://dev.aicchain.io' },
    { name: t.nav.ecoLinks.github, href: 'https://github.com/AICChain-labs' },
  ];

  const navLinks = [
    { name: t.nav.vision, href: '/#vision' },
    { name: t.nav.architecture, href: '/#architecture' },
    { name: t.nav.narrative, href: '/#narrative' },
    { name: t.nav.tokenomics, href: '/#tokenomics' },
  ];

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith('/#')) {
      const hash = href.replace('/', '');
      if (location.pathname !== '/') {
        navigate('/' + hash);
      } else {
        // Already on landing page, scroll smoothly
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || location.pathname !== '/'
          ? 'py-3 ' + (mobileMenuOpen ? 'bg-transparent border-transparent' : 'bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b border-black/5 dark:border-white/5')
          : 'bg-transparent py-6'
          }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Link to="/" onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }} className="block group relative z-50">
              <img
                src={theme === 'dark' ? "https://aic-assets.aicchain.io/Logo_White.png" : "https://aic-assets.aicchain.io/Logo_Black.png"}
                alt="AIC"
                className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm text-gray-600 dark:text-gray-400 hover:text-aic-gold dark:hover:text-aic-gold transition-colors relative group cursor-pointer whitespace-nowrap ${language === 'ar' ? 'font-bold text-sm tracking-normal' : 'font-medium tracking-wide'}`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-aic-gold transition-all duration-300 group-hover:w-full rtl:right-0 rtl:left-auto"></span>
                </a>
              ))}

              <div className="relative group">
                <button className={`flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-aic-gold dark:hover:text-aic-gold transition-colors whitespace-nowrap ${language === 'ar' ? 'font-bold text-sm tracking-normal' : 'font-medium tracking-wide'}`}>
                  {t.nav.ecosystem}
                  <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/10 rounded-xl overflow-hidden shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 text-center">
                  {ecosystemLinks.map(link => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-aic-gold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-6 w-px bg-gray-200 dark:bg-white/10 mx-2"></div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-300 hover:text-aic-gold transition-colors p-2"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Globe size={16} />
                  <span className="uppercase">{language}</span>
                </button>
                {langMenuOpen && (
                  <div className="absolute top-full right-0 rtl:right-auto rtl:left-0 mt-2 w-32 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/10 rounded-xl overflow-hidden shadow-2xl animate-fade-in z-50 text-start">
                    <button onClick={() => handleLangChange('en')} className={`w-full text-start px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5 ${language === 'en' ? 'text-aic-gold' : 'text-gray-600 dark:text-gray-400'}`}>English</button>
                    <button onClick={() => handleLangChange('zh')} className={`w-full text-start px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5 ${language === 'zh' ? 'text-aic-gold' : 'text-gray-600 dark:text-gray-400'}`}>中文</button>
                    <button onClick={() => handleLangChange('ar')} className={`w-full text-start px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5 ${language === 'ar' ? 'text-aic-gold' : 'text-gray-600 dark:text-gray-400'}`}>العربية</button>
                  </div>
                )}
              </div>

              <a href="https://docs.aicchain.io/" target="_blank" rel="noopener noreferrer" className={`bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full text-sm hover:bg-aic-gold dark:hover:bg-aic-gold hover:text-white dark:hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap ${language === 'ar' ? 'font-bold tracking-normal' : 'font-semibold'}`}>
                {t.nav.whitepaper}
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-gray-900 dark:text-white relative z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-40 flex flex-col pt-24 pb-12 px-8 overflow-y-auto animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-2xl text-gray-800 dark:text-gray-300 hover:text-aic-gold border-b border-gray-100 dark:border-white/5 py-4 first:pt-0 ${language === 'ar' ? 'font-bold' : 'font-medium'}`}
            >
              {link.name}
            </a>
          ))}

          <div className="border-b border-gray-100 dark:border-white/5">
            <button
              onClick={() => setEcoExpanded(!ecoExpanded)}
              className={`w-full flex items-center justify-between py-4 text-2xl text-gray-800 dark:text-gray-300 hover:text-aic-gold ${language === 'ar' ? 'font-bold' : 'font-medium'}`}
            >
              {t.nav.ecosystem}
              <ChevronDown size={24} className={`transition-transform duration-300 ${ecoExpanded ? 'rotate-180' : ''}`} />
            </button>
            <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${ecoExpanded ? 'max-h-60 pb-4' : 'max-h-0'}`}>
              {ecosystemLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-aic-gold pl-4 rtl:pl-0 rtl:pr-4"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-8">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400 text-sm">Theme</span>
              <button
                onClick={toggleTheme}
                className="text-gray-800 dark:text-gray-200 p-3 rounded-full bg-gray-100 dark:bg-white/10"
              >
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400 text-sm">Language</span>
              <div className="flex gap-2">
                <button onClick={() => { handleLangChange('en'); setMobileMenuOpen(false) }} className={`px-4 py-2 rounded-lg border text-sm font-medium ${language === 'en' ? 'border-aic-gold text-aic-gold' : 'border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400'}`}>EN</button>
                <button onClick={() => { handleLangChange('zh'); setMobileMenuOpen(false) }} className={`px-4 py-2 rounded-lg border text-sm font-medium ${language === 'zh' ? 'border-aic-gold text-aic-gold' : 'border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400'}`}>中文</button>
                <button onClick={() => { handleLangChange('ar'); setMobileMenuOpen(false) }} className={`px-4 py-2 rounded-lg border text-sm font-medium ${language === 'ar' ? 'border-aic-gold text-aic-gold' : 'border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400'}`}>AR</button>
              </div>
            </div>

            <a href="https://docs.aicchain.io/" target="_blank" rel="noopener noreferrer" className={`block bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-full text-base text-center mt-4 ${language === 'ar' ? 'font-bold' : 'font-semibold'}`}>
              {t.nav.whitepaper}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
