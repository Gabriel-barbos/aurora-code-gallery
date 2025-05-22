
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface Tool {
  name: string;
  icon: string;
  level: 'basic' | 'intermediate' | 'advanced';
}

const Tools = () => {
  const { t } = useLanguage();
  
  // Sample tools data - replace with your own
  const tools: Tool[] = [
    { name: 'Visual Studio Code', icon: '/icons/vscode.svg', level: 'advanced' },
    { name: 'Git', icon: '/icons/git.svg', level: 'advanced' },
    { name: 'GitHub', icon: '/icons/github.svg', level: 'intermediate' },
    { name: 'Docker', icon: '/icons/docker.svg', level: 'intermediate' },
    { name: 'Figma', icon: '/icons/figma.svg', level: 'intermediate' },
    { name: 'Jira', icon: '/icons/jira.svg', level: 'advanced' },
    { name: 'Slack', icon: '/icons/slack.svg', level: 'advanced' },
    { name: 'Postman', icon: '/icons/postman.svg', level: 'intermediate' },
    { name: 'AWS Console', icon: '/icons/aws.svg', level: 'basic' },
    { name: 'Photoshop', icon: '/icons/photoshop.svg', level: 'basic' },
    { name: 'IntelliJ IDEA', icon: '/icons/intellij.svg', level: 'intermediate' },
    { name: 'Notion', icon: '/icons/notion.svg', level: 'advanced' },
  ];

  // Placeholder icon to use for missing images
  const placeholderIcon = 'https://via.placeholder.com/48';

  const getLevelColorClass = (level: string) => {
    switch (level) {
      case 'basic': return 'border-yellow-400 dark:border-yellow-600';
      case 'intermediate': return 'border-blue-400 dark:border-blue-600';
      case 'advanced': return 'border-green-400 dark:border-green-600';
      default: return 'border-gray-300 dark:border-gray-700';
    }
  };
  
  return (
    <section id="tools" className="py-20 bg-secondary/30 dark:bg-gray-900/50">
      <div className="container-section">
        <h2 className="section-title">{t('tools.title')}</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10">
          {tools.map((tool, index) => (
            <TooltipProvider key={index} delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className={`card-hover overflow-hidden border-2 ${getLevelColorClass(tool.level)}`}>
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="h-16 w-16 flex items-center justify-center mb-3">
                        <img 
                          src={tool.icon || placeholderIcon} 
                          alt={`${tool.name} icon`} 
                          className="max-h-12 max-w-full"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = placeholderIcon;
                          }}
                        />
                      </div>
                      <h3 className="font-medium text-center text-sm">{tool.name}</h3>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tool.name} - {t(`skills.${tool.level}`)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
