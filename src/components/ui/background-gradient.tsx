import React from "react";

interface BackgroundGradientProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
  className = "",
  containerClassName = "",
}) => {
  return (
    <div
      className={`relative group/card ${containerClassName}`}
    >
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur-sm opacity-60 group-hover/card:opacity-90 transition-all duration-700 ease-in-out ${containerClassName}`}
        style={{
          animation: 'gradient-shift 4s ease-in-out infinite alternate'
        }}
      />
      <div
        className={`relative bg-background/95 backdrop-blur-sm rounded-lg ${className}`}
      >
        {children}
        <style jsx>{`
          @keyframes gradient-shift {
            0% { filter: hue-rotate(0deg) blur(2px); }
            100% { filter: hue-rotate(30deg) blur(1px); }
          }
        `}</style>
      </div>
    </div>
  );
};