
import React, { useState, useEffect, useRef } from 'react';
import {IPS} from "@/constants"
import { IP } from '@/Types';

const IPs: React.FC = () => {
  const [selectedIP, setSelectedIP] = useState<IP | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !cardsContainerRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const cardsWidth = cardsContainerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      const totalScrollableDistance = sectionHeight - viewportHeight;
      const currentScroll = -sectionRect.top;
      
      let progress = currentScroll / totalScrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress * 100);

      const maxTranslate = cardsWidth - viewportWidth + (viewportWidth * 0.1); 
      setTranslateX(-progress * maxTranslate);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      id="ips" 
      ref={sectionRef}
      className="relative bg-[#050505] border-t border-white/5"
      style={{ height: `${IPS.length * 70}vh` }} 
    >
      <div 
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center"
      >
        <div className="absolute top-24 left-0 w-full px-8 md:px-12 lg:px-20 z-20 pointer-events-none">
          <header className="space-y-4 max-w-[1800px] mx-auto">
            <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-600">The Portfolio</h3>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Our IPs
            </h1>
          </header>
        </div>

        <div 
          ref={cardsContainerRef}
          className="flex items-center gap-16 px-[10vw] md:px-[20vw]  will-change-transform"
          style={{ transform: `translateX(${translateX}px)`, transition: 'transform 0.1s ease-out' }}
        >
          {IPS.map((ip, index) => {
            const imageParallax = (translateX * 0.2);

            return (
              <div 
                key={ip.id} 
                className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] aspect-[4/5] md:aspect-[16/10] bg-black group relative cursor-pointer overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-700 shadow-2xl"
                onClick={() => setSelectedIP(ip)}
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div 
                    className="absolute inset-0 w-[140%] h-full -left-[20%] will-change-transform"
                    style={{ transform: `translateX(${imageParallax}px)` }}
                  >
                    <img 
                      src={ip.image} 
                      alt={ip.name} 
                      className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all duration-1000 ease-out scale-110 group-hover:scale-125"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                </div>

                <div className="relative z-20 h-full p-10 lg:p-16 flex flex-col justify-end space-y-6">
                  <div className="space-y-2">
                    <span className="text-[9px] md:text-[10px] font-bold text-neutral-500 uppercase tracking-[0.4em] block translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                      {ip.genre}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none group-hover:text-white transition-all duration-700">
                      {ip.name}
                    </h2>
                  </div>
                  <p className="text-neutral-500 text-base md:text-lg max-w-md font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    {ip.description}
                  </p>
                  <div className="pt-4 overflow-hidden">
                    <button className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-white pb-1 translate-y-12 group-hover:translate-y-0 transition-transform duration-700 delay-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-16 left-0 w-full px-8 md:px-12 lg:px-20 z-20">
          <div className="max-w-[1800px] mx-auto">
            <div className="relative h-[1.5px] w-full bg-white/10 overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            <div className="flex justify-between mt-6 text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-700">
              <div className="flex gap-8">
                <span className={scrollProgress < 25 ? 'text-white' : ''}>01</span>
                <span className={scrollProgress >= 25 && scrollProgress < 50 ? 'text-white' : ''}>02</span>
                <span className={scrollProgress >= 50 && scrollProgress < 75 ? 'text-white' : ''}>03</span>
                <span className={scrollProgress >= 75 ? 'text-white' : ''}>04</span>
              </div>
              <span className="animate-pulse tracking-[0.4em] hidden md:block">Scroll to Explore</span>
              <span className="hidden sm:block">LYNQUP v2.5.2</span>
            </div>
          </div>
        </div>
      </div>

      {selectedIP && (
        <div className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-500">
          <div className="bg-black w-full max-w-[1400px] border border-white/10 relative overflow-hidden flex flex-col lg:flex-row max-h-[85vh] shadow-2xl">
            <button 
              onClick={() => setSelectedIP(null)}
              className="absolute top-8 right-8 z-30 text-white hover:rotate-90 transition-transform bg-white/5 p-3 rounded-full backdrop-blur-xl border border-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full lg:w-1/2 h-[200px] lg:h-auto overflow-hidden">
              <img src={selectedIP.image} alt={selectedIP.name} className="w-full h-full object-cover grayscale brightness-50 contrast-110" />
            </div>
            <div className="p-10 lg:p-16 w-full lg:w-1/2 space-y-8 overflow-y-auto">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.4em]">{selectedIP.genre}</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">{selectedIP.name}</h2>
                <p className="text-xl text-neutral-400 font-light leading-relaxed">{selectedIP.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-white/10">
                {[
                  { label: 'Format', value: selectedIP.format },
                  { label: 'Experience', value: selectedIP.promise },
                  { label: 'Scale', value: selectedIP.scale },
                  { label: 'Status', value: selectedIP.availability }
                ].map((field, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600">{field.label}</h4>
                    <p className="text-base text-white font-medium uppercase tracking-tight">{field.value}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => setSelectedIP(null)} className="w-full bg-white text-black py-5 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-neutral-200 transition-all">Close Portfolio</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IPs;
