import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ShoppingBag, User, ChevronDown } from 'lucide-react'

function Navbar() {
  const [activeSection, setActiveSection] = useState('portfolio');
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Scroll spy and header shrink handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['portfolio', 'services', 'philosophy', 'journey', 'consultation'];
      let current = 'portfolio';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'portfolio', label: 'Home' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'journey', label: 'Journey' },
    { id: 'consultation', label: 'Contact Us' }
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar-container-mockup ${scrolled ? 'scrolled' : ''}`}>
      {/* Brand logo conjoined monogram + wordmark */}
      <a
        href="#portfolio"
        onClick={(e) => handleLinkClick(e, 'portfolio')}
        style={{
          display: 'block',
          width: scrolled ? '120px' : '140px',
          height: 'auto',
          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.2, 1)'
        }}
      >
        <img
          src="/images/amanologo.png"
          alt="AMANO Interiors"
          style={{ width: '100%', height: '100%' }}
        />
      </a>

      {/* Center navigation links */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <div
              key={link.id}
              style={{ position: 'relative' }}
              onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
            >
              <a
                href={`#${link.id}`}
                className={`nav-link-mockup ${isActive ? 'active-section' : ''}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                style={{ color: isActive ? '#ffffff' : 'rgba(255,255,255,0.65)' }}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={11} style={{ marginLeft: '2px', opacity: 0.8 }} />}
              </a>

              {/* Active gold dot indicator */}
              {isActive && (
                <motion.span
                  layoutId="activeIndicator"
                  style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: 'calc(50% - 2px)',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--gold)',
                    boxShadow: '0 0 8px var(--gold)'
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              {/* Luxury Micro-Dropdown for Services */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        paddingTop: '16px',
                        zIndex: 150
                      }}
                    >
                      <div
                        style={{
                          background: 'rgba(17, 17, 17, 0.95)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          padding: '16px 20px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                          minWidth: '200px',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        }}
                      >
                        <a
                          href="#services"
                          onClick={(e) => { handleLinkClick(e, 'services'); setDropdownOpen(false); }}
                          style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, transition: 'color 0.2s' }}
                          onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                          onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                        >
                          Modular Kitchens
                        </a>
                        <a
                          href="#services"
                          onClick={(e) => { handleLinkClick(e, 'services'); setDropdownOpen(false); }}
                          style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, transition: 'color 0.2s' }}
                          onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                          onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                        >
                          Wardrobes
                        </a>
                        <a
                          href="#services"
                          onClick={(e) => { handleLinkClick(e, 'services'); setDropdownOpen(false); }}
                          style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, transition: 'color 0.2s' }}
                          onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                          onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                        >
                          Complete Interiors
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          );
        })}
      </div>

      {/* Right side widgets matching mockup */}
      <div className="navbar-right-widgets">
        {/* Connect Now WhatsApp */}
        <a
          href="https://wa.me/918088228997"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-widget-item"
        >
          <MessageCircle size={14} />
          <span style={{ fontSize: '10px' }}>CONNECT NOW</span>
        </a>

        {/* Cart */}
        <button
          className="navbar-widget-item"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="View services"
        >
          <ShoppingBag size={14} />
        </button>

        {/* User Profile */}
        <button
          className="navbar-widget-item"
          onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="View user profile"
        >
          <User size={14} />
        </button>

        {/* Language dropdown */}
        <div className="navbar-widget-item" style={{ gap: '4px' }}>
          <span style={{ fontSize: '10px' }}>ENG</span>
          <ChevronDown size={10} style={{ opacity: 0.8 }} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
