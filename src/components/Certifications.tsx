import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Calendar, Award, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import SpecialCertificationCard from '../components/ui/SpecialCertificationCard'; 

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
  theme: 'google' | 'azure' | 'ibm' | 'dio' | 'santander' | 'aws' | 'meta' | 'default';
  isSpecial?: boolean; 
  description?: string; 
}

const themes = {
  google: {
    gradient: 'from-blue-500 via-red-500 via-yellow-500 to-green-500',
    borderColor: 'border-blue-200',
    hoverBorder: 'hover:border-blue-400',
    accentColor: 'text-blue-600',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    shadow: 'shadow-blue-100',
    hoverShadow: 'hover:shadow-blue-200'
  },
  azure: {
    gradient: 'from-blue-600 to-blue-800',
    borderColor: 'border-blue-300',
    hoverBorder: 'hover:border-blue-500',
    accentColor: 'text-blue-700',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    shadow: 'shadow-blue-100',
    hoverShadow: 'hover:shadow-blue-200'
  },
  ibm: {
    gradient: 'from-blue-800 to-gray-900',
    borderColor: 'border-slate-300',
    hoverBorder: 'hover:border-blue-600',
    accentColor: 'text-blue-800',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
    shadow: 'shadow-slate-100',
    hoverShadow: 'hover:shadow-blue-200'
  },
  dio: {
    gradient: 'from-purple-600 to-pink-600',
    borderColor: 'border-purple-200',
    hoverBorder: 'hover:border-purple-400',
    accentColor: 'text-purple-700',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    shadow: 'shadow-purple-100',
    hoverShadow: 'hover:shadow-purple-200'
  },
  santander: {
    gradient: 'from-red-600 to-red-800',
    borderColor: 'border-red-200',
    hoverBorder: 'hover:border-red-400',
    accentColor: 'text-red-700',
    badgeColor: 'bg-red-100 text-red-800 border-red-200',
    shadow: 'shadow-red-100',
    hoverShadow: 'hover:shadow-red-200'
  },
  aws: {
    gradient: 'from-orange-500 to-yellow-600',
    borderColor: 'border-orange-200',
    hoverBorder: 'hover:border-orange-400',
    accentColor: 'text-orange-700',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
    shadow: 'shadow-orange-100',
    hoverShadow: 'hover:shadow-orange-200'
  },
  default: {
    gradient: 'from-gray-600 to-gray-800',
    borderColor: 'border-gray-200',
    hoverBorder: 'hover:border-gray-400',
    accentColor: 'text-gray-700',
    badgeColor: 'bg-gray-100 text-gray-800 border-gray-200',
    shadow: 'shadow-gray-100',
    hoverShadow: 'hover:shadow-gray-200'
  }
};

const Certifications = () => {
  const { t, locale } = useLanguage();
  const [visibleCerts, setVisibleCerts] = useState(6);
  const [activeTab, setActiveTab] = useState<'all' | 'certifications' | 'courses'>('all');
  
  // MODIFICAR SEUS DADOS PARA INCLUIR UM CARD ESPECIAL
  const certifications: Certification[] = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect – Professional", 
      issuer: "Amazon Web Services",
      issuerLogo: google, // USE SEU LOGO
      date: "2023-04-15",
      credentialUrl: "#",
      skills: ["Cloud Architecture", "AWS Services", "Security", "DevOps"],
      type: "certification",
      theme: "aws",
      isSpecial: true, 
      description: "Certificação profissional de nível avançado que valida expertise técnica em design e deployment de sistemas distribuídos escaláveis na AWS." // ADICIONAR ESTA LINHA
    },
    {
      id: 2,
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      issuerLogo: azure,
      date: "2023-02-10",
      credentialUrl: "#",
      skills: ["Azure", "Cloud Computing", "Infrastructure"],
      type: "certification",
      theme: "azure"
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
    setVisibleCerts(prev => Math.min(prev + 6, regularCertifications.length)); // MUDANÇA AQUI
  };

  const filteredCertifications = certifications.filter(cert => {
    if (activeTab === 'all') return true;
    return activeTab === 'certifications' ? cert.type === 'certification' : cert.type === 'course';
  });

  // ADICIONAR ESTAS LINHAS
  const specialCertification = filteredCertifications.find(cert => cert.isSpecial);
  const regularCertifications = filteredCertifications.filter(cert => !cert.isSpecial);

  const getThemeStyles = (theme: string) => themes[theme as keyof typeof themes];

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

        {/* ADICIONAR ESTA SEÇÃO PARA O CARD ESPECIAL */}
        {specialCertification && (
          <div className="mb-12 flex justify-center">
            <SpecialCertificationCard 
              cert={specialCertification} 
              formatDate={formatDate}
            />
          </div>
        )}
        
        {/* MODIFICAR ESTA LINHA */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularCertifications.slice(0, visibleCerts).map((cert) => {
            const themeStyles = getThemeStyles(cert.theme);
            
            return (
              <Card 
                key={cert.id} 
                className={`
                  group relative overflow-hidden transition-all duration-300 ease-out
                  bg-gradient-to-br ${themeStyles.bgGradient}
                  border-2 ${themeStyles.borderColor} ${themeStyles.hoverBorder}
                  shadow-lg ${themeStyles.shadow} ${themeStyles.hoverShadow}
                  hover:scale-[1.02] hover:-translate-y-1
                  cursor-pointer
                `}
              >
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
                      </CardTitle>
                      <div className="flex items-center mt-2">
                        {cert.type === 'certification' ? (
                          <Award className={`h-4 w-4 mr-2 ${themeStyles.accentColor}`} />
                        ) : (
                          <BookOpen className={`h-4 w-4 mr-2 ${themeStyles.accentColor}`} />
                        )}
                        <span className="text-sm text-muted-foreground capitalize">
                          {cert.type === 'certification' ? 'Certificação' : 'Curso'}
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
                      ${themeStyles.accentColor} hover:${themeStyles.accentColor}
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
              </Card>
            );
          })}
        </div>
        
        {/* MODIFICAR ESTA CONDIÇÃO */}
        {visibleCerts < regularCertifications.length && (
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