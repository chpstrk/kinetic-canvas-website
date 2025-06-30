
import React from 'react';

interface GradientOrbProps {
  mousePosition: { x: number; y: number };
}

export const GradientOrb: React.FC<GradientOrbProps> = ({ mousePosition }) => {
  return (
    <>
      {/* Main gradient orb that follows mouse */}
      <div 
        className="fixed pointer-events-none z-0 w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      {/* Secondary floating orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute w-64 h-64 rounded-full blur-2xl opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #ec4899 0%, #f59e0b 100%)',
            top: '20%',
            right: '10%',
            animationDuration: '4s',
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full blur-2xl opacity-25 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #10b981 0%, #3b82f6 100%)',
            bottom: '30%',
            left: '15%',
            animationDuration: '6s',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute w-32 h-32 rounded-full blur-xl opacity-30 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, #06b6d4 100%)',
            top: '60%',
            right: '30%',
            animationDuration: '5s',
            animationDelay: '1s',
          }}
        />
      </div>
    </>
  );
};
