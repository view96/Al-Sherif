import React from 'react';
import { Phone, Mail, MapPin, ChevronLeft } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_PHONE, COMPANY_PHONE_INT, COMPANY_LOCATION, COMPANY_EMAIL, COMPANY_FACEBOOK_URL } from '../data/products';

export default function Footer({ onNavigate }) {
  const handleLinkClick = (e, target, category = 'all') => {
    e.preventDefault();
    if (target === 'products') {
      if (onNavigate) onNavigate('products', category);
    } else if (target === 'home') {
      if (onNavigate) onNavigate('home');
    } else if (target === 'contact' || target === '#contact') {
      if (onNavigate) onNavigate('contact');
    } else {
      if (onNavigate) onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#0b1320',
        color: '#ffffff',
        paddingTop: '70px',
        paddingBottom: '24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* 4-Column Footer Grid matching user's reference */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}
        >
          {/* Column 1: Company Logo & About */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <Logo light size="medium" />

            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.8, maxWidth: '300px' }}>
              الشركة الرائدة في تصنيع خزانات البولي إيثيلين وحواجز الأمان ومنتجات الفايبر جلاس بأعلى معايير الجودة والكفاءة.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
              <a
                href={`https://wa.me/${COMPANY_PHONE_INT}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25d366',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#25d366';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#25d366';
                }}
              >
                <WhatsAppIcon size={20} />
              </a>

              <a
                href={COMPANY_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1877f2';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#38bdf8';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={`tel:${COMPANY_PHONE}`}
                aria-label="Phone"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00a896',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00a896';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#00a896';
                }}
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '20px',
                position: 'relative',
                display: 'inline-block'
              }}
            >
              روابط سريعة
              <span
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  right: 0,
                  width: '30px',
                  height: '3px',
                  backgroundColor: '#00a896',
                  borderRadius: '2px'
                }}
              />
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'الرئيسية', target: 'home' },
                { label: 'المنتجات', target: 'products' },
                { label: 'لماذا شركة الشريف', target: '#why-us' },
                { label: 'شركاء النجاح', target: '#partners' },
                { label: 'آراء العملاء', target: '#testimonials' },
                { label: 'اتصل بنا', target: '#contact' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={`#${link.target}`}
                  onClick={(e) => handleLinkClick(e, link.target)}
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.92rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00a896')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  <ChevronLeft size={14} color="#00a896" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4
              style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '20px',
                position: 'relative',
                display: 'inline-block'
              }}
            >
              منتجاتنا
              <span
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  right: 0,
                  width: '30px',
                  height: '3px',
                  backgroundColor: '#00b4d8',
                  borderRadius: '2px'
                }}
              />
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'الخزانات الأفقية', category: 'horizontal' },
                { label: 'الخزانات الرأسية', category: 'vertical' },
                { label: 'حواجز الأمان', category: 'barriers' },
                { label: 'أكشاك الفايبر جلاس', category: 'kiosks' }
              ].map((prod) => (
                <a
                  key={prod.label}
                  href={`#products-${prod.category}`}
                  onClick={(e) => handleLinkClick(e, 'products', prod.category)}
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.92rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00b4d8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  <ChevronLeft size={14} color="#00b4d8" />
                  <span>{prod.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4
              style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '20px',
                position: 'relative',
                display: 'inline-block'
              }}
            >
              معلومات التواصل
              <span
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  right: 0,
                  width: '30px',
                  height: '3px',
                  backgroundColor: '#f77f00',
                  borderRadius: '2px'
                }}
              />
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#00b4d8" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {COMPANY_LOCATION}
                </span>
              </div>

              {/* Phone 1 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="#00a896" style={{ flexShrink: 0 }} />
                <a
                  href={`tel:${COMPANY_PHONE}`}
                  style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 800, direction: 'ltr' }}
                >
                  {COMPANY_PHONE}
                </a>
              </div>

              {/* WhatsApp */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <WhatsAppIcon size={20} color="#25d366" style={{ flexShrink: 0 }} />
                <a
                  href={`https://wa.me/${COMPANY_PHONE_INT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#25d366', fontSize: '0.95rem', fontWeight: 700 }}
                >
                  واتساب المبيعات المباشر
                </a>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="#f77f00" style={{ flexShrink: 0 }} />
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  style={{ color: '#cbd5e1', fontSize: '0.88rem', direction: 'ltr' }}
                >
                  {COMPANY_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Centered Credits and Scroll To Top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div style={{ textAlign: 'center', fontSize: '0.98rem', color: '#94a3b8', fontWeight: 600 }}>
            تم التطوير بواسطة{' '}
            <a
              href="https://speed-up.tech"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#38bdf8',
                fontWeight: 800,
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00a896')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#38bdf8')}
            >
              Speed-Up
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
