import React from 'react';

export default function ProductGraphic({ type, capacity, className = '', height = 180 }) {
  // SVG Graphic renders depending on product type
  switch (type) {
    case 'tank-horizontal':
      return (
        <svg
          viewBox="0 0 320 200"
          height={height}
          className={className}
          style={{ width: 'auto', maxWidth: '100%', filter: 'drop-shadow(0 12px 20px rgba(11,37,69,0.12))' }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="tankWhiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="tankCapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0b2545" />
              <stop offset="100%" stopColor="#00a896" />
            </linearGradient>
            <linearGradient id="standGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,168,150,0.15)" />
              <stop offset="100%" stopColor="rgba(0,180,216,0.2)" />
            </linearGradient>
          </defs>

          {/* Soft base shadow */}
          <ellipse cx="160" cy="180" rx="130" ry="14" fill="rgba(11,37,69,0.08)" />

          {/* Tank Support Legs / Base Brackets */}
          <rect x="70" y="140" width="30" height="35" rx="4" fill="url(#standGrad)" />
          <rect x="220" y="140" width="30" height="35" rx="4" fill="url(#standGrad)" />

          {/* Main Horizontal Tank Body */}
          <rect x="50" y="60" width="220" height="100" rx="40" fill="url(#tankWhiteGrad)" stroke="#94a3b8" strokeWidth="2.5" />

          {/* Reinforced Circumferential Ribs */}
          <path d="M85 61 V159" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
          <path d="M120 60 V160" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
          <path d="M160 60 V160" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
          <path d="M200 60 V160" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
          <path d="M235 61 V159" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />

          {/* Gloss highlight streak */}
          <path d="M70 75 Q160 70 250 75" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.8" />

          {/* Brand Stamping on Tank */}
          <rect x="110" y="95" width="100" height="35" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <text x="160" y="110" textAnchor="middle" fill="#0b2545" fontSize="10" fontWeight="900" fontFamily="Tajawal, sans-serif">شركة الشريف</text>
          <text x="160" y="122" textAnchor="middle" fill="#00a896" fontSize="8" fontWeight="800" fontFamily="Outfit, sans-serif">
            {capacity ? `سعة ${capacity}` : 'EL SHERIF'}
          </text>

          {/* Top Access Manhole Neck & Threaded Cap */}
          <rect x="140" y="44" width="40" height="18" rx="3" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
          <rect x="135" y="38" width="50" height="12" rx="4" fill="url(#tankCapGrad)" />

          {/* Inlet & Outlet Brass / Poly Fitting Ports */}
          <circle cx="50" cy="110" r="7" fill="#028090" stroke="#ffffff" strokeWidth="2" />
          <circle cx="270" cy="140" r="7" fill="#028090" stroke="#ffffff" strokeWidth="2" />
        </svg>
      );

    case 'tank-vertical':
      return (
        <svg
          viewBox="0 0 240 220"
          height={height}
          className={className}
          style={{ width: 'auto', maxWidth: '100%', filter: 'drop-shadow(0 12px 20px rgba(11,37,69,0.12))' }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vertTankGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="35%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="vertCapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0b2545" />
              <stop offset="100%" stopColor="#00a896" />
            </linearGradient>
          </defs>

          {/* Shadow */}
          <ellipse cx="120" cy="200" rx="75" ry="12" fill="rgba(11,37,69,0.1)" />

          {/* Top Domed Head */}
          <path d="M50 65 C50 35 190 35 190 65 Z" fill="url(#vertTankGrad)" stroke="#94a3b8" strokeWidth="2" />

          {/* Main Vertical Cylinder Body */}
          <rect x="50" y="60" width="140" height="135" rx="8" fill="url(#vertTankGrad)" stroke="#94a3b8" strokeWidth="2" />

          {/* Multiple Strengthening Ribs */}
          <line x1="50" y1="80" x2="190" y2="80" stroke="#cbd5e1" strokeWidth="5" />
          <line x1="50" y1="105" x2="190" y2="105" stroke="#cbd5e1" strokeWidth="5" />
          <line x1="50" y1="130" x2="190" y2="130" stroke="#cbd5e1" strokeWidth="5" />
          <line x1="50" y1="155" x2="190" y2="155" stroke="#cbd5e1" strokeWidth="5" />
          <line x1="50" y1="180" x2="190" y2="180" stroke="#cbd5e1" strokeWidth="5" />

          {/* Gloss highlight streak */}
          <path d="M75 55 V185" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.8" />

          {/* Brand Logo Label */}
          <rect x="80" y="112" width="80" height="32" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <text x="120" y="126" textAnchor="middle" fill="#0b2545" fontSize="9" fontWeight="900" fontFamily="Tajawal, sans-serif">شركة الشريف</text>
          <text x="120" y="137" textAnchor="middle" fill="#00a896" fontSize="7.5" fontWeight="800" fontFamily="Outfit, sans-serif">
            {capacity ? `سعة ${capacity}` : '4 LAYERS'}
          </text>

          {/* Top Threaded Inspection Lid */}
          <rect x="100" y="24" width="40" height="16" rx="4" fill="url(#vertCapGrad)" />

          {/* Fitting Valve Point */}
          <circle cx="120" cy="188" r="6" fill="#028090" stroke="#ffffff" strokeWidth="2" />
        </svg>
      );

    case 'road-barrier':
      return (
        <svg
          viewBox="0 0 260 190"
          height={height}
          className={className}
          style={{ width: 'auto', maxWidth: '100%', filter: 'drop-shadow(0 12px 20px rgba(11,37,69,0.12))' }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="barrierRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
            <linearGradient id="barrierWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>

          {/* Shadow */}
          <ellipse cx="130" cy="170" rx="100" ry="10" fill="rgba(11,37,69,0.12)" />

          {/* Background white barrier for 3D pair look */}
          <g transform="translate(45, -15) scale(0.85)">
            <path
              d="M60 45 L140 45 L155 90 L175 145 L175 170 L25 170 L25 145 L45 90 Z"
              fill="url(#barrierWhiteGrad)"
              stroke="#94a3b8"
              strokeWidth="2"
            />
            {/* Reflective strip */}
            <rect x="52" y="80" width="96" height="16" fill="#ef4444" rx="2" opacity="0.85" />
          </g>

          {/* Foreground Primary Heavy-Duty Red Barrier */}
          <path
            d="M50 50 L150 50 L168 100 L195 155 L195 175 L10 175 L10 155 L32 100 Z"
            fill="url(#barrierRedGrad)"
            stroke="#991b1b"
            strokeWidth="2"
          />

          {/* Structural Grooves & Water/Sand Ballast fill cap */}
          <rect x="90" y="40" width="20" height="12" rx="3" fill="#1e293b" />
          <path d="M42 105 H158" stroke="#fca5a5" strokeWidth="4" opacity="0.6" />
          <path d="M28 145 H177" stroke="#991b1b" strokeWidth="5" />

          {/* High Intensity Prism Reflective Safety Band */}
          <polygon points="56,70 144,70 152,90 48,90" fill="#ffffff" />
          <polygon points="68,70 82,70 76,90 62,90" fill="#ef4444" />
          <polygon points="100,70 114,70 108,90 94,90" fill="#ef4444" />
          <polygon points="132,70 146,70 140,90 126,90" fill="#ef4444" />

          {/* El Sherif Stamping */}
          <text x="100" y="130" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="Tajawal, sans-serif">EL SHERIF</text>
          <text x="100" y="142" textAnchor="middle" fill="#fee2e2" fontSize="7.5" fontWeight="700" fontFamily="Cairo, sans-serif">حاجز أمان نيوجيرسي</text>

          {/* Interlocking Link Lugs */}
          <rect x="5" y="140" width="12" height="24" rx="3" fill="#7f1d1d" />
          <rect x="183" y="140" width="12" height="24" rx="3" fill="#7f1d1d" />
        </svg>
      );

    case 'guard-kiosk':
      return (
        <svg
          viewBox="0 0 240 220"
          height={height}
          className={className}
          style={{ width: 'auto', maxWidth: '100%', filter: 'drop-shadow(0 14px 24px rgba(11,37,69,0.14))' }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="kioskRoofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0b2545" />
              <stop offset="100%" stopColor="#1d4e89" />
            </linearGradient>
            <linearGradient id="kioskWallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="50%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>
          </defs>

          {/* Shadow */}
          <ellipse cx="120" cy="205" rx="85" ry="10" fill="rgba(11,37,69,0.15)" />

          {/* Heavy Base Plinth */}
          <rect x="40" y="185" width="160" height="15" rx="4" fill="#0b2545" />

          {/* Main Cabin Body */}
          <rect x="50" y="65" width="140" height="122" rx="10" fill="url(#kioskWallGrad)" stroke="#cbd5e1" strokeWidth="2" />

          {/* Panoramic Security Windows */}
          <rect x="62" y="80" width="70" height="55" rx="6" fill="url(#glassGrad)" stroke="#0b2545" strokeWidth="2" />
          <line x1="97" y1="80" x2="97" y2="135" stroke="#0b2545" strokeWidth="2" />
          <path d="M68 85 L90 128" stroke="#ffffff" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
          <path d="M102 85 L125 128" stroke="#ffffff" strokeWidth="2" opacity="0.6" strokeLinecap="round" />

          {/* Access Door with Viewing Window */}
          <rect x="140" y="80" width="40" height="105" rx="4" fill="#f8fafc" stroke="#0b2545" strokeWidth="1.5" />
          <rect x="148" y="90" width="24" height="35" rx="3" fill="url(#glassGrad)" stroke="#0b2545" strokeWidth="1.5" />
          <circle cx="146" cy="140" r="3" fill="#00a896" />

          {/* Streamlined Overhanging Fiberglass Roof with LED Bar */}
          <path d="M35 50 L205 50 C210 50 215 54 212 60 L200 68 L40 68 L28 60 C25 54 30 50 35 50 Z" fill="url(#kioskRoofGrad)" />
          <rect x="60" y="62" width="120" height="3" rx="1.5" fill="#38bdf8" opacity="0.9" />

          {/* Brand Plaque above window */}
          <rect x="72" y="69" width="50" height="8" rx="2" fill="#00a896" />
          <text x="97" y="75.5" textAnchor="middle" fill="#ffffff" fontSize="5" fontWeight="900" fontFamily="Tajawal, sans-serif">شركة الشريف</text>
        </svg>
      );

    case 'fiberglass-tank':
      return (
        <svg
          viewBox="0 0 300 190"
          height={height}
          className={className}
          style={{ width: 'auto', maxWidth: '100%', filter: 'drop-shadow(0 12px 20px rgba(11,37,69,0.12))' }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grpGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00b4d8" />
              <stop offset="50%" stopColor="#0077b6" />
              <stop offset="100%" stopColor="#03045e" />
            </linearGradient>
            <linearGradient id="grpSaddle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <ellipse cx="150" cy="170" rx="120" ry="12" fill="rgba(11,37,69,0.12)" />
          {/* Saddles */}
          <path d="M60 120 L50 160 L90 160 L80 120 Z" fill="url(#grpSaddle)" />
          <path d="M220 120 L210 160 L250 160 L240 120 Z" fill="url(#grpSaddle)" />
          {/* GRP Tank Body */}
          <rect x="40" y="55" width="220" height="90" rx="35" fill="url(#grpGrad)" stroke="#0096c7" strokeWidth="2" />
          {/* Internal fiberglass weave lines */}
          <path d="M40 75 Q150 65 260 75" stroke="#90e0ef" strokeWidth="3" opacity="0.5" />
          <path d="M40 100 Q150 90 260 100" stroke="#90e0ef" strokeWidth="3" opacity="0.5" />
          <path d="M40 125 Q150 115 260 125" stroke="#90e0ef" strokeWidth="3" opacity="0.5" />
          {/* Label */}
          <rect x="105" y="85" width="90" height="30" rx="5" fill="rgba(255,255,255,0.95)" />
          <text x="150" y="99" textAnchor="middle" fill="#0b2545" fontSize="9" fontWeight="900" fontFamily="Tajawal, sans-serif">خزان فايبر جلاس مسلح</text>
          <text x="150" y="110" textAnchor="middle" fill="#0077b6" fontSize="7.5" fontWeight="800" fontFamily="Cairo, sans-serif">GRP HEAVY DUTY</text>
          {/* Manhole dome */}
          <rect x="130" y="38" width="40" height="18" rx="4" fill="#0b2545" stroke="#00b4d8" strokeWidth="1.5" />
        </svg>
      );

    default:
      return null;
  }
}
