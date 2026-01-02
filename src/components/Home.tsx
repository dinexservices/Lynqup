"use client"
import React, { useState, useEffect } from 'react';
import BrandMarquee from './BrandMarquee';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(2); // Start with center card (EDM/Rage Night as index 2 based on previous mapping)

  useEffect(() => {
    // Auto-rotate cards every 4 seconds
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
      const navHeight = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="home" className="relative min-h-screen bg-[#050505] text-white selection:bg-orange-500/30">

      {/* GLOBAL BACKGROUND AMBIENCE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-red-600/5 blur-[100px] rounded-full mix-blend-screen opacity-50" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 border-b border-white/5">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">

          {/* Text Side */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-8 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Immediate Positioning</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-7xl font-light tracking-tight leading-[1.1]">
              Lynqup — Building <br />
              <span className="font-semibold text-white relative">
                Campus Music &
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent"></span>
              </span> <br />
              Experience IPs
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed font-light">
              Lynqup is a campus-first experience studio creating scalable music festival and innovation IPs in long-term partnership with colleges across India.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full transition-all duration-300 shadow-lg shadow-orange-900/20 group flex items-center gap-2"
              >
                <span className="text-sm font-bold uppercase tracking-wide">Partner With Lynqup</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button
                onClick={() => scrollToSection('ips')}
                className="px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <span className="text-sm font-bold uppercase tracking-wide">Explore Our IPs</span>
              </button>
            </div>
          </div>


          {/* Visual Side (Card Visual) */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative -translate-y-12 -translate-x-8 h-full">
            <div className="relative w-[500px] h-[600px] flex items-center justify-center perspective-1000">
              {/* Dynamic Card Stack */}
              {[
                {
                  id: 'tech',
                  icon: '💻',
                  image: '/images/hero_hackathon.png',
                  title: ['Tech &', 'Innovation'],
                  sub: 'Hackathons • Summits',
                  accent: 'cyan'
                },
                {
                  id: 'music',
                  icon: '🎤',
                  image: '/images/hero_concert.png',
                  title: ['Live', 'Harmony'],
                  sub: 'Concerts • Tours',
                  accent: 'purple'
                },
                {
                  id: 'edm',
                  icon: '🔥',
                  image: '/images/hero_edm.png',
                  title: ['Rage', 'Night'],
                  sub: 'EDM / House',
                  accent: 'orange'
                }
              ].map((card, index) => {
                // Logic to determine position based on active index
                // We want a cycle: 0 -> 1 -> 2 -> 0
                // Active card is at activeIndex.
                // Previous card (left) is (activeIndex - 1 + 3) % 3
                // Next card (right/back) is (activeIndex + 1) % 3

                // Simplify: We render all 3, but change their transform/z-index based on activeIndex
                const isActive = index === activeIndex;
                const isPrev = index === (activeIndex - 1 + 3) % 3;
                const isNext = index === (activeIndex + 1) % 3;

                let transformClass = '';
                let zIndex = 0;
                let opacity = 'opacity-40';
                let blur = 'blur-[2px]';

                if (isActive) {
                  transformClass = 'translate-x-[0%] translate-y-[0%] rotate-0 scale-110';
                  zIndex = 30;
                  opacity = 'opacity-100';
                  blur = 'blur-0';
                } else if (isPrev) {
                  transformClass = '-translate-x-[60%] -translate-y-[10%] -rotate-12 scale-90';
                  zIndex = 10;
                } else if (isNext) {
                  transformClass = 'translate-x-[60%] -translate-y-[10%] rotate-12 scale-90';
                  zIndex = 10;
                }

                const borderColors: { [key: string]: string } = {
                  cyan: 'border-cyan-500/50',
                  purple: 'border-purple-500/50',
                  orange: 'border-orange-500/50'
                };

                const glowColors: { [key: string]: string } = {
                  cyan: 'bg-cyan-500/20',
                  purple: 'bg-purple-500/20',
                  orange: 'bg-orange-500/20'
                };

                return (
                  <div
                    key={card.id}
                    className={`absolute top-1/2 left-1/2 w-[300px] h-[440px] bg-[#0A0A0A] border ${borderColors[card.accent]} rounded-[32px] p-2 transition-all duration-1000 ease-in-out shadow-2xl flex flex-col justify-between overflow-hidden cursor-pointer ${transformClass} -translate-x-1/2 -translate-y-1/2`}
                    style={{ zIndex }}
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Image Background */}
                    <div className={`absolute inset-0 z-0 ${opacity} transition-opacity duration-1000`}>
                      <img src={card.image} alt={card.id} className="w-full h-full object-cover rounded-[28px]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                      <div className="flex justify-between items-start">
                        <div className={`w-12 h-12 ${glowColors[card.accent]} backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 text-2xl shadow-lg`}>
                          {card.icon}
                        </div>
                        {isActive && <div className="px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest animate-pulse">Live</div>}
                      </div>

                      <div>
                        <h3 className="text-3xl font-black text-white leading-none uppercase tracking-tight drop-shadow-lg">
                          {card.title[0]} <br /> {card.title[1]}
                        </h3>
                        <p className={`mt-2 text-xs font-bold uppercase tracking-widest opacity-80 text-${card.accent}-400`}>
                          {card.sub}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>



      </section>

      {/* 1.5 BRAND MARQUEE */}
      <BrandMarquee />

      {/* 2.2 BRAND POSITIONING STATEMENT */}
      <section id="positioning" className="py-32 bg-[#050505] relative z-20 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight text-white">
            Campus-First. IP-Driven. Scalable.
          </h2>
          <p className="text-lg md:text-2xl text-neutral-500 font-light leading-relaxed max-w-4xl mx-auto">
            Lynqup designs, owns, and operates original campus experience IPs — from EDM nights to large-scale student festivals — built to scale across institutions with consistency, compliance, and cultural relevance.
          </p>
        </div>
      </section>

      {/* 2.3 OUR EXPERIENCE ECOSYSTEM */}
      {/* 2.3 OUR EXPERIENCE ECOSYSTEM */}
      <section className="py-32 bg-[#080808] relative z-20 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="mb-16 border-l-4 border-orange-500 pl-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Our Offerings</h3>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white">Experience Ecosystem</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Music Festivals & EDM Experiences', icon: 'zap' },
              { title: 'Campus Tours & Multi-College Editions', icon: 'map' },
              { title: 'Hackathons & Innovation IPs', icon: 'cpu' },
              { title: 'Cultural & Youth Engagement Formats', icon: 'palette' },
              { title: 'Brand & Sponsor Activations', icon: 'rocket' },
              { title: 'Student Community Building', icon: 'users' },
            ].map((item, idx) => (
              <div key={idx} className="group bg-[#0F0F0F] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-orange-500/30 hover:bg-[#141414] transition-all duration-300 relative overflow-hidden">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-neutral-400 group-hover:text-orange-500 border border-white/5 group-hover:border-orange-500/20">
                  {/* Using standard emojis for now as requested, but wrapping them in a nicer container. 
                      User asked for "change the icons" of ecosystem. I will swap to Lucide if imports allow, but to avoid large refactors without checking import block first, I will use simplified SVG placeholders or just Lucide if I can import them.
                      Actually, I will modify the map to render icons. I need to add Lucide imports.
                   */}
                  {item.icon === 'zap' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                  {item.icon === 'map' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>}
                  {item.icon === 'cpu' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  {item.icon === 'palette' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>}
                  {item.icon === 'rocket' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                  {item.icon === 'users' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                </div>
                <h3 className="text-xl font-bold text-neutral-200 group-hover:text-white transition-colors relative z-10 w-3/4">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.4 SCALE & OUTREACH METRICS */}
      <section className="py-32 bg-[#050505] relative z-20">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: '25+', label: 'Campus Editions Executed' },
              { value: '50K+', label: 'Student Footfall Across IPs' },
              { value: 'Multiple', label: 'Recurring College Partnerships' },
              { value: 'Multi-Genre', label: 'IP Portfolio (Music + Tech)' },
            ].map((metric, idx) => (
              <div key={idx} className="bg-[#0A0A0A] p-10 rounded-2xl border border-white/5 flex flex-col items-center text-center justify-center h-[240px] hover:border-white/20 transition-colors">
                <span className="text-4xl md:text-5xl font-bold text-white mb-4 block bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                  {metric.value}
                </span>
                <span className="text-sm font-medium text-neutral-500 uppercase tracking-widest leading-relaxed max-w-[180px]">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center border-t border-white/5 pt-8 max-w-3xl mx-auto">
            <p className="text-[10px] text-neutral-600 uppercase tracking-wider font-medium leading-relaxed">
              Disclaimer: Engagement metrics represent cumulative participation across Lynqup IPs, campus editions, and collaborations. Figures indicate reach and execution scale, not financial or contractual claims.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
