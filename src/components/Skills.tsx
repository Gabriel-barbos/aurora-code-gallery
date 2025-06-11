import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { IconCloud } from '../components/magicui/icon-cloud'; 

import javascript from '../assets/icons-globe/javascript.svg';
import java from '../assets/icons-globe/java.png';
import python from '../assets/icons-globe/python.png';
import mongo from '../assets/icons-globe/mongo.png';
import next from '../assets/icons-globe/next.png';
import node from '../assets/icons-globe/node.png';
import react from '../assets/icons-globe/react.png';
import tailwind from '../assets/icons-globe/tailwind.png';
import git from '../assets/icons-globe/git.png';
import github from '../assets/icons-globe/github.png';
import html from '../assets/icons-globe/html.png';
import css from '../assets/icons-globe/css.png';
import mysql from '../assets/icons-globe/mysql.png';
import arduino from '../assets/icons-globe/arduino.png';

interface Skill {
  name: string;
  icon: string; 
  desc: string;
}

const Skills = () => {
  const { t } = useLanguage();
  const skills: Skill[] = [
    { name: 'React', icon: react, desc: 'React' },
    { name: 'JavaScript', icon: javascript, desc: 'JavaScript' },
    { name: 'Node.js', icon: node, desc: 'Node.js' },
    { name: 'Java', icon: java, desc: 'Java' },
    { name: 'Python', icon: python, desc: 'Python' },
    { name: 'MongoDB', icon: mongo, desc: 'MongoDB' },
    { name: 'Next.js', icon: next, desc: 'Next.js' },
    { name: 'Tailwind CSS', icon: tailwind, desc: 'Tailwind CSS' },
    { name: 'Git', icon: '/icons/git.svg', desc: 'Git' },
    { name: 'GitHub', icon: '/icons/github.svg', desc: 'GitHub' },
    { name : 'HTML', icon: '/icons/html.svg', desc: 'HTML' },
    { name : 'CSS', icon: '/icons/css.svg', desc: 'CSS' },
    { name : 'MySQL', icon: '/icons/bootstrap.svg', desc: 'MySQL' },
    { name : 'Arduino', icon: '/icons/bootstrap.svg', desc: 'Arduino' },
    
  ];
  

  const placeholderIcon = 'https://via.placeholder.com/48';
  
  return (
    <section id="skills" className="bg-secondary/30 dark:bg-gray-900/50 py-20">
      <div className="container-section">
        <h2 className="section-title mb-12">{t('skills.title')}</h2>
        
        {/* Layout dividido */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Lado esquerdo - IconCloud */}
          <div className="space-y-6">
            <div className="bg-card/50 dark:bg-gray-800/50 rounded-lg p-8 border border-border/50">
              <div className="flex items-center justify-center h-55">
                <IconCloud images={[java, javascript, python, mongo, next, node, react, tailwind, git, github, html, css, mysql, arduino]} 
                iconSize={60}
                height={400}
                />
              </div>  
            </div>
          </div>

          {/* Lado direito - Grid de tecnologias modernizado */}
          <div className="space-y-6">
            <div className="bg-card/30 dark:bg-gray-800/30 rounded-xl border border-border/20 backdrop-blur-sm overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group relative border-r border-b border-border/10 dark:border-gray-700/20 last:border-r-0 [&:nth-child(4n)]:border-r-0 sm:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(4n)]:border-r-0"
                    style={{
                      borderRightWidth: (index + 1) % 4 === 0 ? '0' : '1px',
                      borderBottomWidth: index >= skills.length - 4 ? '0' : '1px'
                    }}
                  >
                    <div className="relative p-6 transition-all duration-500 ease-out hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 dark:hover:from-primary/10 dark:hover:to-primary/5 group-hover:scale-105">
                      
                      {/* Efeito de borda animada no hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg blur-sm animate-pulse"></div>
                      </div>
                      
                      {/* Linha de destaque no topo */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 group-hover:w-3/4 transition-all duration-500 ease-out"></div>
                      
                      <div className="relative z-10">
                        {/* Ícone com animação - tamanho aumentado */}
                        <div className="flex justify-center mb-4">
                          <div className="w-20 h-20 rounded-full border border-border/30 dark:border-gray-600/30 bg-background/80 dark:bg-gray-900/80 flex items-center justify-center p-3 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500 backdrop-blur-sm">
                            <img 
                              src={skill.icon || placeholderIcon} 
                              alt={`${skill.name} icon`} 
                              className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = placeholderIcon;
                              }}
                            />
                          </div>
                        </div>

                        {/* Nome da tecnologia */}
                        <h3 className="font-medium text-center text-sm text-foreground/90 dark:text-gray-200 group-hover:text-foreground transition-colors duration-300">
                          {skill.name}
                        </h3>
                        
                        {/* Nível por extenso */}
                        <div className="flex justify-center mt-3">
                          <span className="px-3 py-1 text-xs rounded-full font-medium bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                            {t(`skills.${skill.desc}`)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Efeito de brilho no hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;