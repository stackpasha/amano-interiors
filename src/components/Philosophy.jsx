import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

function Philosophy() {
  const imageRef = useRef(null);

  // Mouse hover 3D tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e) => {
    const el = imageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const items = [
    { title: 'Design First', desc: 'Intentional layouts guided by strict spatial logic.' },
    { title: 'Precision Crafted', desc: 'Flawless custom execution using German technology.' },
    { title: 'Premium Materials', desc: 'Sourced globally from the finest stone & wood artisans.' },
    { title: 'On-Time Delivery', desc: 'Committed timelines with zero compromise on quality.' }
  ];

  return (
    <section id="philosophy" style={{ backgroundColor: 'rgba(216, 208, 196, 0.18)', padding: '140px 80px' }} className="perspective-container">
      <div style={{ maxWidth: '1440px', margin: '0 auto' }} className="philosophy-grid">

        {/* Left column info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold" style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginbottom: '16px', marginBottom: '16px' }}>
            Our Philosophy
          </span>
          <h2 style={{ fontSize: '38px', lineHeight: '1.2', marginBottom: '32px', letterSpacing: '0.05em' }}>
            Crafting Perfection <br />In Every Detail
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '60px', maxWidth: '480px', fontFamily: "'Hanken Grotesk', sans-serif" }}>
            We don't just design rooms; we create bespoke environments that match your personal lifestyle. Our approach blends architectural intelligence with the finest craftsmanship.
          </p>

          <div className="philosophy-card-list">
            {items.map((item, idx) => (
              <div key={idx}>
                <h4 style={{ fontSize: '18px', marginBottom: '8px', fontWeight: '500' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column 3D Image Card */}
        <motion.div
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, x: 50, rotateY: -8 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="card-3d"
          style={{
            height: '600px',
            overflow: 'hidden',
            borderRadius: '0',
            boxShadow: 'var(--shadow-premium)',
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          }}
        >
          <img
            alt="Premium Blueprints and Slabs"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHgOCmZk42K4Je-aroe-jze7p4l7uOFuNvu1cAvAq-7JxyFKGrjkZvivfj8-XPIWT9x416Ex1qmJ_vWrivoFCvwerCIyVApkEc9g9_M2j_c7Byh33VaD2sRm_BMW8BlOGAicmGXjB5HSD3HYw2gUz771y69cUhZtvZD8ChRVth7O5I4bJ1ngXghiMpT5OfrXD1lgK2kF_XVl3IoqKQFIHW_4y7cKMxDxO9sXc5sjAqEmpciTGP_aX9brH9SeDeNMGdsClzqUQ5aUu1"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Philosophy;
