import React, { useRef } from 'react'
import { motion as m, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'

function Hero() {
  const containerRef = useRef(null);
  
  // Parallax Scroll Binding
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 240]);

  // 3D Card Hover Spring Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Soft spring config for fluid tracking
  const springConfig = { damping: 22, stiffness: 180, mass: 0.45 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);
    
    const pctX = ((e.clientX - rect.left) / rect.width) * 100;
    const pctY = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mouse-x', `${pctX}%`);
    el.style.setProperty('--mouse-y', `${pctY}%`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        padding: '0 80px',
        overflow: 'hidden',
        backgroundColor: '#090909'
      }}
    >
      {/* Full screen background image of the Modular Kitchen */}
      <m.div 
        style={{ 
          y: backgroundY,
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '110%',
          zIndex: 0
        }}
      >
        <img 
          alt="AMANO Interiors Hero Kitchen" 
          src="/images/hero_kitchen.png" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </m.div>

      {/* Elegant dark gradient overlay to ensure text readability */}
      <div 
        style={{ 
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(9,9,9,0.3) 0%, rgba(9,9,9,0.7) 100%)', 
          zIndex: 1 
        }}
      ></div>

      {/* 3D Perspective Card Container (Floating on the left) */}
      <div 
        className="perspective-container" 
        style={{ position: 'relative', zIndex: 10, textAlign: 'left', width: '100%', maxWidth: '540px' }}
      >
        <m.div 
          className="card-3d card-3d-shine"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ 
            rotateX, 
            rotateY,
            background: 'rgba(255, 255, 255, 0.08)', 
            backdropFilter: 'blur(30px)', 
            WebkitBackdropFilter: 'blur(30px)',
            padding: '48px', 
            border: '1px solid rgba(255, 255, 255, 0.12)', 
            borderRadius: '24px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.45)',
            transformStyle: 'preserve-3d'
          }}
        >
          <m.h1 
            className="translate-z-6d"
            style={{ 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              lineHeight: '1.2', 
              color: '#ffffff', 
              letterSpacing: '-0.01em', 
              marginBottom: '20px',
              fontWeight: '600',
              textTransform: 'none',
              fontFamily: "'DM Sans', sans-serif"
            }}
          >
            Crafted with Passion,<br />Made for You!!
          </m.h1>
          
          <m.p 
            className="translate-z-3d"
            style={{ 
              fontSize: '15px', 
              color: 'rgba(255, 255, 255, 0.85)', 
              lineHeight: '1.7',
              fontFamily: "'Hanken Grotesk', sans-serif" 
            }}
          >
            Have a unique idea or a special project in mind? AMANO INTERIORS is excited to collaborate with you on custom designs. Contact us today to embark on a modular kitchen and home design journey that transcends ordinary living spaces...
          </m.p>
        </m.div>
      </div>

      {/* Floating Pill Explore Button (Bottom Right) */}
      <a 
        href="#services" 
        className="btn-magnetic" 
        style={{ 
          position: 'absolute', 
          bottom: '60px', 
          right: '80px', 
          zIndex: 15, 
          backgroundColor: '#ffffff', 
          color: '#111111', 
          padding: '16px 36px', 
          borderRadius: '999px', 
          fontSize: '11px', 
          fontWeight: '700', 
          textDecoration: 'none',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        Explore <m.span style={{ display: 'inline-block' }} animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>→</m.span>
      </a>
    </section>
  );
}

export default Hero;
