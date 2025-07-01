import React, { useEffect, useRef, useState } from 'react';
import { ParticleBackground } from '../components/ParticleBackground';
import { GradientOrb } from '../components/GradientOrb';
import { AnimatedText } from '../components/AnimatedText';
import { ProductCard } from '../components/ProductCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { MagneticButton } from '../components/MagneticButton';
import { ScrollReveal } from '../components/ScrollReveal';
import { SamplePopup } from '../components/SamplePopup';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const products = [
    {
      name: "The 'Apex' Tote",
      image: "https://i.ibb.co/952Yhsf/founder.png",
      description: "Your mobile command center",
      fullDescription: "Your mobile command center. Engineered with the structure and organization to carry your ambitions and lead with absolute control."
    },
    {
      name: "The 'Versa' Backpack", 
      image: "https://i.ibb.co/bgWBwNkX/architect.png",
      description: "From boardroom to construction site",
      fullDescription: "For a life in motion. A masterclass in functional elegance, designed to keep you agile and hands-free without ever compromising on style."
    },
    {
      name: "The 'Cadence' Crossbody",
      image: "https://i.ibb.co/0VBLBbcD/creator.png", 
      description: "Creative freedom, organized",
      fullDescription: "For the creative spark. Provides instant, frictionless access to your tools of inspiration, so you never lose your rhythm."
    },
    {
      name: "The 'Axiom' Satchel",
      image: "https://i.ibb.co/PGhbKLpM/consultant.png",
      description: "Professional precision",
      fullDescription: "A statement of authority. A sharp, structured silhouette that projects undeniable confidence and impeccable preparation in any high-stakes room."
    }
  ];

  const testimonials = [
    {
      name: "Aisha Khan",
      role: "Tech Founder",
      avatar: "https://i.pravatar.cc/48?u=founder",
      quote: "The 'Founder' Tote is my mobile command center. Walking into an investor pitch knowing exactly where my dongle and notebook are gives me a level of composure that is priceless. It's my professional armor."
    },
    {
      name: "Priya Sharma", 
      role: "Architect & Partner",
      avatar: "https://i.pravatar.cc/48?u=moreasdasfadkjg",
      quote: "My work takes me from the office to dusty construction sites. The 'Architect' Backpack is the first bag I've owned that looks chic in a client meeting but is practical enough for a site visit. It's a game-changer."
    },
    {
      name: "Dr. Meera Reddy",
      role: "Surgeon", 
      avatar: "https://i.pravatar.cc/48?u=indianqwertyuiopaaa",
      quote: "The 'Intelligent Folio' system is genius. After a 12-hour shift, I leave my main bag in my locker, take the 'Evening Folio' as a clutch, and feel like a new person. It's the end of the overstuffed 'everything bag'."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <ParticleBackground mousePosition={mousePosition} />
      <GradientOrb mousePosition={mousePosition} />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Morel Q
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problem" className="text-white/80 hover:text-white transition-colors duration-300 relative group">
                The Problem
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#solution" className="text-white/80 hover:text-white transition-colors duration-300 relative group">
                The Solution
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#testimonials" className="text-white/80 hover:text-white transition-colors duration-300 relative group">
                Our Community
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            <MagneticButton>
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Shop Collection
              </button>
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="problem" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <AnimatedText 
              text="The price of daily chaos... is your focus."
              className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
            />
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-white/80 leading-relaxed">
              Your day is a battle against small, silent frictions. The frantic search for keys. 
              The tangled earphones. The moment of panic. It's time for a new standard.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-16 relative">
              <div className="video-container mx-auto max-w-4xl relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl"></div>
                <iframe 
                  src="https://www.youtube.com/embed/waYejr0gjBY?autoplay=0&mute=0&loop=1&playlist=waYejr0gjBY&controls=1&rel=0"
                  className="w-full aspect-video rounded-3xl relative z-10"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="relative py-24 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-4">
                Never again.
              </h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">
                Introducing The Intelligent Collection
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-white/70 leading-relaxed">
                Morel Q is not a handbag. It's a high-performance productivity tool, 
                engineered with 'Intuitive Architecture' to eliminate daily friction and give you back your focus.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={product.name} delay={index * 0.1}>
                <ProductCard {...product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-4">
                From Our Community
              </h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Real Stories from Our "Sheroes"
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 0.1}>
                <TestimonialCard {...testimonial} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 bg-gradient-to-t from-black/40 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
              Your Day, Engineered.
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Ready to reclaim your focus?
            </p>
            <MagneticButton>
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-gradient-to-r from-white to-blue-100 text-slate-800 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Explore The Full Collection
              </button>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </footer>

      <SamplePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default Index;
