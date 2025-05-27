
import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Enhanced Background elements with animated gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-t from-blue-500/15 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 -z-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container-section">
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-4xl mx-auto md:mx-0">
          {/* Enhanced greeting with typing effect */}
          <div className="relative mb-6">
            <p className="text-xl md:text-2xl font-medium text-primary mb-3 animate-fade-in relative">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>👋</span>
              <span className="ml-2">{t('hero.greeting')}</span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping opacity-75" />
            </p>
          </div>
          
          {/* Enhanced name and title with staggered animations */}
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              <span className="block animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-pulse">
                  Developer Name
                </span>
              </span>
              <span className="block mt-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent animate-pulse">
                  {t('hero.role')}
                </span>
              </span>
            </h1>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary/20 rounded-full animate-pulse" />
          </div>
          
          {/* Enhanced description with better typography */}
          <div className="relative mb-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              <span className="font-semibold text-foreground">Full-stack developer</span> apaixonado por criar 
              <span className="text-primary font-medium"> soluções elegantes e eficientes</span> para problemas complexos. 
              Especializado em <span className="font-semibold text-foreground">React, Node.js</span> e tecnologias web modernas.
            </p>
            
            {/* Status indicator */}
            <div className="flex items-center mt-4 gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Disponível para novos projetos</span>
            </div>
          </div>
          
          {/* Enhanced action buttons with better spacing and effects */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="group relative overflow-hidden px-8 py-4 text-lg font-semibold" asChild>
              <a href="#projects">
                <span className="relative z-10">{t('hero.cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="group px-8 py-4 text-lg font-semibold hover:shadow-lg transition-all duration-300" asChild>
              <a href="/cv.pdf" target="_blank" download>
                <FileDown className="mr-2 h-5 w-5 group-hover:animate-bounce" /> 
                {t('hero.download')}
              </a>
            </Button>
          </div>

          {/* Social links with hover effects */}
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 hover:bg-primary/10 transition-all duration-300">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 hover:bg-primary/10 transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 hover:bg-primary/10 transition-all duration-300">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2 animate-fade-in">Role para baixo</span>
          <a href="#skills" aria-label="Scroll down" className="group">
            <div className="w-8 h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
          </a>  
        </div>
      </div>
    </section>
  );
};

export default Hero;
