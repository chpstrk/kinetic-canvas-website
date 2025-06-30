
import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, avatar, quote }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 transition-all duration-500 hover:scale-105 hover:bg-white/15">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="relative">
            <img 
              src={avatar} 
              alt={name}
              className="w-12 h-12 rounded-full border-2 border-white/20 group-hover:border-blue-400/50 transition-colors duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
              {name}
            </h4>
            <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
              {role}
            </p>
          </div>
        </div>
        
        <blockquote className="text-white/80 italic leading-relaxed group-hover:text-white transition-colors duration-300">
          "{quote}"
        </blockquote>
      </div>

      {/* Subtle animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
    </div>
  );
};
