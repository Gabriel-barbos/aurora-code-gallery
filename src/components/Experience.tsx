
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface Job {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null; // null for present
  location: string;
  description: string;
  technologies: string[];
}

const Experience = () => {
  const { t, locale } = useLanguage();
  
  // Sample experience data - replace with your own
  const experiences: Job[] = [
    {
      id: "job1",
      company: "Tech Innovations Inc.",
      position: "Senior Full-Stack Developer",
      startDate: "2021-06",
      endDate: null, // Present
      location: "San Francisco, CA (Remote)",
      description: "Implemented microservices architecture for scaling the company's main product. Led a team of 5 developers in rebuilding the customer-facing dashboard using React and TypeScript. Optimized database queries resulting in 40% faster load times.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Docker", "AWS"]
    },
    {
      id: "job2",
      company: "WebSolutions Co.",
      position: "Front-End Developer",
      startDate: "2019-03",
      endDate: "2021-05",
      location: "Boston, MA",
      description: "Developed responsive web interfaces for enterprise clients. Created reusable component libraries that increased development speed by 30%. Collaborated with UX/UI designers to implement pixel-perfect designs.",
      technologies: ["JavaScript", "React", "SASS", "Redux", "Jest"]
    },
    {
      id: "job3",
      company: "StartupXYZ",
      position: "Junior Developer",
      startDate: "2018-01",
      endDate: "2019-02",
      location: "Austin, TX",
      description: "Built and maintained web applications for early-stage startup. Implemented client-side features and UI components. Assisted in setting up CI/CD pipelines and improving development workflows.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"]
    }
  ];

  // Format date based on locale
  const formatDate = (dateString: string | null) => {
    if (!dateString) return t('experience.present');
    
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <section id="experience" className="py-20">
      <div className="container-section">
        <h2 className="section-title">{t('experience.title')}</h2>
        
        <div className="mt-10 space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {experiences.map((job) => (
              <AccordionItem key={job.id} value={job.id} className="card-hover">
                <Card className="border-none shadow-none">
                  <CardHeader className="p-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex flex-col sm:flex-row sm:justify-between w-full text-left items-start sm:items-center gap-2">
                        <div>
                          <CardTitle className="text-xl">{job.position}</CardTitle>
                          <CardDescription className="text-base font-medium mt-1">
                            {job.company}
                          </CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          {formatDate(job.startDate)} - {formatDate(job.endDate)}
                        </div>
                      </div>
                    </AccordionTrigger>
                  </CardHeader>
                  <AccordionContent>
                    <CardContent className="pt-4 pb-6 px-6">
                      <div className="flex items-center mb-4 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{t('experience.location')}: {job.location}</span>
                      </div>
                      
                      <p className="mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {job.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Experience;
