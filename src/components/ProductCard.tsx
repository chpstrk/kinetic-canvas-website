
import React, { useState } from 'react';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, image, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 transition-all duration-500 hover:scale-105 hover:bg-white/15 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-white/10 to-white/5 flex-shrink-0">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="flex-grow flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300 line-clamp-2">
            {name}
          </h3>
          
          <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
    </div>
  );
};
