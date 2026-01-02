
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { NAV_ITEMS } from '@/constants';

const logo="/logo.png"

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const navHeight = 0; // Scroll to top for hero or handle offset if needed
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'py-4 glass-nav' : 'py-8 bg-transparent'
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Brand Logo */}
                    <button onClick={() => scrollToSection('home')} className="group flex items-center gap-2">
                        <div className=" flex items-center justify-center rounded-sm transform group-hover:rotate-12 transition-transform duration-300">
                            <Image src={logo} alt="Logo" width={150} height={150} />
                        </div>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-12">
                        {/* Centered Links could go here if design requires, but sticking to right side or spread */}
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors capitalize tracking-wide"
                            >
                                {item.label}
                            </button>
                        ))}
                     
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white z-50 relative"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <div className={`flex flex-col gap-1.5 transition-all ${mobileMenuOpen ? 'rotate-180' : ''}`}>
                            <span className={`w-5 h-0.5 bg-white block transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-5 h-0.5 bg-white block transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-5 h-0.5 bg-white block transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Full Screen Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 flex items-center justify-center ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                <div className="flex flex-col gap-8 text-center">
                    {NAV_ITEMS.map((item, idx) => (
                        <button
                            key={item.href}
                            onClick={() => scrollToSection(item.href)}
                            className="text-3xl md:text-5xl font-light text-white/80 hover:text-white transition-all transform hover:scale-105"
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
