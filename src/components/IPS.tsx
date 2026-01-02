
import React, { useState, useEffect, useRef } from 'react';
import { IPS } from "@/constants"
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

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      {/* Background Ambience */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-start pt-20 md:pt-24"
      >
        {/* Header */}
        <div className="w-full px-8 md:px-12 lg:px-20 z-20 pointer-events-none shrink-0">
          <header className="space-y-3 max-w-[1400px] mx-auto animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <h3 className="text-xs md:text-sm font-medium uppercase tracking-widest text-neutral-400">The Portfolio</h3>
            </div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-none text-white">
              Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">IPs</span>
            </h1>
          </header>
        </div>

        {/* Cards Container */}
        <div
          ref={cardsContainerRef}
          className="flex-1 flex items-center gap-8 md:gap-16 px-[5vw] md:px-[10vw] will-change-transform min-h-0"
          style={{ transform: `translateX(${translateX}px)`, transition: 'transform 0.05s linear' }}
        >
          {IPS.map((ip, index) => {
            const imageParallax = (translateX * 0.05);

            return (
              <div
                key={ip.id}
                className="flex-shrink-0 w-[85vw] md:w-[450px] lg:w-[500px] aspect-[3/4] group relative cursor-pointer rounded-[32px] overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-500 bg-[#0A0A0A]"
                onClick={() => setSelectedIP(ip)}
              >
                {/* Image Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div
                    className="absolute inset-0 w-[120%] h-full -left-[10%] will-change-transform scale-110 group-hover:scale-100 transition-transform duration-700"
                    style={{ transform: `translateX(${imageParallax}px)` }}
                  >
                    <img
                      src={ip.image}
                      alt={ip.name}
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                </div>

                {/* Content Layer */}
                <div className="relative z-20 h-full p-8 flex flex-col justify-end space-y-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-left">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-orange-500 uppercase tracking-wider mb-3">
                      {ip.genre}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-none text-white mb-2">
                      {ip.name}
                    </h2>
                    <p className="text-base text-neutral-400 line-clamp-2 max-w-sm group-hover:text-neutral-300 transition-colors">
                      {ip.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="text-xs font-bold uppercase tracking-widest text-white">View Details</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="w-full px-8 md:px-12 lg:px-20 pb-12 pt-4 z-20 shrink-0">
          <div className="max-w-[1400px] mx-auto flex items-center gap-6">
            <span className="text-xs font-medium text-orange-500">01</span>
            <div className="relative h-[2px] w-full bg-white/10 rounded-full overflow-hidden flex-1">
              <div
                className="absolute top-0 left-0 h-full bg-orange-500 transition-all duration-100 ease-out"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            <span className="text-xs font-medium text-white/50">0{IPS.length}</span>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedIP && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-in fade-in zoom-in-95 duration-300">
          <div className="bg-[#0A0A0A] w-full max-w-[1200px] border border-white/10 rounded-[32px] overflow-hidden flex flex-col lg:flex-row max-h-[90vh] shadow-2xl relative">

            <button
              onClick={() => setSelectedIP(null)}
              className="absolute top-6 right-6 z-30 text-white hover:rotate-90 transition-transform bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-full lg:w-1/2 h-[300px] lg:h-auto overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10 lg:bg-gradient-to-t" />
              <img src={selectedIP.image} alt={selectedIP.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>

            <div className="p-8 lg:p-12 w-full lg:w-1/2 flex flex-col justify-between overflow-y-auto bg-gradient-to-b from-[#0A0A0A] to-black">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider">
                    {selectedIP.genre}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-none text-white">{selectedIP.name}</h2>
                </div>
                <p className="text-lg text-neutral-400 font-light leading-relaxed">{selectedIP.description}</p>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                  {[
                    { label: 'Format', value: selectedIP.format },
                    { label: 'Experience', value: selectedIP.promise },
                    { label: 'Scale', value: selectedIP.scale },
                    { label: 'Status', value: selectedIP.availability }
                  ].map((field, idx) => (
                    <div key={idx} className="space-y-1">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{field.label}</h4>
                      <p className="text-sm text-white font-medium">{field.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button className="w-full py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors text-xs shadow-lg shadow-white/5">
                  Enquire for Partnership
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IPs;
