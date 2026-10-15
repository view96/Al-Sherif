import React from 'react';
import { PARTNERS } from '../data/products';

export default function Partners() {
  // Duplicate array 3 times for a continuous, unbroken smooth marquee loop
  const trippledPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section
      id="partners"
      style={{
        padding: '70px 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ marginBottom: '36px' }}>
        <div style={{ textAlign: 'center' }}>
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              color: '#00a896',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              padding: '4px 14px',
              backgroundColor: 'rgba(0, 168, 150, 0.1)',
              borderRadius: '50px',
              display: 'inline-block',
              marginBottom: '10px'
            }}
          >
            ثقة كبرى الشركات والمطورين
          </span>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0b2545', marginBottom: '8px' }}>
            شركاء النجاح والمشروعات الكبرى
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.98rem', maxWidth: '650px', margin: '0 auto' }}>
            نفتخر بتوريد منتجاتنا لكبرى الهيئات والمؤسسات وشركات التطوير العقاري والمقاولات في جمهورية مصر العربية
          </p>
        </div>
      </div>

      {/* Infinite Seamless Scrolling Container */}
      <div
        className="partners-marquee-box"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '16px 0',
          direction: 'ltr'
        }}
      >
        {/* Left and Right Fade Gradient Masks */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '120px',
            background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0) 100%)',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '120px',
            background: 'linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0) 100%)',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        />

        {/* Continuous Marquee Track */}
        <div className="partners-marquee-track">
          {trippledPartners.map((partner, idx) => (
            <div key={idx} className="partner-logo-card">
              <div className="partner-logo-img-wrapper">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="partner-logo-img"
                />
              </div>
              <span className="partner-company-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .partners-marquee-box {
          direction: ltr !important;
        }

        .partners-marquee-track {
          display: flex;
          gap: 28px;
          width: max-content;
          flex-shrink: 0;
          direction: ltr !important;
          animation: partnersLoop 24s linear infinite;
          will-change: transform;
        }

        .partners-marquee-box:hover .partners-marquee-track {
          animation-play-state: paused;
        }

        .partner-logo-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 14px;
          background-color: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          padding: 18px 24px;
          width: 230px;
          height: 136px;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.04);
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
          box-sizing: border-box;
        }

        .partner-logo-img-wrapper {
          width: 100%;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .partner-logo-img {
          max-height: 52px;
          max-width: 180px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          margin: 0 auto;
          transition: all 0.35s ease;
        }

        .partner-company-name {
          width: 100%;
          display: block;
          font-weight: 800;
          font-size: 0.92rem;
          color: #334155;
          text-align: center;
          direction: rtl;
          margin: 0 auto;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .partner-logo-card:hover {
          background-color: #ffffff !important;
          border-color: #00a896 !important;
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 14px 32px rgba(0, 168, 150, 0.16) !important;
        }

        .partner-logo-card:hover .partner-company-name {
          color: #00a896;
        }

        .partner-logo-card:hover .partner-logo-img {
          transform: scale(1.04);
        }

        @keyframes partnersLoop {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
