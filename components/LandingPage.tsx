import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from './Hero';
import { Vision } from './Vision';
import { Architecture } from './Architecture';
import { Narrative } from './Narrative';
import { Tokenomics } from './Tokenomics';
import { Ecosystem } from './Ecosystem';

export const LandingPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor scrolling when navigating to the landing page with a hash
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100); // Slight delay to ensure rendering
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Vision />
      <Architecture />
      <Narrative />
      <Tokenomics />
      <Ecosystem />
    </>
  );
};