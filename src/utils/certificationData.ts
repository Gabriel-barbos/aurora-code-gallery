import google from "../assets/icons/google1.png";
import ibm from "../assets/icons/ibm1.png";
import azure from "../assets/icons/azure.png";
import santander from "../assets/icons/santander.png";
import dio from "../assets/icons/dio2.png";
import bradesco from "../assets/icons/bradesco.png";
import jovem from "../assets/icons/eng.png";
export interface Certification {
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

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Google Cloud Computing Foundations Certificate",
    issuer: "Google Cloud",
    issuerLogo: google,
    date: "2024-05-26",
    credentialUrl: "https://www.credly.com/badges/adef3268-9dfe-496f-918d-26e46640255a/public_url",
    skills: ["Cloud Architecture", "Virtual Machine", "Ai", "Cloud Storage", "Cloud Network"],
    type: "certification",
    theme: "special"
  },
  {
    id: 2,
    name: "Introdução À Gestão De Projetos",
    issuer: "Bradesco",
    issuerLogo: bradesco,
    date: "2024-02-20",
    credentialUrl: "https://lms.ev.org.br/mpls/web/Lms/UnifiedSearch/PageUnifiedSearch.aspx?elementID=482&filtersByContentType=WEB",
    skills: ["Projects", "Management", "Software development"],
    type: "certification",
    theme: "santander"
  },
  {
    id: 3,
    name: "DIO: Conceitos Fundamentais de IA",
    issuer: "Digital Innovation One",
    issuerLogo: dio,
    date: "2025-02-08",
    credentialUrl: "/public/docs/IA.pdf",
    skills: ["Machine Learning", "AI", "prompt engineering"],
    type: "certification",
    theme: "dio"
  },
  { 
    id: 4,
    name: "Microsoft Azure: Deploy a website to Azure with Azure App Service",
    issuer: "Microsoft",
    issuerLogo: azure,
    date: "2025-03-26",
    credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/GabrielBarbosa-4747/QSPLB63E?sharingId=F1C330B23F9BEFC9",
    skills: ["ASP.NET", "Cloud Functions", "App Engine", "C#"],
    type: "course",
    theme: "azure"
  },
  {
    id: 5,
    name: "Google Cloud Computing Foundations: Networking & Security in Google Cloud",
    issuer: "Google Cloud",
    issuerLogo: google,
    date: "2025-05-26",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/e6218dc7-e424-4687-a921-181ddfb57c80/badges/15805176",
    skills: ["AI", "Machine Learning", "Watson", "Expert Level"],
    type: "course",
    theme: "google"
  },
  {
    id: 6,
    name: "IBM Certified Technical Advocate - Cloud v5",
    issuer: "IBM",
    issuerLogo: ibm,
    date: "2024-03-22",
    credentialUrl: "#",
    skills: ["AI", "Machine Learning", "Watson", "Cloud Computing"],
    type: "course",
    theme: "ibm"
  },
  {
    id: 7,
    name: "Introdução ao Git e ao GitHub",
    issuer: "Digital Innovation One",
    issuerLogo: dio,
    date: "2023-12-17",
    credentialUrl: "/public/docs/Git.pdf",
    skills: ["Git", "Github", "CLI", "Version Control"],
    type: "course",
    theme: "dio"
  },
  {
    id: 8,
    name: "Construindo seu Portfólio Front-end do Zero com HTML, CSS e JavaScript",
    issuer: "Digital Innovation One",
    issuerLogo: dio,
    date: "2024-04-18",
    credentialUrl: "/public/docs/Portfolio.pdf",
    skills: ["JavaScript", "React", "CSS"],
    type: "course",
    theme: "dio"
  },
  {
    id: 9,
    name: "Microsoft Azure: Build web apps with ASP.NET Core for beginners",
    issuer: "Microsoft",
    issuerLogo: azure,
    date: "2025-03-19",
    credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/GabrielBarbosa-4747/FVFABK6X?sharingId=F1C330B23F9BEFC9",
    skills: ["ASP.NET", "Cloud Functions", "App Engine", "C#"],
    type: "course",
    theme: "azure"
  },
  {
    id: 10,
    name: "Microsoft Azure Fundamentals: Describe Azure architecture and services",
    issuer: "Microsoft",
    issuerLogo: azure,
    date: "2025-03-12",
    credentialUrl: "https://learn.microsoft.com/en-us/users/gabrielbarbosa-4747/achievements/wzhuy9xn",
    skills: ["Azure", "Cloud Computing", "Infrastructure"],
    type: "certification",
    theme: "azure"
  },
  {
    id: 11,
    name: "Google Cloud Computing Foundations: Infrastructure in Google Cloud",
    issuer: "Google",
    issuerLogo: google,
    date: "2025-05-09",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/e6218dc7-e424-4687-a921-181ddfb57c80/badges/15624870",
    skills: ["Google Cloud", "Cloud Computing", "Infrastructure"],
    type: "certification",
    theme: "google"
  },
  {
    id: 13,
    name: "Google Cloud Computing Foundations: Networking & Security in Google Cloud",
    issuer: "Google",
    issuerLogo: google,
    date: "2025-05-16",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/e6218dc7-e424-4687-a921-181ddfb57c80/badges/15805176",
    skills: ["Google Cloud", "Cloud Computing", "Infrastructure", "Network", "Security"],
    type: "certification",
    theme: "google"
  },
  {
    id: 14,
    name: "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud",
    issuer: "Google",
    issuerLogo: google,
    date: "2025-05-23",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/e6218dc7-e424-4687-a921-181ddfb57c80/badges/15996851",
    skills: ["Google Cloud", "Cloud Computing", "AI", "Network", "Machine Learning"],
    type: "course",
    theme: "google"
  },
  {
    id: 15,
    name: "Curso de Contrução de Drones",
    issuer: "Jovem Engenheiro",
    issuerLogo: jovem,
    date: "2019-11-22",
    credentialUrl: "#",
    skills: ["SketchUp", "3D Modeling", "Electronics", "Arduino"],
    type: "course",
    theme: "default"
  },
];