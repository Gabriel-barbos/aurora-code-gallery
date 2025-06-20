import React from 'react';
import { BackgroundGradient } from './background-gradient';
import { Badge } from './badge';
import { Button } from './button';
import { ExternalLink, Calendar, Award, Star } from 'lucide-react';

const SpecialCertificationCard = ({ cert, formatDate }) => {
  return (
    <BackgroundGradient 
      className="p-6 max-w-sm mx-auto"
      containerClassName="hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 cursor-pointer"
    >
      {/* Special Badge */}
      <div className="absolute -top-2 -right-2 z-10">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
          <Star className="h-3 w-3 mr-1 fill-current" />
          DESTAQUE
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center mb-4">
        <div className="h-20 w-24 flex items-center justify-center overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm shadow-lg border border-white/20">
          <img 
            src={cert.issuerLogo} 
            alt={`${cert.issuer} logo`}
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/100x50?text=${cert.issuer.charAt(0)}`;
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-4">
        <h3 className="text-xl font-bold text-black dark:text-white leading-tight">
          {cert.name}
        </h3>
        
        <div className="flex items-center justify-center space-x-2 text-sm">
          <Award className="h-4 w-4 text-purple-600" />
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {cert.issuer}
          </span>
        </div>

        <div className="flex items-center justify-center space-x-2 text-sm">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600 dark:text-gray-400">
            {formatDate(cert.date)}
          </span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2">
          {cert.skills.map((skill, index) => (
            <Badge 
              key={index} 
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 hover:scale-105 transition-transform duration-200"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Special Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {cert.description || "Certificação de destaque com reconhecimento internacional e alta relevância no mercado."}
        </p>

        {/* Action Button */}
        <Button 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
          asChild
        >
          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Ver Credencial
          </a>
        </Button>
      </div>
    </BackgroundGradient>
  );
};

export default SpecialCertificationCard;