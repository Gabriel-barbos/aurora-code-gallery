import React from 'react';

export const BackgroundGradient = ({ children, className = "", containerClassName = "" }) => {
  return (
    <div className={`relative p-[4px] group ${containerClassName}`}>
      <div
        className="absolute inset-0 rounded-[22px] p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500 opacity-75 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f97316, #10b981, #3b82f6)',
          backgroundSize: '400% 400%',
          animation: 'gradient-animation 8s ease infinite',
        }}
      />
      <div className={`relative bg-white dark:bg-zinc-900 rounded-[20px] ${className}`}>
        {children}
      </div>
      <style jsx>{`
        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};