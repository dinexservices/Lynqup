
import { Handshake, Rocket, Scale, Users, FileCheck, CheckCircle2, Crown, Zap } from 'lucide-react';

const Partnership: React.FC = () => {
  return (
    <div id="partnership" className="py-32 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-600/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        <header className="mb-24 space-y-4 animate-in slide-in-from-bottom-8 duration-700 fade-in">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <h3 className="text-sm font-medium uppercase tracking-widest text-neutral-400">Collaboration</h3>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-none text-white">
            Partnership <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">Model</span>
          </h1>
        </header>

        {/* FLOW DIAGRAM */}
        <section className="mb-32">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white">The Process</h2>
            <div className="hidden md:block h-px flex-1 bg-white/10 ml-8 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Campus discussion & alignment', icon: Users },
              { title: 'IP selection & finalization', icon: CheckCircle2 },
              { title: 'Institutional approvals', icon: FileCheck },
              { title: 'Lynqup-led execution', icon: Rocket },
              { title: 'Post-event reporting', icon: Scale }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="bg-white/[0.02] p-8 border border-white/5 rounded-2xl relative group hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300 min-h-[220px] flex flex-col justify-between">
                  <div className="text-8xl font-black text-white/[0.02] group-hover:text-white/[0.04] transition-all absolute top-2 right-4 leading-none select-none">
                    {idx + 1}
                  </div>
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-neutral-400 group-hover:text-orange-500 transition-colors">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wide leading-relaxed relative z-10 text-neutral-300 group-hover:text-white transition-colors">{step.title}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ROLES & RESPONSIBILITIES */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lynqup Column */}
          <div className="bg-[#0A0A0A] p-10 md:p-14 rounded-[32px] border border-white/5 space-y-10 relative overflow-hidden group hover:border-orange-500/20 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-orange-500/10 transition-all"></div>

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20 text-orange-500 mb-6">
                <Crown size={24} />
              </div>
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Architects</span>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-none text-white">Lynqup Roles</h3>
            </div>
            <ul className="space-y-6 relative z-10">
              {[
                'IP ownership & experience design',
                'Artist / format curation',
                'Event branding & identity',
                'Central execution standards'
              ].map((role, idx) => (
                <li key={idx} className="flex items-start gap-4 text-neutral-400 group/item">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover/item:bg-orange-500 group-hover/item:scale-125 transition-all" />
                  <span className="text-lg font-light leading-relaxed group-hover/item:text-white transition-all duration-300">{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Institution Column */}
          <div className="bg-[#0A0A0A] p-10 md:p-14 rounded-[32px] border border-white/5 space-y-10 relative overflow-hidden group hover:border-white/20 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-white/10 transition-all"></div>

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 text-white mb-6">
                <Handshake size={24} />
              </div>
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Hosts</span>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-none text-white">Institution Roles</h3>
            </div>
            <ul className="space-y-6 relative z-10">
              {[
                'Permissions & policy alignment',
                'Student coordination support',
                'Discipline & governance'
              ].map((role, idx) => (
                <li key={idx} className="flex items-start gap-4 text-neutral-400 group/item">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 group-hover/item:bg-white group-hover/item:scale-125 transition-all" />
                  <span className="text-lg font-light leading-relaxed group-hover/item:text-white transition-all duration-300">{role}</span>
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
