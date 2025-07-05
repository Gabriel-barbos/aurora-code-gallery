import js from "../assets/icons-globe/javascript.svg"
import node from "../assets/icons-globe/node.png"
import mongo from "../assets/icons-globe/mongo.png"
import react from "../assets/icons-globe/react.png"
import tailwind from "../assets/icons-globe/tailwind.png"
import reactNative from "../assets/icons-globe/react-native.png"
import next from "../assets/icons-globe/next.png"
import typescript from "../assets/icons-globe/typescript.png"
import firebase from "../assets/icons-globe/firebase.png"
import python from "../assets/icons-globe/python.png"
import html from "../assets/icons-globe/html.png"
import css from "../assets/icons-globe/css.png"
import sql from "../assets/icons-globe/mysql.png"
import powerbi from "../assets/icons-globe/powerbi.png"

import impermaq from "../assets/projects/impermaq (2).png";
import vendas from "../assets/projects/vendas.png";
import campusface from "../assets/projects/campusface.png";
import fatecoleta from "../assets/projects/fatecoleta.png"
import nutrihub from "../assets/projects/nutrihub-bg.png"
import devuhub from "../assets/projects/devhub.png"
import michele from "../assets/projects/michele-cortinass.png"
import tourlis from "../assets/projects/tourlis.png"
import miniprojeto from "../assets/projects/miniprojeto.png"
export interface Project {
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

export const projectsData: Project[] = [
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
      { name: 'React', icon: react },
      { name: 'Node.js', icon: node },
      { name: 'MongoDB', icon: mongo },
      { name: 'Tailwind CSS', icon: tailwind },
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
      { name: 'React', icon: react },
      { name: 'JavaScript', icon: js },
      { name: 'Node.js', icon: node },
      { name: 'MongoDB', icon: mongo },
    ],
  },
  {
    id: 3,
    title: 'CampusFace',
    description: 'Sistema mobile para controle de acesso com reconhecimento facial e QR code',
    features: [
      'Liberação de acesso com reconhecimento facial',
      'Sistema 100% mobile',
      'Cadastro de usuarios pelo celular',
      'Histórico de entrada de usuarios',
      
    ],
    image: campusface,
    previewUrl: 'https://sistema-de-vendas2.vercel.app/',
    repoUrl: 'https://github.com/Gabriel-barbos/SistemaDeVendas',
    technologies: [
      { name: 'React Native', icon: reactNative },
      { name: 'JavaScript', icon: js },
      { name: 'Node.js', icon: node },
      { name: 'MongoDB', icon: mongo },
    ],
  },
  {
    id: 4,
    title: 'FateColeta',
    description: 'Plataforma web para cadastro de pontos de coleta de reciclagem',
    features: [
      'Acessibilidade',
      'integração com Firebase',
      'Troca de Temas e Responsividade',
      'Interação com Maps',
      
    ],
    image: fatecoleta,
    previewUrl: 'https://www.figma.com/deck/TBCbQNAOopJBtAxGYEfZVl/fatecoleta---ux?node-id=1-32&t=L0Owh5S6iMojC1IJ-1',
    repoUrl: 'https://fatecoleta.vercel.app',
    technologies: [
      { name: 'Next', icon: next },
      { name: 'TypeScript', icon: typescript },
      { name: 'Firebase', icon: firebase },
      { name: 'Tailwind CSS', icon: tailwind },
    ],
  },
  {
    id: 5,
    title: 'Devhub',
    description: 'Rede Social voltada para o público tech',
    features: [
      'Lógica de Posts, Comentários e Threads',
      'Desenvolvido com FastAPI',
      'Troca de Temas e Responsividade',
      'Uso de componentes Shadcn',
      'Banco de dados não relacional',
    ],
    image: devuhub,
    previewUrl: '/public/docs/Devhub.pdf',
    repoUrl: 'https://github.com/Gabriel-barbos/Devhub.git',
    technologies: [
      { name: 'Next', icon: next },
      { name: 'TypeScript', icon: typescript },
      { name: 'Mongo DB', icon: mongo },
      { name: 'Python', icon: python },
    ],
  },
  {
    id: 6,
    title: 'Nutrihub',
    description: 'Projeto Colaborativo Internacional para o desenvolvimento de um sistema de nutrição',
    features: [
      'Projeto em colaboração com estudantes Colombianos',
      'Ler codigo de barras de Alimentos',
      'Integração com API da tabela nutricional',
      'Metodologia SCRUM',
      
    ],
    image: nutrihub,
    previewUrl: '/public/docs/NutriHub.pdf',
    repoUrl: 'https://github.com/gabrielmeiradev/nutrihub',
    technologies: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'Javascript', icon: js },
      { name: 'Tailwind CSS', icon: tailwind },
    ],
  },
    {
    id: 7,
    title: 'Michele Cortinas',
    description: 'E-commerce para loja de cortinas',
    features: [
      'Recuperação de senha via E-mail',
      'Carrinho de compras',
      'Visualização de cada produto de acordo com a cor',
      'Solicitar orçamento',
      
    ],
    image: michele,
    previewUrl: '/public/docs/MicheleCortinas.pdf',
    repoUrl: 'https://github.com/Gabriel-barbos/Michele-Cortinas',
    technologies: [
      { name: 'React', icon: react },
      { name: 'MySQL', icon: sql },
      { name: 'Javascript', icon: js },
      { name: 'Node.Js', icon: node },
    ],
  },
    {
    id: 8,
    title: 'Tourlis',
    description: 'Site sobre turismo Sustentável com métricas avançadas',
    features: [
      'Integração com PowerBi',
      'Responsivo',
      'Quiz Interativo',
      'Metodologia SCRUM',
      
    ],
    image: tourlis,
    previewUrl: 'https://youtu.be/TsgTKow4El0?si=g6CTXUWCz50tbaaO',
    repoUrl: 'https://github.com/Gabriel-barbos/Tourlis"',
    technologies: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'Javascript', icon: js },
      { name: 'Power BI', icon: powerbi },
    ],
  },
    {
    id: 9,
    title: 'React Native HUB',
    description: 'Projeto desenvolvido para exercitar conceitos do React Native',
    features: [
      'Navegação entre telas',
      'Troca de temas',
      'Asyng Storage',
      'Design responsivo',
      
    ],
    image: miniprojeto,
    previewUrl: 'https://snack.expo.dev/@gabriel.barbosaa/mini-projetos',
    repoUrl: 'https://snack.expo.dev/@gabriel.barbosaa/mini-projetos',
    technologies: [
      { name: 'React Native', icon: reactNative },
      { name: 'Node', icon: node },
      { name: 'Javascript', icon: js },
      { name: 'Tailwind CSS', icon: tailwind },
    ],
  },
];