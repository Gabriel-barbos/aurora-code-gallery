import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader } from './ui/card';
import { ExternalLink, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from './ui/moving-border';
import GitHubButton from './GithubButton';
import { getTranslatedProjects } from '../utils/projectsData';

const Projects = () => {
  const { t, locale } = useLanguage(); 
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projectsData = getTranslatedProjects(locale);

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projectsData.length));
  };

  return (
    <section id="projects" className="py-20">
      <div className="container-section">
        <h2 className="section-title">{t('projects.title')}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projectsData.slice(0, visibleProjects).map(project => (
            <Card
              key={project.id}
              className="group relative max-w-md bg-white/5 backdrop-blur-sm border-2 border-white/10 
                         hover:border-blue-500/40 transition-all duration-500 
                         hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden 
                         flex flex-col h-full hover:scale-[1.02] hover:-translate-y-2
                         cursor-pointer rounded-xl shadow-lg shadow-black/5"
            >
              <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 
                              border-b border-white/10 dark:border-black/10 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain transition-all duration-700 
                             group-hover:scale-[1.02] group-hover:brightness-110"
                />
              </div>

              <div className="flex flex-col flex-grow p-6 relative">
                <CardHeader className="p-0 pb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-blue-400 
                                 transition-all duration-300 group-hover:translate-x-1">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="p-0 flex-grow flex flex-col gap-6">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 
                                transition-colors duration-300">
                    {project.description}
                  </p>

                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2 
                                                 group-hover:text-muted-foreground/90 transition-colors duration-300">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 flex-shrizer-0 
                                        group-hover:bg-blue-400 transition-all duration-300" />
                        <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="group/tech relative"
                        title={tech.name}
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                                        backdrop-blur-sm border border-blue-500/30 flex items-center justify-center 
                                        hover:bg-gradient-to-br hover:from-blue-500/30 hover:to-purple-500/30 
                                        hover:border-blue-400/50 hover:scale-110 hover:rotate-6
                                        transition-all duration-300 cursor-pointer hover:shadow-lg">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-6 h-6 object-contain transition-transform duration-300 
                                       group-hover/tech:scale-110"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <div className="flex gap-3 pt-7 mt-auto">
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white 
                               border-neutral-200 dark:border-slate-800 py-2 px-4 h-12 w-36"
                  >
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-medium text-sm"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t('projects.viewPreview')}
                    </a>
                  </Button>

                  <GitHubButton href={project.repoUrl}>{t('projects.viewRepository')}</GitHubButton>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {visibleProjects < projectsData.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="group relative overflow-hidden rounded-xl 
                         bg-white/5 backdrop-blur-sm 
                         border-2 border-white/10 
                         hover:border-blue-500/40 
                         transition-all duration-500 
                         hover:shadow-2xl hover:shadow-blue-500/20 
                         hover:scale-105 hover:-translate-y-1 
                         active:scale-95 active:translate-y-0
                         px-8 py-4 min-w-[200px]"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full 
                              bg-gradient-to-r from-transparent via-white/20 to-transparent 
                              group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl 
                              bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400/60 rounded-full 
                               opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300" />
                <div className="absolute top-1/2 -left-1 w-1 h-1 bg-purple-400/60 rounded-full 
                               opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-100" />
                <div className="absolute -bottom-1 right-1/3 w-1.5 h-1.5 bg-blue-300/60 rounded-full 
                               opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-200" />
              </div>
              
              {/* Content */}
              <div className="relative flex items-center justify-center gap-3 
                              text-foreground group-hover:text-blue-400 
                              transition-colors duration-300">
                <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 
                                   group-hover:animate-pulse transition-all duration-300" />
                
                <span className="font-medium group-hover:translate-x-0.5 transition-transform duration-300">
                  {t('projects.loadMore')}
                </span>
                
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 
                                      group-hover:animate-bounce transition-all duration-300" />
              </div>
              
              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 
                              bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;