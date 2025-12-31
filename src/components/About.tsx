
import React from 'react';

const About: React.FC = () => {
  return (
    <div id="about" className="py-32 border-t border-white/5 bg-black">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-20">
        <header className="mb-20 space-y-4">
          <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-600">The Studio</h3>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            About Lynqup
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          <div className="space-y-16">
            <section className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tight border-b border-white/10 pb-6">Organizational Overview</h2>
              <div className="space-y-6 text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
                <p>
                  Lynqup is a campus experience and music IP studio focused on shaping student culture through high-quality, repeatable, and scalable event formats.
                </p>
                <p>
                  The organization operates as an IP owner and experience architect, working closely with institutions to deliver compliant, high-impact campus experiences.
                </p>
                <div className="bg-white/[0.02] p-10 border-l-4 border-white mt-8">
                  <p className="text-white font-black text-sm md:text-base uppercase tracking-wider italic leading-relaxed">
                    Lynqup does not operate as a freelance event service provider or one-off show organizer.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-16">
            <section className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tight border-b border-white/10 pb-6">What Lynqup Does</h2>
              <ul className="space-y-8">
                {[
                  'Conceptualization and ownership of campus IPs',
                  'Festival and tour format design',
                  'Experience standardization across campuses',
                  'Long-term institutional collaboration',
                  'Brand, artist, and ecosystem alignment'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-6 items-start group">
                    <span className="text-neutral-800 font-black text-3xl md:text-4xl leading-none group-hover:text-white transition-all duration-500">0{idx + 1}</span>
                    <p className="text-lg md:text-xl text-white font-medium tracking-tight leading-snug pt-0.5">{item}</p>
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
