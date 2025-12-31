
import React, { useState, useEffect } from 'react';

import { METRICS } from '@/constants';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="home" className="relative">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-110"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20 grayscale contrast-125"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
        
        <div className="relative z-20 max-w-[1800px] mx-auto px-8 md:px-12 lg:px-20 text-center space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full mb-2">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/70">Campus Experience Studio</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight uppercase">
            Lynqup — Building <br className="hidden lg:block" /> Campus Music IPs
          </h1>
          <p className="text-base md:text-lg text-neutral-500 max-w-3xl mx-auto font-light leading-relaxed">
            A campus-first experience studio creating scalable music festival and innovation IPs in long-term partnership with colleges across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black px-10 py-4 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-neutral-200 transition-all transform active:scale-95"
            >
              Partner With Us
            </button>
            <button 
              onClick={() => scrollToSection('ips')}
              className="border border-white/20 bg-white/5 backdrop-blur-md text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest text-[10px] hover:border-white transition-all transform active:scale-95"
            >
              Explore IPs
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-neutral-700 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* BRAND POSITIONING */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative z-20">
        <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-20 text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-8 uppercase tracking-tighter leading-none">
            Campus-First. IP-Driven. Scalable.
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed max-w-4xl mx-auto">
            Lynqup designs, owns, and operates original campus experience IPs built to scale across institutions with consistency, compliance, and cultural relevance.
          </p>
        </div>
      </section>

      {/* EXPERIENCE ECOSYSTEM */}
      <section className="py-32 bg-black relative z-20">
        <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-20">
          <div className="mb-16 text-left border-l-4 border-white pl-8">
            <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-600 mb-2">Portfolio</h3>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Ecosystem</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5">
            {[
              { title: 'Music Festivals & EDM Experiences', icon: 'M' },
              { title: 'Campus Tours & Multi-College Editions', icon: 'T' },
              { title: 'Hackathons & Innovation IPs', icon: 'H' },
              { title: 'Cultural & Youth Engagement Formats', icon: 'C' },
              { title: 'Brand & Sponsor Activations', icon: 'B' },
              { title: 'Future-Ready Digital Experiences', icon: 'D' }
            ].map((item, idx) => (
              <div key={idx} className="group bg-black p-12 md:p-16 hover:bg-white/[0.02] transition-all relative overflow-hidden min-h-[280px] flex items-end">
                <div className="absolute top-6 right-6 text-[8rem] font-black opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-all duration-700">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight max-w-[240px] leading-tight group-hover:text-white transition-colors text-neutral-600 relative z-10">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCALE & OUTREACH METRICS */}
      <section className="py-32 bg-[#050505] relative z-20">
        <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="bg-black p-12 md:p-16 flex flex-col justify-center text-center space-y-4 group hover:bg-white/[0.01] transition-all">
                <span className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase group-hover:scale-105 transition-transform duration-500">{metric.value}</span>
                <p className="text-[9px] text-neutral-600 uppercase tracking-[0.3em] font-bold leading-relaxed">{metric.label}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 max-w-4xl mx-auto text-center">
            <p className="text-[9px] text-neutral-700 uppercase tracking-[0.2em] font-medium leading-loose">
              Disclaimer: Engagement metrics represent cumulative participation across Lynqup IPs, campus editions, and collaborations. Figures indicate reach and execution scale, not financial or contractual claims.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
