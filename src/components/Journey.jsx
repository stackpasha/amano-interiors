import React from 'react'
import { motion } from 'framer-motion'

function Journey() {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'We begin with understanding your architectural vision, lifestyle, and spatial needs.'
    },
    {
      num: '02',
      title: 'Curation',
      desc: 'Developing detailed 3D visualizations and handpicking premium luxury finishes.'
    },
    {
      num: '03',
      title: 'Precision',
      desc: 'Meticulous custom manufacturing of components with architectural rigor.'
    },
    {
      num: '04',
      title: 'Execution',
      desc: 'Professional installation and final handover of your bespoke masterpiece.'
    }
  ];

  return (
    <section id="journey" style={{ padding: '140px 80px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '38px', letterSpacing: '0.05em' }}>Your Design Journey</h2>
        </motion.div>

        <div className="journey-container">
          <div className="journey-line"></div>
          <div className="journey-grid">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="journey-card"
              >
                <div className="journey-num">{step.num}</div>
                <h3 style={{ fontSize: '18px', margin: '24px 0 12px', fontWeight: '500' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
