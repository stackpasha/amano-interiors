import React from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Sparkles,
  ShieldCheck,
  Layers
} from 'lucide-react'

// Custom Pinterest Icon SVG
const PinterestIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.22 2.62 7.83 6.35 9.31-.09-.79-.17-2 .03-2.86.19-.8 1.25-5.3 1.25-5.3s-.32-.64-.32-1.59c0-1.49.86-2.6 1.94-2.6.91 0 1.35.69 1.35 1.51 0 .92-.58 2.29-.89 3.56-.25 1.07.54 1.95 1.6 1.95 1.92 0 3.4-2.02 3.4-4.94 0-2.58-1.85-4.38-4.5-4.38-3.07 0-4.87 2.3-4.87 4.68 0 .93.36 1.92.8 2.45.09.11.1.2.07.31-.08.33-.26 1.05-.3 1.19-.05.19-.17.23-.39.13-1.44-.67-2.34-2.78-2.34-4.47 0-3.64 2.65-7 7.64-7 4.01 0 7.13 2.86 7.13 6.68 0 3.99-2.51 7.2-6.01 7.2-1.17 0-2.28-.61-2.65-1.33 0 0-.58 2.21-.72 2.76-.26 1-.97 2.25-1.44 3.02 1.12.35 2.31.54 3.55.54 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

function Footer() {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ backgroundColor: '#090909', color: '#ffffff', fontFamily: "'Hanken Grotesk', sans-serif" }}>

      {/* 1. TOP CTA BANNER */}
      <div className="footer-cta-banner">
        <div className="footer-cta-left">
          <div>
            <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.25em', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>
              READY TO TRANSFORM
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', color: '#ffffff', fontFamily: "'DM Sans', sans-serif", fontWeight: '400', textTransform: 'uppercase', lineHeight: '1.1' }}>
              YOUR HOME?
            </h2>
            <div className="footer-cta-title-decor"></div>
          </div>

          <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '440px', lineHeight: '1.6' }}>
            Let's create a space that reflects your lifestyle, personality and aspirations.
          </p>

          <div className="footer-cta-buttons">
            <a
              href="https://wa.me/918088228997"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-btn-whatsapp"
            >
              <MessageCircle size={16} fill="currentColor" /> Chat on Whatsapp
            </a>

            <a
              href="tel:+918088228997"
              className="footer-btn-call"
            >
              <Phone size={14} /> Schedule a Call
            </a>
          </div>

          {/* Trust Badges */}
          <div className="footer-trust-badges">
            <div className="footer-badge-item">
              <Sparkles size={14} /> <span>Free Design Consultation</span>
            </div>
            <div className="footer-badge-item">
              <ShieldCheck size={14} /> <span>Premium Materials</span>
            </div>
            <div className="footer-badge-item">
              <Layers size={14} /> <span>End-to-End Execution</span>
            </div>
          </div>
        </div>

        {/* Right side Cozy Room Image */}
        <div
          style={{
            height: '280px',
            width: '100%',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <img
            src="/images/kitchen1.jpg"
            alt="AMANO Interiors Living Space Rendering"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* 2. MULTI-COLUMN INFO SECTION */}
      <div className="footer-columns-grid">

        {/* Column 1: Brand Info */}
        <div className="footer-col">
          <div>
            <img
              src="/images/amanologo.png"
              alt="AMANO Interiors Logo"
              style={{ width: '140px', height: 'auto', marginBottom: '8px' }}
            />
            <span style={{ display: 'block', fontSize: '9px', fontWeight: '700', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginTop: '4px' }}>
              DESIGNED AROUND LIFE
            </span>
          </div>

          <p className="footer-brand-text">
            Premium Modular Kitchens, Wardrobes & Complete Home Interiors crafted for modern living.
          </p>

          <div className="footer-social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Services Links */}
        <div className="footer-col">
          <h3 className="footer-col-title">SERVICES</h3>
          <div className="footer-links-list">
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="footer-link-item">Modular Kitchens</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="footer-link-item">Wardrobes</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="footer-link-item">Bedroom Interiors</a>
          </div>
        </div>

        {/* Column 3: Company Links */}
        <div className="footer-col">
          <h3 className="footer-col-title">COMPANY</h3>
          <div className="footer-links-list">
            <a href="#philosophy" onClick={(e) => handleLinkClick(e, 'philosophy')} className="footer-link-item">About Us</a>
            <a href="#journey" onClick={(e) => handleLinkClick(e, 'journey')} className="footer-link-item">Our Process</a>
            <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')} className="footer-link-item">Projects</a>
            <a href="#journey" onClick={(e) => handleLinkClick(e, 'journey')} className="footer-link-item">Testimonials</a>
            <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')} className="footer-link-item">Blog</a>
            <a href="#consultation" onClick={(e) => handleLinkClick(e, 'consultation')} className="footer-link-item">Careers</a>
          </div>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h3 className="footer-col-title">CONTACT</h3>
          <div className="footer-links-list" style={{ gap: '16px' }}>
            <div className="footer-contact-item">
              <Phone size={14} />
              <span>+91 80882 28997</span>
            </div>

            <div className="footer-contact-item">
              <Mail size={14} />
              <span>hello@amanointeriors.com</span>
            </div>

            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>No. 123, 2nd Cross,<br />Umar Nagar, Nagavara Main road<br />Bengaluru, Karnataka 560045</span>
            </div>

            <a
              href="https://www.google.com/maps/place/AMANO+Interiors/@13.0342478,77.6216427,20.88z/data=!4m6!3m5!1s0x3bae178be028ff57:0xd6b91e7ed38b7069!8m2!3d13.0343283!4d77.621947!16s%2Fg%2F11zckv3rr2?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-btn-maps"
            >
              <MapPin size={12} /> View on Google Maps
            </a>
          </div>
        </div>

        {/* Column 5: Custom Studio Map & Serving */}
        <div className="footer-col">
          {/* Custom Stylized Serving Map */}
          <div className="footer-map-frame">
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>

            <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'rgba(255,255,255,0.4)', fontWeight: '700', letterSpacing: '0.05em' }}>
                <span>Hassan</span>
                <span>Tumkur</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', margin: 'auto' }}>
                <MapPin size={16} style={{ color: 'var(--gold)' }} />
                <span style={{ fontSize: '10px', color: '#ffffff', fontWeight: '700', letterSpacing: '0.05em' }}>Bangalore</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'rgba(255,255,255,0.4)', fontWeight: '700', letterSpacing: '0.05em' }}>
                <span>Mandya</span>
                <span>Mysore</span>
              </div>
            </div>
          </div>

          {/* Serving list details */}
          <div>
            <h3 className="footer-col-title" style={{ fontSize: '11px', marginBottom: '8px' }}>SERVING</h3>
            <p className="footer-serving-areas">
              Bangalore <br />
              &amp; Nearby Areas
            </p>
          </div>
        </div>

      </div>

      {/* 3. FOOTER BOTTOM BAR */}
      <div className="footer-bottom-bar">
        <span>&copy; {new Date().getFullYear()} AMANO Interiors. All Rights Reserved.</span>

        <span style={{ color: 'var(--gold)', letterSpacing: '0.1em' }}>
          Crafting Spaces. Creating Stories by AMANO Interiors.
        </span>
      </div>

    </footer>
  );
}

export default Footer;
