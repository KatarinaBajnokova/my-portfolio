import React from 'react';
import './styles/main.scss';
import Footer from '@/components/layout/Footer/Footer';
import Hero from '@/components/layout/Hero/Hero';
import Navbar from '@/components/layout/Header/Navbar';
import ProjectGallery from '@/components/sections/Projects/ProjectGallery';

export default function App() {
  return (
    <>
      <main className="app">
        {/* <Hero /> */}
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>
      <Navbar />
      <Hero />
      <ProjectGallery />
      <Footer />
    </>
  );
}
