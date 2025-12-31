
"use client";

import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        institution: '',
        name: '',
        designation: '',
        engagementType: 'IP Collaboration',
        campus: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            alert("Partnership Request Submitted.");
        }, 2000);
    };

    return (
        <div id="contact" className="py-32 border-t border-white/5 bg-[#050505]">
            <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-20">
                <header className="mb-20 space-y-4">
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-600">Connect</h3>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                        Join Us
                    </h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-start">
                    <div className="lg:col-span-1 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-black uppercase tracking-tight leading-none">Institutional Inquiries</h2>
                            <p className="text-lg text-neutral-500 font-light leading-relaxed">
                                Bringing high-impact music and tech IPs to your campus.
                                Conceptualization and deployment at scale.
                            </p>
                        </div>

                        <div className="space-y-4 pt-12 border-t border-white/10">
                            <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-600">Direct Pipeline</h4>
                            <p className="text-white text-xl md:text-2xl font-black tracking-tighter hover:text-neutral-400 transition-colors cursor-pointer">partnerships@lynqup.studio</p>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-8 bg-black border border-white/10 p-10 md:p-14 shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-600">Institution Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-[#050505] border-b border-white/10 px-0 py-4 text-white text-lg focus:outline-none focus:border-white transition-all placeholder:text-neutral-800"
                                        placeholder="University or College"
                                        value={formState.institution}
                                        onChange={(e) => setFormState({ ...formState, institution: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-600">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-[#050505] border-b border-white/10 px-0 py-4 text-white text-lg focus:outline-none focus:border-white transition-all placeholder:text-neutral-800"
                                        placeholder="Representative"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-600">IP Interest</label>
                                    <select
                                        className="w-full bg-[#050505] border-b border-white/10 px-0 py-4 text-white text-lg focus:outline-none focus:border-white transition-all appearance-none cursor-pointer"
                                        value={formState.engagementType}
                                        onChange={(e) => setFormState({ ...formState, engagementType: e.target.value })}
                                    >
                                        <option>Music/EDM IP</option>
                                        <option>Innovation Festival</option>
                                        <option>Campus Tour</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-600">Official Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-[#050505] border-b border-white/10 px-0 py-4 text-white text-lg focus:outline-none focus:border-white transition-all placeholder:text-neutral-800"
                                        placeholder="name@university.edu"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-600">Proposal Summary</label>
                                <textarea
                                    rows={3}
                                    className="w-full bg-[#050505] border border-white/10 p-6 text-white text-base focus:outline-none focus:border-white transition-all resize-none placeholder:text-neutral-800"
                                    placeholder="Share details..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={submitted}
                                className={`w-full py-6 font-black uppercase tracking-[0.4em] text-[11px] transition-all ${submitted ? 'bg-neutral-900 text-neutral-700' : 'bg-white text-black hover:bg-neutral-200'
                                    }`}
                            >
                                {submitted ? 'Routing...' : 'Initiate Partnership'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
