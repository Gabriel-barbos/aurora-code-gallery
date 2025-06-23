import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader } from './ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/moving-border';
import GitHubButton from './GithubButton';

import jsBlue from "../assets/icons/JSBlue.png";
import mongoBlue from "../assets/icons/mongoBlue.png";
import nodeBlue from "../assets/icons/nodeBlue.png";
import ReactBlue from "../assets/icons/reactBlue.png";
import impermaq from "../assets/projects/impermaq.png";
import vendas from "../assets/projects/sale.png";

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
    icon: string;
  }[];
}

const Projects = () => {
  const { t } = useLanguage();
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Impermaq Máquinas',
      description: 'Site para vitrine de produtos e serviços e vendas de maquinas industriais',
      features: [
        'Cadastro de produtos',
        'Controle de acesso para administradores',
        'Responsivo',
        'Integração com Whatsapp para orçamentos',
        'Admin dashboard',
      ],
      image: impermaq,
      previewUrl: 'https://www.impermaq.com.br',
      repoUrl: 'https://github.com/Gabriel-barbos/impermaq-V2',
      technologies: [
        { name: 'React', icon: ReactBlue },
        { name: 'Node.js', icon: nodeBlue },
        { name: 'MongoDB', icon: mongoBlue },
        { name: 'JavaScript', icon: jsBlue },
      ],
    },
    {
      id: 2,
      title: 'Sistema de Vendas',
      description: 'Sistema completo de frente de caixa com gestão de produtos, estoque e relatórios',
      features: [
        'Sistema de estoque e venda',
        'Dashboard de relatórios e gráficos',
        'Cadastro de Produtos',
        'Operadores e Administradores',
        'Abertura e fechamento de Caixa',
      ],
      image: vendas,
      previewUrl: 'https://sistema-de-vendas2.vercel.app/',
      repoUrl: 'https://github.com/Gabriel-barbos/SistemaDeVendas',
      technologies: [
        { name: 'React', icon: ReactBlue },
        { name: 'JavaScript', icon: jsBlue },
        { name: 'Node.js', icon: nodeBlue },
        { name: 'MongoDB', icon: mongoBlue },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.slice(0, visibleProjects).map(project => (
            <Card
              key={project.id}
              className="group relative max-w-md bg-white/5 backdrop-blur-sm border-2 border-white/10 
                         hover:border-blue-500/40 transition-all duration-500 
                         hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden 
                         flex flex-col h-full hover:scale-[1.02] hover:-translate-y-2
                         cursor-pointer rounded-xl shadow-lg shadow-black/5"
            >
              {/* Imagem do projeto sem Safari */}
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
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0 
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
                      Preview
                    </a>
                  </Button>

                  <GitHubButton href={project.repoUrl}>GitHub</GitHubButton>
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
                         hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95 
                         border border-blue-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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
