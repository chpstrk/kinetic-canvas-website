
import React, { useState } from 'react';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  fullDescription: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, image, description, fullDescription }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 transition-all duration-500 hover:scale-105 hover:bg-white/15 min-h-[400px] flex flex-col perspective-1000"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsFlipped(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsFlipped(false);
      }}
      style={{ perspective: '1000px' }}
    >
      {/* Hover glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      
      <div 
        className="relative z-10 flex flex-col h-full transition-transform duration-700 preserve-3d"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front side */}
        <div 
          className="absolute inset-0 flex flex-col h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-white/10 to-white/5 flex-shrink-0 max-h-48">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          <div className="flex-grow flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300 line-clamp-2">
              {name}
            </h3>
            
            <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 line-clamp-3">
              {description}
            </p>
          </div>
        </div>

        {/* Back side */}
        <div 
          className="absolute inset-0 flex flex-col h-full justify-center items-center text-center p-6 backface-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h3 className="text-xl font-bold text-white mb-6 line-clamp-2">
            {name}
          </h3>
          <p className="text-sm text-white/90 leading-relaxed">
            {fullDescription}
          </p>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
    </div>
  );
};
