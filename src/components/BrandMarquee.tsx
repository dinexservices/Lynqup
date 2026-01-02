
import React from 'react';

const BrandMarquee: React.FC = () => {
    const brands = [
        "CAMPUS CULTURE", "MUSIC FESTIVALS", "TECH SUMMITS", "INNOVATION",
        "STUDENT ENGAGEMENT", "BRAND EXPERIENCES", "LYNQUP ORIGINALS", "EST. 2024"
    ];

    return (
        <div className="relative py-12 bg-[#050505] border-b border-white/5 overflow-hidden">

            {/* Gradient Fades */}
            <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            {/* Marquee Track */}
            <div className="flex gap-12 md:gap-24 animate-marquee whitespace-nowrap">
                {[...brands, ...brands, ...brands].map((brand, idx) => (
                    <div key={idx} className="flex items-center gap-12 md:gap-24">
                        <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-neutral-600 to-neutral-800 hover:from-white hover:to-neutral-400 transition-all duration-500 cursor-default select-none">
                            {brand}
                        </span>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-orange-500/50" />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default BrandMarquee;
