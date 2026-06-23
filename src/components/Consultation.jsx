import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Calendar, Phone, MapPin, ArrowUpRight } from 'lucide-react'

function Consultation() {
  const [formData, setFormData] = useState({ name: '', phone: '', location: '', project: 'Modular Kitchen' });
  const [status, setStatus] = useState('');
  const [time, setTime] = useState('');

  const cardRef = useRef(null);

  // Dynamic local time display for editorial crispy look
  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // State to track if user is interacting/typing in the form
  const [isFocused, setIsFocused] = useState(false);

  // Mouse hover 3D tilt tracking (reduced range to 3 degrees to prevent cursor/click offset)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 22, stiffness: 180, mass: 0.45 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), springConfig);

  const handleMouseMove = (e) => {
    if (isFocused) return;
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
    if (isFocused) return;
    x.set(0);
    y.set(0);
  };

  const handleFocus = () => {
    setIsFocused(true);
    // Smoothly flatten the card to 0 rotation during typing/input selection
    x.set(0);
    y.set(0);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('transmitting');

    // Format a premium, readable lead message
    const message = `Hello AMANO Interiors, I would like to request a design consultation.

Here are my details:
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Location:* ${formData.location}
• *Project Scope:* ${formData.project}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918088228997?text=${encodedMessage}`;

    setTimeout(() => {
      setStatus('success');
      // Open the WhatsApp chat in a new tab
      window.open(whatsappUrl, '_blank');
      // Clear form inputs
      setFormData({ name: '', phone: '', location: '', project: 'Modular Kitchen' });
    }, 1200);
  };

  return (
    <section id="consultation" className="perspective-container consultation-wrap-responsive">

      {/* 3D background abstract golden glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(200, 169, 107, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(200, 169, 107, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="consultation-grid-mockup" style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Left Side Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}
        >
          <div>
            <span className="text-gold" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '24px' }}>
              RESERVE A CONSULTATION
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: '#ffffff', lineHeight: '1.05', marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Bring Your <br />Vision To Life.
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', maxWidth: '440px', fontFamily: "'Hanken Grotesk', sans-serif" }}>
              Schedule a design session with our studio architects to co-create your signature luxury home.
            </p>
          </div>

          {/* Crispy Studio Statuses */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '24px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Calendar size={18} className="text-gold" />
              <div>
                <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Studio Status</span>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>Accepting Residential Briefs</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Phone size={18} className="text-gold" />
              <div>
                <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Direct Line</span>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>+91 80882 28997</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <MapPin size={18} className="text-gold" />
              <div>
                <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Local Time (IST)</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--gold)' }}>{time || '11:42 PM'}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)' }}>
              <img
                alt="AMANO Interiors"
                src="/images/logo.png"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '16px', fontWeight: '700' }}>Mohammed Amaan</span>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Principal Designer & Founder of AMANO Interiors</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form (3D Frosted Glass Card) */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-3d card-3d-shine consultation-card-responsive"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

            <div className="form-input-group translate-z-3d" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
              <input
                className="form-control"
                placeholder="Bespoke Client Name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}
                id="form-name"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label className="form-label" style={{ color: 'rgba(255,255,255,0.6)' }} htmlFor="form-name">Full Name</label>
              <div className="form-control-focus-bar"></div>
            </div>

            <div className="philosophy-card-list translate-z-3d">
              <div className="form-input-group" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                <input
                  className="form-control"
                  placeholder="+91 98765 43210"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}
                  id="form-phone"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <label className="form-label" style={{ color: 'rgba(255,255,255,0.6)' }} htmlFor="form-phone">Phone Number</label>
                <div className="form-control-focus-bar"></div>
              </div>
              <div className="form-input-group" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                <input
                  className="form-control"
                  placeholder="Bangalore"
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  style={{ color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}
                  id="form-location"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <label className="form-label" style={{ color: 'rgba(255,255,255,0.6)' }} htmlFor="form-location">Location</label>
                <div className="form-control-focus-bar"></div>
              </div>
            </div>

            <div className="form-input-group translate-z-3d" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
              <select
                className="form-control"
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                style={{ color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}
                id="form-project"
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <option style={{ background: '#111' }}>Modular Kitchen</option>
                <option style={{ background: '#111' }}>Complete Home Interior</option>
                <option style={{ background: '#111' }}>Wardrobes & Storage</option>
                <option style={{ background: '#111' }}>Living & Dining Room</option>
              </select>
              <label className="form-label" style={{ color: 'rgba(255,255,255,0.6)' }} htmlFor="form-project">Project Scope</label>
              <div className="form-control-focus-bar"></div>
            </div>

            <button
              className="btn-magnetic btn-primary translate-z-3d"
              type="submit"
              style={{
                padding: '20px',
                fontWeight: '700',
                width: '100%',
                border: 'none',
                fontSize: '11px',
                marginTop: '16px',
                backgroundColor: 'var(--gold)',
                color: 'var(--charcoal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              Request Design Callback <ArrowUpRight size={14} />
            </button>
          </form>

          {status === 'transmitting' && (
            <div style={{ marginTop: '24px', textAlign: 'center', color: '#ffffff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px' }}>
              Transmitting Reservation...
            </div>
          )}

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ marginTop: '24px', textAlign: 'center', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', lineHeight: '1.4' }}
            >
              Your Booking Registered. Amaan's Office Will Contact You Shortly.
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}

export default Consultation;
