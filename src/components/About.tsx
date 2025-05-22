
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { FileDown, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-primary/5">
      <div className="container-section">
        <h2 className="section-title">{t('about.title')}</h2>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center mt-10">
          {/* Profile image */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-xl h-80 w-80 mx-auto">
              <img 
                src="https://via.placeholder.com/400x500" 
                alt="Profile" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          {/* About content */}
          <div className="lg:w-2/3">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Developer Name</h3>
              
              <p className="text-lg">
                I'm a passionate Full-Stack Developer with over 5 years of experience building web applications. My expertise lies in creating responsive, efficient, and user-friendly interfaces using modern technologies.
              </p>
              
              <p>
                I specialize in React, TypeScript, Node.js, and other modern web technologies. I'm always eager to learn and adapt to new tools and methodologies that improve development workflows and user experiences.
              </p>
              
              <p>
                When I'm not coding, I enjoy hiking, reading about new tech trends, and contributing to open-source projects. I'm currently focused on exploring AI integration in web applications.
              </p>
              
              <div className="pt-4">
                <h4 className="font-semibold mb-4">{t('about.connect')}</h4>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Github
                    </a>
                  </Button>
                  
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>
                  
                  <Button size="sm" variant="outline" asChild>
                    <a href="mailto:email@example.com">
                      <Mail className="mr-2 h-4 w-4" /> Email
                    </a>
                  </Button>
                  
                  <Button size="sm" variant="default" asChild>
                    <a href="/cv.pdf" target="_blank" download>
                      <FileDown className="mr-2 h-4 w-4" /> {t('about.resume')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
