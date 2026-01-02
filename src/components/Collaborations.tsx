
import { Landmark, Users, Briefcase, Ticket } from 'lucide-react';

const Collaborations: React.FC = () => {
  // Using Lucide icons instead of emojis for a premium feel
  const categories = [
    { title: 'Campus Bodies', items: ['Cultural Committees', 'Student Councils', 'Placement Cells'], icon: Landmark },
    { title: 'Student Organizations', items: ['Music Societies', 'Drama Clubs', 'Tech Hubs'], icon: Users },
    { title: 'Industry Collaborators', items: ['Artist Agencies', 'Production Houses', 'Record Labels'], icon: Briefcase },
    { title: 'Experience Partners', items: ['Ticketing Platforms', 'Beverage Brands', 'Lifestyle Media'], icon: Ticket }
  ];

  return (
    <div id="collaborations" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative z-10">
        <header className="mb-20 space-y-4 animate-in slide-in-from-bottom-8 duration-700 fade-in">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <h3 className="text-sm font-medium uppercase tracking-widest text-neutral-400">Ecosystem</h3>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-none text-white">
            Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Partners</span>
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed pt-6 font-light">
            Collaborations vary in scope and nature and do not necessarily imply long-term or exclusive partnerships unless explicitly stated.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="group bg-[#0A0A0A] border border-white/5 rounded-[32px] p-10 hover:border-orange-500/30 transition-all duration-500 relative overflow-hidden">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500 text-neutral-400 group-hover:text-orange-500 group-hover:border-orange-500/20">
                    <Icon size={24} />
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    {cat.title}
                    <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-white/20 transition-colors" />
                  </h2>

                  <div className="flex flex-wrap gap-3">
                    {cat.items.map((item, i) => (
                      <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-neutral-400 group-hover:text-white group-hover:border-white/20 transition-all duration-300 cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
