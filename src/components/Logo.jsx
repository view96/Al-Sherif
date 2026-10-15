import React from 'react';

export default function Logo({ size = 'medium', light = false, className = '' }) {
  const heights = {
    small: 44,
    medium: 58,
    large: 72
  };

  const currentHeight = heights[size] || 58;
  const base = import.meta.env.BASE_URL || '/';
  const logoSrc = light ? `${base}logo_footer.webp` : `${base}logo.webp`;

  return (
    <div
      className={`logo-wrapper brand-logo-interactive ${light ? 'logo-light' : 'logo-dark'} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        userSelect: 'none'
      }}
    >
      <img
        src={logoSrc}
        alt="شركة الشريف للخزانات وحواجز الأمان"
        style={{
          height: currentHeight,
          width: 'auto',
          maxHeight: '100%',
          objectFit: 'contain',
          display: 'block',
          filter: light
            ? 'drop-shadow(0 2px 14px rgba(56, 189, 248, 0.35))'
            : 'drop-shadow(0 2px 8px rgba(11, 37, 69, 0.08))'
        }}
      />

      <style>{`
        .brand-logo-interactive {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), filter 0.25s ease;
        }
        .brand-logo-interactive:hover {
          transform: scale(1.04);
        }
        .brand-logo-interactive:active {
          transform: scale(0.97);
        }
      `}</style>
    </div>
  );
}
