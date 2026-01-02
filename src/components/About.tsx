
import React from 'react';

const About: React.FC = () => {
  return (
    <div id="about" className="py-32 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-neutral-800/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        <header className="mb-24 space-y-4 animate-in slide-in-from-bottom-8 duration-700 fade-in">
         
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-none text-white">
            About <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Lynqup</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Column: Story */}
          <div className="space-y-12">
            <section className="space-y-8">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-white flex items-center gap-4">
                Organizational Overview
                <div className="h-px flex-1 bg-white/10"></div>
              </h2>
              <div className="space-y-8 text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                <p>
                  Lynqup is a <span className="text-white font-medium">campus experience and music IP studio</span> focused on shaping student culture through high-quality, repeatable, and scalable event formats.
                </p>
                <p>
                  The organization operates as an experience architect, working closely with institutions to deliver compliant, high-impact campus experiences.
                </p>

                <div className="bg-gradient-to-br from-white/[0.03] to-transparent p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                  <p className="text-white font-medium text-sm md:text-base uppercase tracking-wide leading-relaxed relative z-10">
                    <span className="text-orange-500 font-bold">Note:</span> Lynqup does not operate as a freelance event service provider or one-off show organizer.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Functions */}
          <div className="space-y-12">
            <section className="space-y-8">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-white flex items-center gap-4">
                What Lynqup Does
                <div className="h-px flex-1 bg-white/10"></div>
              </h2>
              <ul className="space-y-4">
                {[
                  'Conceptualization and ownership of campus IPs',
                  'Festival and tour format design',
                  'Experience standardization across campuses',
                  'Long-term institutional collaboration',
                  'Brand, artist, and ecosystem alignment'
                ].map((item, idx) => (
                  <li key={idx} className="group p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-orange-500/30 hover:bg-white/[0.02] transition-all duration-300 flex items-start gap-6 cursor-default">
                    <span className="text-2xl font-black text-neutral-700 group-hover:text-orange-500 transition-colors duration-300 leading-none mt-1">
                      0{idx + 1}
                    </span>
                    <p className="text-lg text-neutral-300 font-light tracking-tight leading-snug group-hover:text-white transition-colors">{item}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
