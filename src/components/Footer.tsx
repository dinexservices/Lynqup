
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
        <footer className="bg-[#050505] border-t border-white/5 pt-32 pb-12 text-sm">
            <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-white/10">
                                <span className="text-black font-bold text-2xl italic">L</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white uppercase group-hover:text-neutral-300 transition-colors">Lynqup</span>
                        </button>
                        <p className="text-neutral-500 font-light leading-relaxed max-w-xs">
                            Building the future of campus culture through high-impact music and innovation IPs.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Explore</h4>
                        <div className="flex flex-col items-start gap-3">
                            {['About', 'Portfolio', 'Model'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase() === 'portfolio' ? 'ips' : item.toLowerCase())}
                                    className="text-neutral-500 hover:text-orange-500 transition-colors font-medium hover:translate-x-1 duration-300"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Track</h4>
                        <div className="flex flex-col items-start gap-3">
                            <button onClick={() => scrollToSection('editions')} className="text-neutral-500 hover:text-orange-500 transition-colors font-medium hover:translate-x-1 duration-300">Record</button>
                            <button onClick={() => scrollToSection('collaborations')} className="text-neutral-500 hover:text-orange-500 transition-colors font-medium hover:translate-x-1 duration-300">Partners</button>
                            <button onClick={() => scrollToSection('contact')} className="text-neutral-500 hover:text-orange-500 transition-colors font-medium hover:translate-x-1 duration-300">Host</button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Legal</h4>
                        <div className="flex flex-col items-start gap-3">
                            <button className="text-neutral-600 cursor-not-allowed font-medium">Terms of Service</button>
                            <button className="text-neutral-600 cursor-not-allowed font-medium">Privacy Policy</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col gap-2">
                            <p className="text-neutral-600 text-[10px] uppercase tracking-widest font-medium">
                                © {new Date().getFullYear()} Lynqup . All rights reserved.
                            </p>
                        </div>

                        <div className="flex gap-8">
                            <a href="https://dinestx.com/" target="_blank" rel="noopener noreferrer">
                            <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold hover:text-orange-500 transition-colors cursor-pointer">
                                Developed by Dinex Services
                            </span>
                            </a>
                        
                        </div>
                    </div>
                    <p className="mt-8 text-neutral-800 text-[9px] leading-relaxed max-w-4xl uppercase tracking-wider font-medium text-center md:text-left">
                        Lynqup operates as a premium campus experience and IP-led event organization. All campus executions are subject to institutional approvals.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
