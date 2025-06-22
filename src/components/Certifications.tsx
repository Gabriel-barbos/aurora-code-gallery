import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Calendar, Award, BookOpen, GraduationCap, Star } from 'lucide-react';
import { Button } from './ui/button';
import { BackgroundGradient } from './ui/background-gradient';

import google from "../assets/icons/google.png"
import ibm from "../assets/icons/ibm.png"
import azure from "../assets/icons/azure.png"
import santander from "../assets/icons/santander.png"
import dio from "../assets/icons/dio2.png"

interface Certification {
  id: number;
  name: string;
  issuer: string;
  issuerLogo: string;
  date: string;
  credentialUrl: string;
  skills: string[];
  type: 'certification' | 'course';
  theme: 'google' | 'azure' | 'ibm' | 'dio' | 'santander' | 'aws' | 'meta' | 'special' | 'default';
}

const themes = {
  google: {
    gradient: 'from-blue-500 via-red-500 via-yellow-500 to-green-500',
    borderColor: 'border-blue-200 dark:border-blue-800',
    hoverBorder: 'hover:border-blue-400 dark:hover:border-blue-600',
    accentColor: 'text-blue-600 dark:text-blue-400',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700',
    shadow: 'shadow-md',
    hoverShadow: 'hover:shadow-lg'
  },
  azure: {
    gradient: 'from-blue-600 to-blue-800',
    borderColor: 'border-blue-300 dark:border-blue-700',
    hoverBorder: 'hover:border-blue-500 dark:hover:border-blue-500',
    accentColor: 'text-blue-700 dark:text-blue-300',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700',
    shadow: 'shadow-md',
    hoverShadow: 'hover:shadow-lg'
  },
  ibm: {
    gradient: 'from-blue-800 to-gray-900',
    borderColor: 'border-slate-300 dark:border-slate-600',
    hoverBorder: 'hover:border-blue-600 dark:hover:border-blue-500',
    accentColor: 'text-blue-800 dark:text-blue-300',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800/50 dark:text-slate-300 dark:border-slate-600',
    shadow: 'shadow-md',
    hoverShadow: 'hover:shadow-lg'
  },
  dio: {
    gradient: 'from-purple-600 to-pink-600',
    borderColor: 'border-purple-200 dark:border-purple-700',
    hoverBorder: 'hover:border-purple-400 dark:hover:border-purple-500',
    accentColor: 'text-purple-700 dark:text-purple-300',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700',
    shadow: 'shadow-md',
    hoverShadow: 'hover:shadow-lg'
  },
  santander: {
    gradient: 'from-red-600 to-red-800',
    borderColor: 'border-red-200 dark:border-red-800',
    hoverBorder: 'hover:border-red-400 dark:hover:border-red-600',
    accentColor: 'text-red-700 dark:text-red-400',
    badgeColor: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700',
    shadow: 'shadow-md',
    hoverShadow: 'hover:shadow-lg'
  },
  aws: {
    gradient: 'from-orange-500 to-yellow-600',
    borderColor: 'border-orange-200 dark:border-orange-700',
    hoverBorder: 'hover:border-orange-400 dark:hover:border-orange-500',
    accentColor: 'text-orange-700 dark:text-orange-400',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700',
    shadow: 'shadow-md',
    hoverShadow: 'hover:shadow-lg'
  },
  special: {
    gradient: 'from-pink-600 via-purple-600 to-blue-600',
    borderColor: 'border-transparent',
    hoverBorder: 'hover:border-transparent',
    accentColor: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600',
    badgeColor: 'bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 text-purple-800 border-purple-200 dark:from-pink-900/30 dark:via-purple-900/30 dark:to-blue-900/30 dark:text-purple-300 dark:border-purple-700',
    shadow: 'shadow-lg',
    hoverShadow: 'hover:shadow-xl'
  },
  default: {
    gradient: 'from-gray-600 to-gray-800',
    borderColor: 'border-border',
    hoverBorder: 'hover:border-border/80',
    accentColor: 'text-foreground',
    badgeColor: 'bg-secondary text-secondary-foreground border-border',
    shadow: 'shadow-md',
    hoverShadow: 'hover:shadow-lg'
  }
};

