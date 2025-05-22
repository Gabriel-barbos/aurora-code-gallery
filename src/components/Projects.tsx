
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  previewUrl: string;
  repoUrl: string;
  technologies: string[];
}

const Projects = () => {
  const { t } = useLanguage();
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  // Sample projects data - replace with your own
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with cart functionality, user authentication, and payment processing.',
      image: 'https://via.placeholder.com/600x400',
      previewUrl: '#',
      repoUrl: '#',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks with drag-and-drop functionality and team collaboration features.',
      image: 'https://via.placeholder.com/600x400',
      previewUrl: '#',
      repoUrl: '#',
      technologies: ['React', 'Redux', 'TypeScript', 'Firebase'],
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects and skills with dark mode and animations.',
      image: 'https://via.placeholder.com/600x400',
      previewUrl: '#',
      repoUrl: '#',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application that displays forecast data using external APIs and interactive charts.',
      image: 'https://via.placeholder.com/600x400',
      previewUrl: '#',
      repoUrl: '#',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'An app to discover and save recipes with filtering by ingredients and dietary restrictions.',
      image: 'https://via.placeholder.com/600x400',
      previewUrl: '#',
      repoUrl: '#',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
  ];

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="projects" className="py-20">
      <div className="container-section">
        <h2 className="section-title">{t('projects.title')}</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.slice(0, visibleProjects).map((project) => (
            <Card key={project.id} className="card-hover overflow-hidden flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">{t('projects.techUsed')}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.previewUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t('projects.viewPreview')}
                  </a>
                </Button>
                
                <Button variant="secondary" size="sm" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    {t('projects.viewRepository')}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="mt-10 text-center">
            <Button onClick={loadMore} variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
