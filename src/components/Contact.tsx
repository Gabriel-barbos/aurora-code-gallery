import React, { useState, createContext, useContext, useRef, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import wpp from "../assets/wpp.png";
import { useLanguage } from '../contexts/LanguageContext';

// Funções auxiliares e componentes de 3D Card (CardContainer, CardBody, CardItem, useMouseEnter) mantidos iguais...

const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={`py-20 flex items-center justify-center ${containerClassName ?? ''}`}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`flex items-center justify-center relative transition-all duration-200 ease-linear ${className ?? ''}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] ${className ?? ''}`}>
      {children}
    </div>
  );
};

const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <Tag ref={ref} className={`w-fit transition duration-200 ease-linear ${className ?? ''}`} {...rest}>
      {children}
    </Tag>
  );
};

const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(undefined);

const WhatsAppCard = () => {
  const { t } = useLanguage();
  const whatsappNumber = "+5511994407006";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`;

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-background relative group/card hover:shadow-2xl hover:shadow-primary/[0.1] border-border w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ={50} className="text-xl font-bold text-foreground">
          {t('contact.whatsapp.title')}
        </CardItem>
        <CardItem as="p" translateZ={60} className="text-muted-foreground text-sm max-w-sm mt-2">
          {t('contact.whatsapp.subtitle')}
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-4">
          <div className="h-60 w-full bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
            <img
              src={wpp}
              alt={t('contact.whatsapp.logoAlt')}
              className="h-46 w-46 object-contain"
            />
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem as="p" translateZ={20} className="text-xs font-normal text-muted-foreground">
            {t('contact.whatsapp.quickReply')}
          </CardItem>
          <CardItem
            as="a"
            translateZ={20}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-green-500 text-white text-xs font-bold hover:bg-green-600 transition-colors"
          >
            {t('contact.whatsapp.openButton')}
          </CardItem>
        </div>
        <CardItem translateZ={30} className="mt-4 text-center text-sm text-foreground">
          {whatsappNumber}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = {
    email: 'gabriel.barbosa79@outlook.com',
    phone: '+55 11 99440 7006',
    location: 'São Paulo, SP',
    socials: [
      { name: 'Github', icon: Github, url: 'https://github.com/Gabriel-barbos' },
      { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/gabriel-barbosa-da-silva-35bb19256/' },
    ]
  };

  return (
    <section id="contact" className="py-20">
      <div className="container-section">
        <h2 className="section-title">{t('contact.title')}</h2>

        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          {/* 3D WhatsApp Card */}
          <div className="flex justify-center">
            <WhatsAppCard />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t('contact.email')}</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t('contact.phone')}</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t('contact.location')}</h3>
                <p className="text-muted-foreground">{contactInfo.location}</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold text-lg mb-4">{t('contact.socialMedia')}</h3>
              <div className="flex space-x-4">
                {contactInfo.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
