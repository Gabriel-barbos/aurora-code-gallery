import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader } from './ui/card';
import { ExternalLink, Github, CheckCircle } from 'lucide-react';
import { Button } from './ui/moving-border';
import GitHubButton from './GithubButton';

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  previewUrl: string;
  repoUrl: string;
  technologies: {
    name: string;
    icon: string; // Caminho para o arquivo do ícone
  }[];
}

// Componente de botão GitHub customizado com animações


const Projects = () => {
  const { t } = useLanguage();
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  // Sample projects data com caminhos para ícones manuais
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with cart functionality, user authentication, and payment processing.',
      features: [
        'User authentication & profiles',
        'Shopping cart & checkout',
        'Payment integration with Stripe',
        'Order tracking system',
        'Admin dashboard'
      ],
      image: 'https://via.placeholder.com/600x400',
      previewUrl: '#',
      repoUrl: '#',
      technologies: [
        { name: 'React', icon: '/icons/react-blue.svg' },
        { name: 'Node.js', icon: '/icons/nodejs-blue.svg' },
        { name: 'Express', icon: '/icons/express-blue.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb-blue.svg' },
        { name: 'Stripe', icon: '/icons/stripe-blue.svg' }
      ],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks with drag-and-drop functionality and team collaboration features.',
      features: [
        'Drag & drop task organization',
        'Team collaboration tools',
        'Real-time updates',
        'Progress tracking',
        'File attachments'
      ],
      image: 'https://via.placeholder.com/600x400',
      previewUrl: '#',
      repoUrl: '#',
      technologies: [
        { name: 'React', icon: '/icons/react-blue.svg' },
        { name: 'Redux', icon: '/icons/redux-blue.svg' },
        { name: 'TypeScript', icon: '/icons/typescript-blue.svg' },
        { name: 'Firebase', icon: '/icons/firebase-blue.svg' }
      ],
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects and skills with dark mode and animations.',
      features: [
        'Responsive design',
        'Dark/Light mode toggle',
        'Smooth animations',
        'Contact form integration',
        'SEO optimized'
      ],
      image: 'https://via.placeholder.com/600x400',
      previewUrl: '#',
      repoUrl: '#',
      technologies: [
        { name: 'React', icon: '/icons/react-blue.svg' },
        { name: 'Tailwind CSS', icon: '/icons/tailwind-blue.svg' },
        { name: 'JavaScript', icon: '/icons/javascript-blue.svg' }
      ],
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application that displays forecast data using external APIs and interactive charts.',
      features: [
        '7-day weather forecast',
        'Interactive weather maps',
        'Location-based search',
        'Weather alerts',
        'Data visualization charts'
      ],
      image: 'https://via.placeholder.com/600x400',
      previewUrl: '#',
      repoUrl: '#',
      technologies: [
        { name: 'JavaScript', icon: '/icons/javascript-blue.svg' },
        { name: 'HTML', icon: '/icons/html-blue.svg' },
        { name: 'CSS', icon: '/icons/css-blue.svg' }
      ],
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'An app to discover and save recipes with filtering by ingredients and dietary restrictions.',
      features: [
        'Recipe search & filtering',
        'Dietary restriction options',
        'Save favorite recipes',
        'Shopping list generator',
        'Nutritional information'
      ],
      image: 'https://via.placeholder.com/600x400',
      previewUrl: '#',
      repoUrl: '#',
      technologies: [
        { name: 'React', icon: '/icons/react-blue.svg' },
        { name: 'Node.js', icon: '/icons/nodejs-blue.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb-blue.svg' }
      ],
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
            <Card 
              key={project.id} 
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 
                         hover:border-blue-500/50 transition-all duration-500 
                         hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden 
                         flex flex-col h-full hover:scale-[1.02] hover:-translate-y-2
                         cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Efeito de gradiente animado no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 
                           group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Overlay com efeito de fade mais suave */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Indicador de hover com pulse */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-blue-500 
                                transition-all duration-300 ${
                                  hoveredProject === project.id 
                                    ? 'opacity-100 animate-pulse scale-125' 
                                    : 'opacity-0 scale-100'
                                }`} />
              </div>
              
              {/* Card Content */}
              <div className="flex flex-col flex-grow p-6 relative">
                {/* Title */}
                <CardHeader className="p-0 pb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-blue-400 
                                 transition-all duration-300 group-hover:translate-x-1">
                    {project.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="p-0 flex-grow flex flex-col gap-6">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 
                                transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Main Features */}
                  <div>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2 
                                                   group-hover:text-muted-foreground/90 transition-colors duration-300">
                          <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0 
                                          group-hover:bg-blue-400 group-hover:shadow-sm group-hover:shadow-blue-400/50
                                          transition-all duration-300" />
                          <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
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
                                          transition-all duration-300 cursor-pointer
                                          hover:shadow-lg hover:shadow-blue-500/25">
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-6 h-6 object-contain transition-transform duration-300 
                                         group-hover/tech:scale-110"
                              onError={(e) => {
                                // Fallback para ícone padrão caso não encontre o arquivo
                                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIHN0cm9rZT0iIzM1ODBGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiIGZpbGw9IiMzNTgwRkYiLz4KPC9zdmc+Cg==';
                              }}
                            />
                          </div>
                          {/* Tooltip melhorado */}
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                                          bg-gray-900/95 backdrop-blur-sm border border-blue-500/30 
                                          px-3 py-1.5 rounded-lg text-xs text-white font-medium
                                          opacity-0 group-hover/tech:opacity-100 transition-all duration-200 
                                          pointer-events-none whitespace-nowrap z-10
                                          shadow-lg shadow-blue-500/20 scale-95 group-hover/tech:scale-100">
                            {tech.name}
                            {/* Seta do tooltip */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                                            border-2 border-transparent border-t-gray-900/95" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                {/* Action Buttons - Altura ajustada */}
                <div className="flex gap-3 pt-7 mt-auto">
                <Button
  borderRadius="1.75rem"
  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 py-2 px-4 h-12 w-36 "
>
  <a
    href={project.previewUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center font-medium text-sm"
  >
    <ExternalLink className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
    Preview
  </a>
</Button>

                  {/* Botão GitHub customizado com altura ajustada */}
                  <GitHubButton href={project.repoUrl}>
                    GitHub
                  </GitHubButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
                         text-white font-medium rounded-lg overflow-hidden
                         hover:from-blue-700 hover:to-purple-700 transition-all duration-300
                         hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105
                         active:scale-95 border border-blue-500/30"
            >
              {/* Efeito de brilho no botão */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Conteúdo do botão */}
              <span className="relative flex items-center gap-2">
                Carregar Mais Projetos
                <div className="w-2 h-2 bg-white rounded-full opacity-60 group-hover:opacity-100 
                                group-hover:animate-bounce transition-all duration-300" />
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;