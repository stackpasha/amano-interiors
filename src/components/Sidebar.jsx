import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

function Sidebar() {
  const { scrollYProgress } = useScroll();

  // Smooth the scroll progress bar animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="sidebar-panel-mockup">
      {/* Phone Call Button */}
      <motion.a
        href="tel:+918088228997"
        className="btn-magnetic"
        whileHover={{ scale: 1.15 }}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
        }}
        title="Call Us"
      >
        <Phone size={16} />
      </motion.a>

      {/* Vertical Blueprint Scroll Line Tracker */}
      <div
        style={{
          width: '2px',
          height: '120px',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          position: 'relative',
          borderRadius: '1px',
          overflow: 'hidden'
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--gold)',
            scaleY,
            originY: 0
          }}
        />
      </div>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918088228997"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-magnetic"
        whileHover={{ scale: 1.15 }}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        title="WhatsApp Chat"
      >
        <MessageCircle size={16} />
      </motion.a>
    </div>
  );
}

export default Sidebar;
