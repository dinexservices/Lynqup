
import React from 'react';

const Collaborations: React.FC = () => {
  const categories = [
    { title: 'Campus Bodies', items: ['Cultural Committees', 'Student Councils', 'Placement Cells'] },
    { title: 'Student Organizations', items: ['Music Societies', 'Drama Clubs', 'Tech Hubs'] },
    { title: 'Industry Collaborators', items: ['Artist Agencies', 'Production Houses', 'Record Labels'] },
    { title: 'Experience Partners', items: ['Ticketing Platforms', 'Beverage Brands', 'Lifestyle Media'] }
  ];

  return (
    <div id="collaborations" className="py-32 border-t border-white/5 bg-black">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-20">
        <header className="mb-20 space-y-4">
          <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-600">Ecosystem</h3>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Partners
          </h1>
          <p className="text-neutral-600 text-[10px] uppercase tracking-[0.4em] pt-8 max-w-3xl leading-loose font-medium">
            Collaborations vary in scope and nature and do not necessarily imply long-term or exclusive partnerships unless explicitly stated.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-[#050505] p-12 md:p-16 space-y-12 hover:bg-black transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] -translate-y-1/2 translate-x-1/2 rotate-45 group-hover:scale-125 transition-all duration-700" />
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter border-b border-white/10 pb-6 relative z-10 leading-none">{cat.title}</h2>
              <div className="flex flex-wrap gap-4 relative z-10">
                {cat.items.map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 text-neutral-500 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
