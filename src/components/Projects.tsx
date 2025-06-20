import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader } from './ui/card';
import { ExternalLink, Github, CheckCircle } from 'lucide-react';
import { Button } from './ui/moving-border';
import GitHubButton from './GithubButton';
import { Safari } from '@/components/magicui/safari';

import jsBlue from "../assets/icons/JSBlue.png"
import mongoBlue from "../assets/icons/mongoBlue.png"
import nodeBlue from "../assets/icons/nodeBlue.png"
import ReactBlue from "../assets/icons/reactBlue.png"
import impermaq from "../assets/projects/impermaq.png"
import vendas from "../assets/projects/sale.png"

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  previewUrl: string;
  repoUrl: string;
  url: string; // URL para mostrar no Safari mockup
  technologies: {
    name: string;
    icon: string; 
  }[];
}

const Projects = () => {
  const { t } = useLanguage();
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Impermaq Máquinas',
      description: 'Site para vitrine de produtos e serviços e vendas de maquinas industriais',
      features: [
        'Cadastro de produtos',
        'Controle de acesso para administradores',
        'Responsivo',
        'integração com Whatsapp para orçamentos',
        'Admin dashboard'
      ],
      image: impermaq,
      previewUrl: 'https://www.impermaq.com.br',
      repoUrl: 'https://github.com/Gabriel-barbos/impermaq-V2',
      url: 'impermaq.com.br',
      technologies: [
        { name: 'React', icon: ReactBlue },
        { name: 'Node.js', icon: nodeBlue },
        { name: 'MongoDB', icon: mongoBlue },
        { name: 'JavaScript', icon: jsBlue }
      ],
    },
    {
      id: 2,
      title: 'Sistema de Vendas',
      description: 'Sistema completo de frente de caixa com gestao de produtos, estoque e relatórios',
      features: [
        'Sistema de estoque e venda',
        'Dashboard de relatórios e gráficos',
        'Cadastro de Produtos',
        'Operadores e Administradores',
        'Abertura e fechamento de Caixa'
      ],
      image: vendas,
      previewUrl: 'https://sistema-de-vendas2.vercel.app/',
      repoUrl: 'https://github.com/Gabriel-barbos/SistemaDeVendas',
      url: 'https://sistema-de-vendas2.vercel.app/',
      technologies: [
        { name: 'React', icon: ReactBlue },
        { name: 'JavaScript', icon: jsBlue },
        { name: 'Node.js', icon: nodeBlue },
        { name: 'MongoDB', icon: mongoBlue }
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
          {projects.slice(0, visibleProjects).map((project) => (
            <Card 
              key={project.id} 
              className="group relative bg-white/5 backdrop-blur-sm border-2 border-white/10 
                         hover:border-blue-500/40 transition-all duration-500 
                         hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden 
                         flex flex-col h-full hover:scale-[1.02] hover:-translate-y-2
                         cursor-pointer rounded-xl shadow-lg shadow-black/5
                         before:absolute before:inset-0 before:rounded-xl before:border before:border-white/5
                         after:absolute after:inset-0 after:rounded-xl after:border after:border-black/5"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Efeito de gradiente animado no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Safari Mockup Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 
                              border-b border-white/10 dark:border-black/10">
                <div className="relative h-full w-full p-2">
                  <Safari 
                    url={project.url} 
                    imageSrc={project.image}
                    className="w-full h-full transition-all duration-700 
                             group-hover:scale-[1.02] group-hover:brightness-110"
                  />
                  
                  {/* Overlay com efeito de fade mais suave */}
                  <div className="absolute inset-2 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  
                  {/* Indicador de hover com pulse */}
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-blue-500 
                                  transition-all duration-300 z-20 ${
                                    hoveredProject === project.id 
                                      ? 'opacity-100 animate-pulse scale-125' 
                                      : 'opacity-0 scale-100'
                                  }`} />
                </div>
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
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 py-2 px-4 h-12 w-36"
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