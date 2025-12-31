
"use client";

import React from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/components/Home';
import About from '@/components/About';
import IPs from '@/components/IPS';
import Partnership from '@/components/Partnership';
import PastEditions from '@/components/PastEditions';
import Collaborations from '@/components/Collaborations';
import Contact from '@/components/Contact';

const App: React.FC = () => {
  return (

    <div className="min-h-screen flex flex-col selection:bg-white selection:text-black scroll-smooth">

      <main className="flex-grow">
        <Home />
        <About />
        <IPs />
        <Partnership />
        <PastEditions />
        <Collaborations />
        <Contact />
      </main>

    </div>

  );
};

export default App;
