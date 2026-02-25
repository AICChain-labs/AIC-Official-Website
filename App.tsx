import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Footer } from './components/Footer';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // Only scroll to top if there is no specific element hash (anchor)
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-[#F5F5F7] dark:bg-black text-gray-900 dark:text-white selection:bg-aic-gold/30 selection:text-black dark:selection:text-white overflow-x-hidden transition-colors duration-300 flex flex-col">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;