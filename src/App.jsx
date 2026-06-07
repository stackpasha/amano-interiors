import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Philosophy from './components/Philosophy'
import Journey from './components/Journey'
import Consultation from './components/Consultation'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {
  useEffect(() => {
    // Initialize Lenis Momentum Smooth Scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium decelerated curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <div className="arch-grid-overlay" />
      <Navbar />
      <Sidebar />
      <Hero />
      <Services />
      <Philosophy />
      <Journey />
      <Consultation />
      <Footer />
    </>
  );
}

export default App;
