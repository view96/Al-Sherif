import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button as soon as user starts scrolling down (past 160px)
      if (window.scrollY > 160) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="الرجوع إلى أعلى الصفحة"
      className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
      style={{
        position: 'fixed',
        bottom: '26px',
        left: '26px',
        zIndex: 1990,
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: '#00b4d8',
        color: '#ffffff',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 8px 24px rgba(0, 180, 216, 0.45)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.7)'
      }}
    >
      <ArrowUp size={22} strokeWidth={2.8} />

      <style>{`
        .scroll-to-top-btn:hover {
          background-color: #0096c7 !important;
          transform: translateY(-4px) scale(1.08) !important;
          box-shadow: 0 12px 30px rgba(0, 180, 216, 0.6) !important;
        }

        .scroll-to-top-btn:active {
          transform: translateY(-1px) scale(0.96) !important;
        }

        @media (max-width: 768px) {
          .scroll-to-top-btn {
            bottom: 20px !important;
            left: 20px !important;
            width: 44px !important;
            height: 44px !important;
          }
        }
      `}</style>
    </button>
  );
}
