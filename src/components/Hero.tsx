
import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, FileDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container-section">
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-3xl mx-auto md:mx-0">
          <p className="text-xl md:text-2xl font-medium text-primary mb-3 animate-fade-in">
            {t('hero.greeting')}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="block">Developer Name</span>
            <span className="block mt-2 text-primary">{t('hero.role')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Full-stack developer with a passion for creating elegant, efficient solutions for complex problems. Specialized in React, Node.js, and modern web technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" asChild>
              <a href="#projects">
                {t('hero.cta')}
              </a>
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <a href="/cv.pdf" target="_blank" download>
                <FileDown className="mr-2 h-4 w-4" /> 
                {t('hero.download')}
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>  
      </div>
    </section>
  );
};

export default Hero;
