
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-primary/5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary">Portfolio - Gabriel Barbosa</h3>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {currentYear} Gabriel Barbosa. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4 items-center">
            <a 
              href="https://github.com/Gabriel-barbos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/gabriel-barbosa-da-silva-35bb19256/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            <a 
              href="mailto:gabriel.barbosa79@outlook.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToTop}
              className="ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
