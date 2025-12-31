
"use client";

import React from 'react';

const Footer: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const navHeight = 60;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5 pt-32 pb-12">
            <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="space-y-6">
                        <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center group-hover:rotate-12 transition-all duration-500">
                                <span className="text-black font-black text-2xl italic">L</span>
                            </div>
                            <span className="text-3xl font-black tracking-tighter uppercase">Lynqup</span>
                        </button>
                        <p className="text-neutral-600 text-base font-light leading-relaxed max-w-xs">
                            Building the future of campus culture through high-impact music and innovation IPs.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">Explore</h4>
                        <div className="flex flex-col items-start gap-4">
                            <button onClick={() => scrollToSection('about')} className="text-base text-neutral-500 hover:text-white transition-colors uppercase tracking-tight font-medium">About</button>
                            <button onClick={() => scrollToSection('ips')} className="text-base text-neutral-500 hover:text-white transition-colors uppercase tracking-tight font-medium">Portfolio</button>
                            <button onClick={() => scrollToSection('partnership')} className="text-base text-neutral-500 hover:text-white transition-colors uppercase tracking-tight font-medium">Model</button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">Track</h4>
                        <div className="flex flex-col items-start gap-4">
                            <button onClick={() => scrollToSection('editions')} className="text-base text-neutral-500 hover:text-white transition-colors uppercase tracking-tight font-medium">Record</button>
                            <button onClick={() => scrollToSection('collaborations')} className="text-base text-neutral-500 hover:text-white transition-colors uppercase tracking-tight font-medium">Partners</button>
                            <button onClick={() => scrollToSection('contact')} className="text-base text-neutral-500 hover:text-white transition-colors uppercase tracking-tight font-medium">Host</button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">Institutional</h4>
                        <div className="flex flex-col items-start gap-4">
                            <button className="text-base text-neutral-800 hover:text-white transition-colors cursor-not-allowed uppercase tracking-tight">Terms</button>
                            <button className="text-base text-neutral-800 hover:text-white transition-colors cursor-not-allowed uppercase tracking-tight">Privacy</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-16 text-center space-y-10">
                    <p className="text-neutral-700 text-[9px] leading-[2.2] max-w-5xl mx-auto uppercase tracking-[0.3em] font-medium">
                        Lynqup operates as a premium campus experience and IP-led event organization. All campus executions are subject to institutional approvals and university-specific guidelines.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/[0.02]">
                        <p className="text-neutral-700 text-[9px] font-black uppercase tracking-[0.4em]">
                            © {new Date().getFullYear()} Lynqup Studio
                        </p>
                        <div className="flex gap-12">
                            <span className="text-[9px] text-neutral-800 uppercase tracking-[0.4em] font-black">v2.5.2</span>
                            <span className="text-[9px] text-neutral-800 uppercase tracking-[0.4em] font-black">HEADQUARTERS / IN</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
