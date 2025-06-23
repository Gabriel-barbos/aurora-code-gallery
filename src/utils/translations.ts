/* eslint-disable @typescript-eslint/no-explicit-any */

export type Locale = 'en' | 'pt';

interface Translations {
  [locale: string]: {
    [key: string]: any;
  };
}

// Translation object structure
export const translations: Translations = {
  en: {

    description: {
      part1: 'Software Development student ',
      part2: 'committed to creating ',
      highlight: 'innovative and efficient solutions',
      part3: ' for diverse problems.',
    },

  technologiesIntro: {
  part1: 'Knowledge in the main ',
  highlight: 'Technologies',
  part2: ' on the market',
},
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Certifications',
      tools: 'Tools',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I\'m',
      role: 'Software Developer',
      cta: 'My projects',
      download: 'Download CV',
    },
    about: {
      title: 'About Me',
      connect: 'Connect With Me',
      resume: 'Resume',
    },
    skills: {
      title: 'Technologies',
      basic: 'Basic',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
    },
    projects: {
      title: 'Projects',
      viewPreview: 'View Preview',
      viewRepository: 'Repository',
      techUsed: 'Technologies Used:',
    },
    experience: {
      title: 'Work Experience',
      present: 'Present',
      location: 'Location',
    },
    education: {
      title: 'Education & Language',
      degree: 'Degree',
      institution: 'Institution',
      period: 'Period',
      languages: 'Languages',
    },
    certifications: {
      title: 'Courses & Certifications',
      issued: 'Issued by:',
      date: 'Date:',
    },
    tools: {
      title: 'Tools & Software',
    },
    contact: {
      title: 'Contact Me',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Your message has been sent!',
      error: 'There was an error sending your message.',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Email is invalid',
      messageRequired: 'Message is required',
    },
  },
  pt: {

    description: {
      part1: 'Estudante de Desenvolvimento de Software Multiplataforma ',
      part2: 'empenhado em criar ',
      highlight: 'soluções inovadoras e eficientes',
      part3: ' para problemas diversos.',
    },

technologiesIntro: {
  part1: 'Conhecimento nas principais ',
  highlight: 'Tecnologias',
  part2: ' do mercado',
},

    nav: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      experience: 'Experiência',
      education: 'Formação',
      certifications: 'Certificados',
      tools: 'Ferramentas',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      role: 'Desenvolvedor de Software',
      cta: 'Meus projetos',
      download: 'Baixar Currículo',
    },
    about: {
      title: 'Sobre Mim',
      connect: 'Conecte-se Comigo',
      resume: 'Currículo',
    },
    skills: {
      title: 'Tecnologias',
      basic: 'Básico',
      intermediate: 'Intermediário',
      advanced: 'Avançado',
    },
    projects: {
      title: 'Projetos',
      viewPreview: 'Ver Prévia',
      viewRepository: 'Repositório',
      techUsed: 'Tecnologias Utilizadas:',
    },
    experience: {
      title: 'Experiência Profissional',
      present: 'Presente',
      location: 'Local',
    },
    education: {
      title: 'Formação Acadêmica & Idiomas',
      degree: 'Graduação',
      institution: 'Instituição',
      period: 'Período',
      languages: 'Idiomas',
    },
    certifications: {
      title: 'Cursos & Certificados',
      issued: 'Emitido por:',
      date: 'Data:',
    },
    tools: {
      title: 'Ferramentas & Software',
    },
    contact: {
      title: 'Contate-me',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      success: 'Sua mensagem foi enviada!',
      error: 'Houve um erro ao enviar sua mensagem.',
      nameRequired: 'Nome é obrigatório',
      emailRequired: 'Email é obrigatório',
      emailInvalid: 'Email é inválido',
      messageRequired: 'Mensagem é obrigatória',
    },
  },
};
