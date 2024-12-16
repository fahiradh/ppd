import React from 'react';
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Manage from "@/components/manage"
import Navbar from "@/components/navbar"
import Services from "@/components/services"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Manage />
      <Contact />
      <Footer />
    </main>
  )
}

