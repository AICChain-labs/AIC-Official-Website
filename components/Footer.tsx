
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './ui/Container';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Github, Twitter, Globe, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const socialLinks = [
    { name: t.footer.docs, icon: <FileText size={20} />, href: 'https://docs.aicchain.io/' },
    { name: t.footer.explorer, icon: <Globe size={20} />, href: 'https://scan.aicchain.io/' },
    { name: t.footer.github, icon: <Github size={20} />, href: 'https://github.com/AICChain-labs' },
    { name: t.footer.twitter, icon: <Twitter size={20} />, href: 'https://x.com/aic_chain' },
  ];

  return (
    <footer className="py-12 bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="block group">
              <img
                src={theme === 'dark' ? "https://aic-assets.aicchain.io/Logo_White.png" : "https://aic-assets.aicchain.io/Logo_Black.png"}
                alt="AIC"
                className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">AIC (Abu Dhabi Infrastructure Chain)</p>
          </div>

          {/* Links with Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-aic-gold dark:hover:text-aic-gold hover:bg-white dark:hover:bg-zinc-800 hover:border-aic-gold/20 dark:hover:border-aic-gold/20 hover:scale-110 transition-all duration-300 group relative shadow-sm"
                aria-label={link.name}
              >
                {link.icon}
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 dark:text-gray-500 font-medium">
          <p>&copy; 2026 AIC Foundation(Abu Dhabi). All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{t.footer.privacy}</Link>
            <Link to="/terms" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
