
import React from 'react';
import { PAST_EDITIONS } from '../constants';

const PastEditions: React.FC = () => {
  return (
    <div id="editions" className="py-32 border-t border-white/5 bg-[#050505]">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-20">
        <header className="mb-20 space-y-4">
          <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-600">Track Record</h3>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Past Editions
          </h1>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-6 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600">Event Name</th>
                <th className="py-6 px-6 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600">Campus / City</th>
                <th className="py-6 px-6 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {PAST_EDITIONS.map((edition) => (
                <tr key={edition.id} className="group hover:bg-white/[0.02] transition-all">
                  <td className="py-10 px-6 text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:translate-x-1 transition-transform duration-500">{edition.eventName}</td>
                  <td className="py-10 px-6 text-lg text-neutral-500 font-light">{edition.campusCity}</td>
                  <td className="py-10 px-6">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] px-5 py-2 bg-white/5 text-neutral-500 border border-white/10 group-hover:border-white/30 group-hover:text-white transition-all inline-block">
                      {edition.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-24 p-10 border-2 border-dashed border-white/5 bg-white/[0.01] text-center">
          <p className="text-[10px] text-neutral-700 uppercase tracking-[0.3em] leading-loose max-w-4xl mx-auto font-medium">
            Past editions represent executed formats under varying scopes and collaborations. Visuals and references are for experience representation only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PastEditions;