const Certifications = () => {
  const { t, locale } = useLanguage();
  const [visibleCerts, setVisibleCerts] = useState(6);
  const [activeTab, setActiveTab] = useState<'all' | 'certifications' | 'courses'>('all');
  
  const certifications: Certification[] = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect – Professional",
      issuer: "Google Cloud",
      issuerLogo: google,
      date: "2024-01-15",
      credentialUrl: "#",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Advanced"],
      type: "certification",
      theme: "special"
    },
    {
      id: 2,
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      issuerLogo: dio,
      date: "2023-04-15",
      credentialUrl: "#",
      skills: ["Cloud Architecture", "AWS Services", "Security"],
      type: "certification",
      theme: "azure"
    },
    {
      id: 3,
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      issuerLogo: azure,
      date: "2023-02-10",
      credentialUrl: "#",
      skills: ["Azure", "Cloud Computing", "Infrastructure"],
      type: "certification",
      theme: "ibm"
    },
    {
      id: 4,
      name: "Google Cloud Professional Cloud Developer",
      issuer: "Google Cloud",
      issuerLogo: google,
      date: "2022-11-22",
      credentialUrl: "#",
      skills: ["GCP", "Cloud Functions", "App Engine"],
      type: "certification",
      theme: "google"
    },
    {
      id: 5,
      name: "IBM Watson AI Expert Certification",
      issuer: "IBM",
      issuerLogo: ibm,
      date: "2023-08-15",
      credentialUrl: "#",
      skills: ["AI", "Machine Learning", "Watson", "Expert Level"],
      type: "certification",
      theme: "santander"
    },
    {
      id: 6,
      name: "IBM Watson AI Certification",
      issuer: "IBM",
      issuerLogo: ibm,
      date: "2022-08-15",
      credentialUrl: "#",
      skills: ["AI", "Machine Learning", "Watson"],
      type: "certification",
      theme: "ibm"
    },
    {
      id: 7,
      name: "Bootcamp Full Stack Developer",
      issuer: "Digital Innovation One",
      issuerLogo: dio,
      date: "2022-06-10",
      credentialUrl: "#",
      skills: ["React", "Node.js", "MongoDB"],
      type: "course",
      theme: "dio"
    },
    {
      id: 8,
      name: "Santander Coders - Frontend",
      issuer: "Santander",
      issuerLogo: santander,
      date: "2022-03-20",
      credentialUrl: "#",
      skills: ["JavaScript", "React", "CSS"],
      type: "course",
      theme: "santander"
    }
  ];

  // Format date based on locale
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const loadMoreCertifications = () => {
    setVisibleCerts(prev => Math.min(prev + 6, filteredCertifications.length));
  };

  const filteredCertifications = certifications.filter(cert => {
    if (activeTab === 'all') return true;
    return activeTab === 'certifications' ? cert.type === 'certification' : cert.type === 'course';
  });

  const getThemeStyles = (theme: string) => themes[theme as keyof typeof themes];

  const renderCertificationCard = (cert: Certification) => {
    const themeStyles = getThemeStyles(cert.theme);
    
    const cardContent = (
      <>
        {/* Gradient overlay */}
        <div className={`
          absolute top-0 left-0 right-0 h-1 
          bg-gradient-to-r ${themeStyles.gradient}
          opacity-80 group-hover:opacity-100 transition-opacity duration-300
        `} />
        
        <CardHeader className="pb-3 relative">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              <CardTitle className="text-lg leading-tight group-hover:text-foreground transition-colors duration-200">
                {cert.name}
                {cert.theme === 'special' && (
                  <Star className="inline-block h-4 w-4 ml-2 text-yellow-500 fill-yellow-500" />
                )}
              </CardTitle>
              <div className="flex items-center mt-2">
                {cert.type === 'certification' ? (
                  <Award className={`h-4 w-4 mr-2 ${cert.theme === 'special' ? 'text-purple-600' : themeStyles.accentColor}`} />
                ) : (
                  <BookOpen className={`h-4 w-4 mr-2 ${cert.theme === 'special' ? 'text-purple-600' : themeStyles.accentColor}`} />
                )}
                <span className="text-sm text-muted-foreground capitalize">
                  {cert.type === 'certification' ? 'Certificação' : 'Curso'}
                  {cert.theme === 'special' && ' Especial'}
                </span>
              </div>
            </div>
            
            <div className="flex-shrink-0 h-12 w-20 flex items-center justify-center overflow-hidden rounded-lg bg-white/80 backdrop-blur-sm shadow-sm group-hover:shadow-md transition-all duration-200">
              <img 
                src={cert.issuerLogo} 
                alt={`${cert.issuer} logo`}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/100x50?text=${cert.issuer.charAt(0)}`;
                }}
              />
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pb-4">
          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <Award className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className={`font-medium ${themeStyles.accentColor}`}>
                {cert.issuer}
              </span>
            </div>
            
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-muted-foreground">
                {formatDate(cert.date)}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {cert.skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className={`
                  ${themeStyles.badgeColor} border transition-all duration-200
                  hover:scale-105 text-xs
                `}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`
              w-full group-hover:bg-white/50 transition-all duration-200
              ${cert.theme === 'special' 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-blue-600' 
                : `${themeStyles.accentColor} hover:${themeStyles.accentColor}`
              }
            `}
            asChild
          >
            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Ver Credencial
            </a>
          </Button>
        </CardFooter>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </>
    );

    if (cert.theme === 'special') {
      return (
        <BackgroundGradient 
          key={cert.id}
          className="p-0 overflow-hidden"
          containerClassName="transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1"
        >
          <Card className={`
            group relative overflow-hidden transition-all duration-300 ease-out
            bg-card border-0 ${themeStyles.shadow} ${themeStyles.hoverShadow}
            cursor-pointer h-full
          `}>
            {cardContent}
          </Card>
        </BackgroundGradient>
      );
    }

    return (
      <Card 
        key={cert.id} 
        className={`
          group relative overflow-hidden transition-all duration-300 ease-out
          bg-card border-2 ${themeStyles.borderColor} ${themeStyles.hoverBorder}
          ${themeStyles.shadow} ${themeStyles.hoverShadow}
          hover:scale-[1.02] hover:-translate-y-1
          cursor-pointer
        `}
      >
        {cardContent}
      </Card>
    );
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-title">Certificações & Cursos</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Minha jornada de aprendizado contínuo e conquistas profissionais
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg bg-muted p-1">
            {[
              { key: 'all', label: 'Todos', icon: GraduationCap },
              { key: 'certifications', label: 'Certificações', icon: Award },
              { key: 'courses', label: 'Cursos', icon: BookOpen }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => {
                  setActiveTab(key as any);
                  setVisibleCerts(6);
                }}
                className={`
                  flex items-center px-6 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${activeTab === key 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.slice(0, visibleCerts).map((cert) => 
            renderCertificationCard(cert)
          )}
        </div>
        
        {visibleCerts < filteredCertifications.length && (
          <div className="mt-12 text-center">
            <Button 
              onClick={loadMoreCertifications} 
              variant="outline"
              className="px-8 py-3 text-base hover:scale-105 transition-transform duration-200"
            >
              Carregar Mais
            </Button>
          </div>
        )}
        
        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              <GraduationCap className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Nenhum item encontrado</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;