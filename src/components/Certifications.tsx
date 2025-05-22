
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import { Button } from './ui/button';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  issuerLogo: string;
  date: string;
  credentialUrl: string;
  skills: string[];
}

const Certifications = () => {
  const { t, locale } = useLanguage();
  const [visibleCerts, setVisibleCerts] = useState(6);
  
  // Sample certifications data - replace with your own
  const certifications: Certification[] = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      issuerLogo: "https://via.placeholder.com/100x50",
      date: "2023-04-15",
      credentialUrl: "#",
      skills: ["Cloud Architecture", "AWS Services", "Security"],
    },
    {
      id: 2,
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      issuerLogo: "https://via.placeholder.com/100x50",
      date: "2022-11-10",
      credentialUrl: "#",
      skills: ["Kubernetes", "Container Orchestration", "DevOps"],
    },
    {
      id: 3,
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      issuerLogo: "https://via.placeholder.com/100x50",
      date: "2022-06-22",
      credentialUrl: "#",
      skills: ["Agile", "Scrum", "Project Management"],
    },
    {
      id: 4,
      name: "React Developer Certification",
      issuer: "Meta",
      issuerLogo: "https://via.placeholder.com/100x50",
      date: "2021-09-05",
      credentialUrl: "#",
      skills: ["React", "React Router", "Redux"],
    },
    {
      id: 5,
      name: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      issuerLogo: "https://via.placeholder.com/100x50",
      date: "2021-03-18",
      credentialUrl: "#",
      skills: ["GCP", "Cloud Functions", "App Engine"],
    },
    {
      id: 6,
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      issuerLogo: "https://via.placeholder.com/100x50",
      date: "2020-08-12",
      credentialUrl: "#",
      skills: ["NoSQL", "MongoDB", "Database Design"],
    },
    {
      id: 7,
      name: "Certified Jenkins Engineer",
      issuer: "CloudBees",
      issuerLogo: "https://via.placeholder.com/100x50",
      date: "2020-03-01",
      credentialUrl: "#",
      skills: ["CI/CD", "Jenkins", "Automation"],
    },
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
    setVisibleCerts(prev => Math.min(prev + 6, certifications.length));
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container-section">
        <h2 className="section-title">{t('certifications.title')}</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {certifications.slice(0, visibleCerts).map((cert) => (
            <Card key={cert.id} className="card-hover flex flex-col h-full">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <div className="flex-shrink-0 h-10 w-16 flex items-center justify-center overflow-hidden">
                    <img 
                      src={cert.issuerLogo} 
                      alt={`${cert.issuer} logo`}
                      className="max-h-full max-w-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/100x50?text=Logo";
                      }}
                    />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pb-3 flex-grow">
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>
                      <strong>{t('certifications.issued')}</strong> {cert.issuer}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>
                      <strong>{t('certifications.date')}</strong> {formatDate(cert.date)}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-3">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Credential
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {visibleCerts < certifications.length && (
          <div className="mt-8 text-center">
            <Button onClick={loadMoreCertifications} variant="outline">
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
