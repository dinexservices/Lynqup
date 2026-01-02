"use client";

import React from 'react';

const Contact: React.FC = () => {
    return (
        <div id="contact" className="py-32 border-t border-white/5 bg-[#050505] relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
                <header className="mb-24 space-y-4 animate-in slide-in-from-bottom-8 duration-700 fade-in">
                    <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                        <h3 className="text-sm font-medium uppercase tracking-widest text-neutral-400">Connect</h3>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-none text-white">
                        Get in <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">Touch</span>
                    </h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                    {/* Left Column */}
                    <div className="space-y-16">
                        <div className="space-y-6 group">
                            <h2 className="text-3xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">Visit Us</h2>
                            <p className="text-xl text-neutral-400 font-light leading-relaxed border-l-2 border-white/10 pl-6 group-hover:border-orange-500/50 transition-colors duration-300">
                                Phagwara, Punjab<br />
                                India
                            </p>
                        </div>

                        <div className="space-y-2 pt-12 border-t border-white/5">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Partnership Inquiries</h4>
                            <a href="mailto:partnerships@lynqup.in" className="block text-2xl md:text-4xl font-bold tracking-tight text-white hover:text-orange-500 transition-all duration-300 hover:translate-x-2">
                                partnerships@lynqup.in
                            </a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12">
                        <div className="p-8 md:p-12 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/30 transition-colors duration-500">
                            <h2 className="text-2xl font-bold mb-8 text-white">Quick Contact</h2>
                            <div className="space-y-8">
                                <div className="space-y-1">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Phone</h4>
                                    <a href="tel:+919876543210" className="block text-xl md:text-2xl font-medium text-white hover:text-orange-500 transition-colors">
                                        +91 98765 43210
                                    </a>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">WhatsApp</h4>
                                    <a href="https://wa.me/919876543210" className="block text-xl md:text-2xl font-medium text-white hover:text-green-400 transition-colors">
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
