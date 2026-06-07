import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

// Reusable 3D Tilt Card Component for Bento Grid
function BentoItem({ title, index, cols, img, subtitle, desc }) {
  const cardRef = useRef(null);

  // Hover tilt coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
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
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50, rotateX: 6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bento-card card-3d card-3d-shine"
      style={{
        gridColumn: `span ${cols}`,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
    >
      <img alt={title} src={img} />
      <div className="bento-overlay"></div>
      <div className="bento-content translate-z-3d">
        <span className="text-gold" style={{ fontSize: '11px', letterSpacing: '0.15em', fontWeight: '600', textTransform: 'uppercase' }}>
          0{index + 1} / {subtitle}
        </span>
        <h3 style={{ fontSize: '26px', color: '#ffffff', marginTop: '8px' }}>{title}</h3>
        {desc && <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginTop: '8px', maxWidth: '320px' }}>{desc}</p>}
        <div className="bento-line"></div>
      </div>
    </motion.div>
  );
}

function Services() {
  const items = [
    {
      title: 'Modular Kitchens',
      subtitle: 'Kitchen Design',
      cols: 8,
      img: '/images/kitchen1.jpg',
      desc: 'Precision engineered architectural setups for the modern home.'
    },
    {
      title: 'Wardrobes',
      subtitle: 'Storage Curation',
      cols: 4,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh0R0jeZPZO_8jr2vCsxD85G23OF3635XyPrjQ5kZKJ2sSBHlcht2u2JI618hoQ2lFDG3Du8DbNVdWn5XGodlqDeBCR9lpF6cn6tsnYIBoRLuyH1VAURWARXSvqhBbPOk0Xi9wYJU4WoBp8RoFnEjzsq58HtJMk7ENuy3pQ8dY9Fbk5ejgLOJy1KvFIA1LikMIHz7YbDbMSu62qBcf-EmQVbOjFXcfg4nB9kp77tSSG6yPWrrPLODONVvJydIriY2WuEMPtu0iQcOw'
    },
    {
      title: 'Complete Interiors',
      subtitle: 'Complete Curation',
      cols: 12,
      img: '/images/kitchen2.jpg',
      desc: 'Seamless layouts showing custom, luxury spatial execution.'
    }
  ];

  return (
    <section id="services" style={{ padding: '140px 80px' }} className="perspective-container">
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span className="text-gold" style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>Expertise</span>
          <h2 style={{ fontSize: '38px', letterSpacing: '0.05em' }}>Our Specialized Services</h2>
        </motion.div>

        <div className="bento-grid">
          {items.map((item, idx) => (
            <BentoItem
              key={idx}
              index={idx}
              title={item.title}
              subtitle={item.subtitle}
              cols={item.cols}
              img={item.img}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
