
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, BookOpen, GraduationCap } from 'lucide-react';
import { Badge } from './ui/badge';

interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Language {
  name: string;
  level: string;
  certificate?: string;
}

const Education = () => {
  const { t, locale } = useLanguage();
  
  // Sample education data - replace with your own
  const educationData: Education[] = [
    {
      degree: "Master of Computer Science",
      institution: "University of Technology",
      startDate: "2016-09",
      endDate: "2018-06",
      description: "Specialized in Software Engineering and Machine Learning. Thesis on 'Efficient Deep Learning Models for Mobile Applications'.",
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "State University",
      startDate: "2012-09",
      endDate: "2016-06",
      description: "Core curriculum in computer architecture, algorithms, and software development. Graduated with honors.",
    },
  ];

  // Sample language data - replace with your own
  const languageData: Language[] = [
    {
      name: "English",
      level: "C1 - Advanced",
      certificate: "TOEFL: 110/120",
    },
    {
      name: "Portuguese",
      level: "Native",
    },
    {
      name: "Spanish",
      level: "B2 - Upper Intermediate",
    },
  ];

  // Format date based on locale
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <section id="education" className="py-20 bg-primary/5">
      <div className="container-section">
        <h2 className="section-title">{t('education.title')}</h2>
        
        <Tabs defaultValue="education" className="mt-10">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">{t('education.title')}</span>
            </TabsTrigger>
            <TabsTrigger value="languages" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">{t('education.languages')}</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="education" className="space-y-6">
            {educationData.map((item, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div>
                      <CardTitle>{item.degree}</CardTitle>
                      <CardDescription className="text-base mt-1">{item.institution}</CardDescription>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>
                        {formatDate(item.startDate)} - {formatDate(item.endDate)}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="languages">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languageData.map((lang, index) => (
                <Card key={index} className="card-hover overflow-hidden h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {lang.name}
                      <Badge variant="outline" className="ml-2">{lang.level}</Badge>
                    </CardTitle>
                  </CardHeader>
                  {lang.certificate && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{lang.certificate}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Education;
