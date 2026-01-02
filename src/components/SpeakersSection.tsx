import React from 'react';

const SpeakersSection: React.FC = () => {
    const speakers = [
        { name: 'Alex Rivera', role: 'Founder, DeSpace', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200' },
        { name: 'Sarah Chen', role: 'Lead Dev, Ethos', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200' },
        { name: 'Michael Ross', role: 'VC Partner', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&h=200' },
        { name: 'Emily Zhang', role: 'DeFi Analyst', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=200&h=200' }
    ];

    return (
        <section id="community" className="py-32 bg-[#050505] relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Community Card */}
                <div className="bg-[#0A0A0A] rounded-[32px] p-10 border border-white/5 flex flex-col justify-between h-[400px] hover:border-white/10 transition-colors group">
                    <div className="flex justify-between items-start">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <svg className="w-8 h-8 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        <span className="px-4 py-1.5 rounded-full border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider">Community</span>
                    </div>

                    <div>
                        <h3 className="text-3xl font-light mb-4">Global Nexus</h3>
                        <p className="text-neutral-500 leading-relaxed max-w-sm">
                            Join our Web3 community, a global nexus of innovation and collaboration, fostering boundless opportunities.
                        </p>
                    </div>
                </div>

                {/* Speakers & Stats Card */}
                <div className="bg-[#0A0A0A] rounded-[32px] p-10 border border-white/5 flex flex-col justify-between h-[400px] hover:border-white/10 transition-colors">
                    <div>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-lg text-orange-500">✶</span>
                            <span className="text-sm font-medium text-neutral-400 uppercase tracking-widest">About our event</span>
                        </div>
                        <h3 className="text-3xl font-light leading-tight">
                            Tomorrow's Innovations <br /> Today
                        </h3>
                    </div>

                    <div className="pt-8 border-t border-white/5">
                        <div className="flex items-center justify-between">
                            <div className="flex -space-x-4">
                                {speakers.map((speaker, idx) => (
                                    <img
                                        key={idx}
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-14 h-14 rounded-full border-2 border-[#0A0A0A] object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all z-10 hover:z-20 cursor-pointer"
                                        title={`${speaker.name}, ${speaker.role}`}
                                    />
                                ))}
                            </div>
                            <div className="text-right">
                                <span className="block text-4xl font-semibold text-white">20+</span>
                                <span className="text-sm text-neutral-500">Worldwide Speakers</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SpeakersSection;
