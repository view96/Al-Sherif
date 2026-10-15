import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronLeft } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_PHONE, COMPANY_PHONE_INT } from '../data/products';

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'products', label: 'منتجاتنا' },
    { id: 'contact', label: 'اتصل بنا' }
  ];

  const handleLinkClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(item.id);
  };

  return (
    <header className="header-wrapper" style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>
      {/* Main Navigation Bar */}
      <nav
        className={`main-nav ${scrolled ? 'glass-header' : ''}`}
        style={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : '#ffffff',
          boxShadow: scrolled ? 'var(--shadow-md)' : '0 2px 10px rgba(11, 37, 69, 0.05)',
          transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
          padding: '10px 0'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo Brand */}
          <button
            onClick={() => onNavigate('home')}
            style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <Logo size="medium" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {navItems.map((item) => {
              const isActive = (item.id === currentPage) || (item.id === 'contact' && false);
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item)}
                  style={{
                    fontWeight: 800,
                    fontSize: '1.02rem',
                    color: isActive ? '#00a896' : '#1e293b',
                    position: 'relative',
                    padding: '8px 4px',
                    transition: 'color 0.2s ease',
                    borderBottom: isActive ? '2.5px solid #00a896' : '2.5px solid transparent'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00a896')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#00a896' : '#1e293b')}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Action Direct Contact Buttons */}
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={`tel:${COMPANY_PHONE}`}
              className="btn btn-primary btn-call-nav"
              style={{
                padding: '9px 20px',
                fontSize: '0.94rem',
                gap: '8px',
                borderRadius: '50px'
              }}
            >
              <Phone size={16} />
              <span style={{ direction: 'ltr' }}>{COMPANY_PHONE}</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_PHONE_INT}?text=${encodeURIComponent('مرحباً شركة الشريف، أود طلب عرض سعر')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                padding: '9px 18px',
                fontSize: '0.94rem',
                gap: '6px',
                borderRadius: '50px'
              }}
              title="تواصل فوري عبر الواتساب"
            >
              <WhatsAppIcon size={18} />
              <span className="hide-tablet">طلب عرض سعر</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="قائمة التصفح"
              style={{
                display: 'none',
                padding: '8px',
                borderRadius: '8px',
                backgroundColor: '#f1f5f9',
                color: '#0b2545'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div
            className="mobile-drawer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e2e8f0',
              padding: '20px 24px',
              gap: '14px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: '1px solid #f1f5f9',
                  color: item.id === currentPage ? '#00a896' : '#0b2545',
                  fontWeight: 800,
                  fontSize: '1.1rem'
                }}
              >
                <span>{item.label}</span>
                <ChevronLeft size={18} color="#00a896" />
              </a>
            ))}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px' }}
              >
                <Phone size={18} />
                <span>اتصل بنا: {COMPANY_PHONE}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_PHONE_INT}?text=${encodeURIComponent('مرحباً شركة الشريف، أود طلب عرض سعر')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '12px' }}
              >
                <WhatsAppIcon size={18} />
                <span>واتساب المبيعات</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
        @media (max-width: 768px) {
          .hide-mobile {
            display: none !important;
          }
          .btn-call-nav {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .hide-tablet {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
