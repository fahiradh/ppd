'use client';
import React, { useRef } from 'react';
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Manage from "@/components/manage"
import Navbar from "@/components/navbar"
import Services from "@/components/services"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the About section
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero scrollToAbout={scrollToAbout} />
      <About ref={aboutRef} />
      <Services />
      <Manage />
      <Contact />
      <Footer />
    </main>
  )
}

