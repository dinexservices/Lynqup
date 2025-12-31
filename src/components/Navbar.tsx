
"use client";

import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = NAV_ITEMS.map(item => item.href);
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-8'
            }`}>
            <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-20 flex justify-between items-center">
                {/* Brand Logo */}
                <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center group-hover:rotate-12 transition-all duration-500">
                        <span className="text-black font-black text-xl italic">L</span>
                    </div>
                    <span className="text-2xl font-black tracking-tighter uppercase hidden sm:block">Lynqup</span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-12">
                    <div className="flex gap-8">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className={`text-[10px] font-black tracking-[0.2em] uppercase hover:text-white transition-all cursor-pointer relative py-1.5 ${activeSection === item.href ? 'text-white' : 'text-neutral-500'
                                    }`}
                            >
                                {item.label}
                                {activeSection === item.href && (
                                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white" />
                                )}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-white text-black px-6 py-2.5 rounded-sm text-[9px] font-black uppercase tracking-[0.3em] hover:bg-neutral-200 transition-all"
                    >
                        Host Lynqup
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-[60px] bg-black z-40 p-10 flex flex-col gap-6 animate-in slide-in-from-right duration-500">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => scrollToSection(item.href)}
                            className={`text-2xl font-black uppercase tracking-tighter border-b border-white/5 pb-4 text-left ${activeSection === item.href ? 'text-white' : 'text-neutral-800'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
