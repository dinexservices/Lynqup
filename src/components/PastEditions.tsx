
import React from 'react';
import { PAST_EDITIONS } from '@/constants';

const PastEditions: React.FC = () => {
  return (
    <div id="editions" className="py-32 border-t border-white/5 bg-[#050505] relative">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-20">
        <header className="mb-20 space-y-4 animate-in slide-in-from-bottom-8 duration-700 fade-in">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <h3 className="text-sm font-medium uppercase tracking-widest text-neutral-400">Track Record</h3>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-none text-white">
            Past <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">Editions</span>
          </h1>
        </header>

        <div className="space-y-4">
          {/* Table Header (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-12 px-6 pb-4 border-b border-white/10 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            <div className="col-span-5">Event Name</div>
            <div className="col-span-4">Campus / City</div>
            <div className="col-span-3 text-right">Type</div>
          </div>

          {PAST_EDITIONS.map((edition) => (
            <div
              key={edition.id}
              className="group relative grid grid-cols-1 md:grid-cols-12 items-center gap-4 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 cursor-default"
            >
              <div className="md:col-span-5">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-orange-500 transition-colors uppercase tracking-tight">{edition.eventName}</h3>
              </div>
              <div className="md:col-span-4">
                <p className="text-base text-neutral-400 group-hover:text-white transition-colors">{edition.campusCity}</p>
              </div>
              <div className="md:col-span-3 md:text-right flex md:block justify-start">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 uppercase tracking-wide group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                  {edition.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-8 border border-dashed border-white/10 rounded-2xl bg-white/[0.01] text-center max-w-2xl mx-auto">
          <p className="text-[10px] text-neutral-500 uppercase tracking-widest leading-loose font-medium">
            Past editions represent executed formats under varying scopes and collaborations. Visuals and references are for experience representation only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PastEditions;
