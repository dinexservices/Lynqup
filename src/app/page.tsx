"use client";

import Home from "@/components/Home";
import About from "@/components/About";
import Collaborations from "@/components/Collaborations";
import Partnership from "@/components/Partnership";
import PastEditions from "@/components/PastEditions";
import Contact from "@/components/Contact";
import IPS from "@/components/IPS";
import SpeakersSection from "@/components/SpeakersSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="bg-black min-h-screen text-white text-base">
    
      <main>
        <Home />
       
        <SpeakersSection />
        {/* Kept existing sections as requested/fallback */}
        <About />
        <Collaborations />
        <IPS />
        <PastEditions />
        <Partnership />
        <Contact />
      </main>
     
    </div>
  );
}
