
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';

interface Skill {
  name: string;
  icon: string; // URL/path to icon
  level: 'basic' | 'intermediate' | 'advanced';
}

const Skills = () => {
  const { t } = useLanguage();
  
  // Sample skills data - replace with your own
  const skills: Skill[] = [
    { name: 'React', icon: '/icons/react.svg', level: 'advanced' },
    { name: 'TypeScript', icon: '/icons/typescript.svg', level: 'advanced' },
    { name: 'Node.js', icon: '/icons/nodejs.svg', level: 'intermediate' },
    { name: 'JavaScript', icon: '/icons/javascript.svg', level: 'advanced' },
    { name: 'HTML5', icon: '/icons/html5.svg', level: 'advanced' },
    { name: 'CSS3', icon: '/icons/css3.svg', level: 'advanced' },
    { name: 'Next.js', icon: '/icons/nextjs.svg', level: 'intermediate' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', level: 'intermediate' },
    { name: 'MongoDB', icon: '/icons/mongodb.svg', level: 'intermediate' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg', level: 'basic' },
    { name: 'Git', icon: '/icons/git.svg', level: 'intermediate' },
    { name: 'Docker', icon: '/icons/docker.svg', level: 'basic' },
  ];

  // Placeholder icon to use for missing images
  const placeholderIcon = 'https://via.placeholder.com/48';
  
  return (
    <section id="skills" className="bg-secondary/30 dark:bg-gray-900/50 py-20">
      <div className="container-section">
        <h2 className="section-title">{t('skills.title')}</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10">
          {skills.map((skill, index) => (
            <Card key={index} className="card-hover overflow-hidden bg-card">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="h-16 w-16 flex items-center justify-center mb-3">
                  <img 
                    src={skill.icon || placeholderIcon} 
                    alt={`${skill.name} icon`} 
                    className="max-h-12 max-w-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = placeholderIcon;
                    }}
                  />
                </div>
                <h3 className="font-medium text-center">{skill.name}</h3>
                <span className={`
                  mt-2 px-2 py-1 text-xs rounded-full
                  ${skill.level === 'basic' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' : ''}
                  ${skill.level === 'intermediate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100' : ''}
                  ${skill.level === 'advanced' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : ''}
                `}>
                  {t(`skills.${skill.level}`)}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
