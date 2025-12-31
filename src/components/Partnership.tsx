
import React from 'react';

const Partnership: React.FC = () => {
  return (
    <div id="partnership" className="py-32 border-t border-white/5 bg-black">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-20">
        <header className="mb-20 space-y-4">
          <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-600">Collaboration</h3>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Partnership
          </h1>
        </header>

        {/* FLOW DIAGRAM */}
        <section className="mb-40">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-12 border-l-4 border-white pl-8 leading-none">The Flow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Campus discussion & alignment',
              'IP selection & finalization',
              'Institutional approvals',
              'Lynqup-led execution',
              'Post-event reporting'
            ].map((step, idx) => (
              <div key={idx} className="bg-white/[0.02] p-10 border border-white/10 relative group hover:bg-white/[0.05] transition-all min-h-[220px] flex flex-col justify-end">
                <span className="text-6xl font-black text-white/[0.03] group-hover:text-white/[0.06] transition-all absolute top-6 right-6 leading-none">{idx + 1}</span>
                <p className="text-base font-black uppercase tracking-tight leading-tight relative z-10">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ROLES & RESPONSIBILITIES */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-12 md:p-20 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.4em]">Architects</span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">Lynqup Roles</h3>
            </div>
            <ul className="space-y-6">
              {[
                'IP ownership & experience design',
                'Artist / format curation',
                'Event branding & identity',
                'Central execution standards'
              ].map((role, idx) => (
                <li key={idx} className="flex items-center gap-6 text-neutral-500 group">
                  <div className="w-2 h-2 bg-white group-hover:scale-125 transition-transform" />
                  <span className="text-lg md:text-xl font-light leading-relaxed group-hover:text-white transition-all duration-500">{role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black p-12 md:p-20 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.4em]">Hosts</span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">Institution Roles</h3>
            </div>
            <ul className="space-y-6">
              {[
                'Permissions & policy alignment',
                'Student coordination support',
                'Discipline & governance'
              ].map((role, idx) => (
                <li key={idx} className="flex items-center gap-6 text-neutral-500 group">
                  <div className="w-2 h-2 bg-white/30 group-hover:bg-white transition-all" />
                  <span className="text-lg md:text-xl font-light leading-relaxed group-hover:text-white transition-all duration-500">{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Partnership;
