import React, { useState, useEffect, useRef } from 'react';
import { Award, ShieldCheck, Sun, DollarSign, Truck, Headphones, TrendingUp, Users, Factory, CheckCircle2 } from 'lucide-react';
import { WHY_US_FEATURES } from '../data/products';

function AnimatedCounter({ target, prefix = '', suffix = '', duration = 1400 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * target);
            setCount(currentVal);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={counterRef}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const cardThemes = [
    {
      num: '01',
      tag: 'جودة عالمية',
      color: '#00a896',
      bgLight: '#f0fdfa',
      borderLight: '#ccfbf1',
      glow: 'rgba(0, 168, 150, 0.15)',
      icon: <Award size={28} color="#00a896" />
    },
    {
      num: '02',
      tag: 'أمان وثقة',
      color: '#0284c7',
      bgLight: '#f0f9ff',
      borderLight: '#bae6fd',
      glow: 'rgba(2, 132, 199, 0.15)',
      icon: <ShieldCheck size={28} color="#0284c7" />
    },
    {
      num: '03',
      tag: 'حماية متطورة',
      color: '#d97706',
      bgLight: '#fffbeb',
      borderLight: '#fde68a',
      glow: 'rgba(217, 119, 6, 0.15)',
      icon: <Sun size={28} color="#d97706" />
    },
    {
      num: '04',
      tag: 'بدون وسطاء',
      color: '#16a34a',
      bgLight: '#f0fdf4',
      borderLight: '#bbf7d0',
      glow: 'rgba(22, 163, 74, 0.15)',
      icon: <DollarSign size={28} color="#16a34a" />
    },
    {
      num: '05',
      tag: 'تغطية شاملة',
      color: '#4f46e5',
      bgLight: '#eef2ff',
      borderLight: '#c7d2fe',
      glow: 'rgba(79, 70, 229, 0.15)',
      icon: <Truck size={28} color="#4f46e5" />
    },
    {
      num: '06',
      tag: 'دعم متواصل',
      color: '#9333ea',
      bgLight: '#faf5ff',
      borderLight: '#e9d5ff',
      glow: 'rgba(147, 51, 234, 0.15)',
      icon: <Headphones size={28} color="#9333ea" />
    }
  ];

  const stats = [
    { target: 15, prefix: '+', suffix: '', label: 'عاماً من الخبرة والريادة', sub: 'في صناعة الخزانات والفايبر جلاس', icon: <Factory size={22} color="#00a896" /> },
    { target: 25000, prefix: '+', suffix: '', label: 'عميل ومشروع منجز', sub: 'في مختلف المحافظات والمدن', icon: <Users size={22} color="#00b4d8" /> },
    { target: 60000, prefix: '+', suffix: '', label: 'خزان وحاجز تم توريدها', sub: 'بأعلى مقاييس الجودة والسلامة', icon: <TrendingUp size={22} color="#f77f00" /> },
    { target: 100, prefix: '', suffix: '%', label: 'خامات بيور معتمدة', sub: 'مطابقة لوزارة الصحة المصرية', icon: <ShieldCheck size={22} color="#25d366" /> }
  ];

  return (
    <section id="why-us" style={{ padding: '95px 0 105px', backgroundColor: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
      {/* Background Subtle Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-100px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 168, 150, 0.08) 0%, rgba(248, 250, 252, 0) 70%)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-120px',
          left: '-100px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, rgba(248, 250, 252, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Award size={16} />
            معايير الجودة والتميز
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0b2545', marginBottom: '12px' }}>
            ليه تختار شركة الشريف للخزانات؟
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.8 }}>
            نحن ندمج بين أحدث تقنيات القولبة الدورانية الأوروبية وأفضل خامات البولي إيثيلين النقية لنقدم منتجات تعيش لعشرات السنين بثقة تامة وأعلى درجات الأمان الصحي.
          </p>
        </div>

        {/* Ultra-Modern Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '64px'
          }}
        >
          {WHY_US_FEATURES.map((feature, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            return (
              <div
                key={idx}
                className="why-us-modern-card"
                style={{
                  padding: '34px 28px 30px',
                  borderRadius: '24px',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 10px 30px rgba(11, 37, 69, 0.04)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = theme.color;
                  e.currentTarget.style.boxShadow = `0 20px 45px ${theme.glow}`;
                  const iconBox = e.currentTarget.querySelector('.modern-icon-box');
                  if (iconBox) iconBox.style.transform = 'scale(1.1) rotate(-4deg)';
                  const line = e.currentTarget.querySelector('.modern-card-line');
                  if (line) line.style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(11, 37, 69, 0.04)';
                  const iconBox = e.currentTarget.querySelector('.modern-icon-box');
                  if (iconBox) iconBox.style.transform = 'scale(1) rotate(0deg)';
                  const line = e.currentTarget.querySelector('.modern-card-line');
                  if (line) line.style.width = '0%';
                }}
              >
                {/* Ambient Top Corner Light */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '150px',
                    height: '150px',
                    background: `radial-gradient(circle at 100% 0%, ${theme.bgLight} 0%, rgba(255,255,255,0) 70%)`,
                    pointerEvents: 'none'
                  }}
                />

                <div>
                  {/* Card Header: Icon + Number & Tag Pill */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '24px'
                    }}
                  >
                    {/* Modern Gradient Icon Wrapper */}
                    <div
                      className="modern-icon-box"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '18px',
                        backgroundColor: theme.bgLight,
                        border: `1.5px solid ${theme.borderLight}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.35s ease',
                        boxShadow: `0 6px 16px ${theme.glow}`
                      }}
                    >
                      {theme.icon}
                    </div>

                    {/* Step Number & Category Tag */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          color: theme.color,
                          backgroundColor: theme.bgLight,
                          border: `1px solid ${theme.borderLight}`,
                          padding: '4px 12px',
                          borderRadius: '50px',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {theme.tag}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: '1.2rem',
                          fontWeight: 900,
                          color: '#cbd5e1'
                        }}
                      >
                        {theme.num}
                      </span>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3
                    style={{
                      fontSize: '1.26rem',
                      fontWeight: 800,
                      color: '#0b2545',
                      marginBottom: '12px',
                      lineHeight: 1.4
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: '#475569',
                      lineHeight: 1.75,
                      margin: 0,
                      fontWeight: 500
                    }}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Interactive Modern Accent Line */}
                <div
                  style={{
                    marginTop: '24px',
                    height: '3px',
                    width: '100%',
                    backgroundColor: '#f1f5f9',
                    borderRadius: '2px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    className="modern-card-line"
                    style={{
                      height: '100%',
                      width: '0%',
                      backgroundColor: theme.color,
                      borderRadius: '2px',
                      transition: 'width 0.4s ease'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Ultra-Modern Futuristic Stats Dashboard */}
        <div
          style={{
            background: 'linear-gradient(135deg, #07162c 0%, #0b2545 50%, #08203e 100%)',
            borderRadius: '32px',
            padding: '36px 32px 40px',
            color: '#ffffff',
            boxShadow: '0 25px 60px rgba(7, 22, 44, 0.35)',
            border: '1.5px solid rgba(56, 189, 248, 0.22)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Ambient Glowing Mesh Circles */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '10%',
              width: '260px',
              height: '260px',
              background: 'radial-gradient(circle, rgba(0, 168, 150, 0.22) 0%, rgba(7,22,44,0) 70%)',
              pointerEvents: 'none',
              filter: 'blur(30px)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-60px',
              left: '15%',
              width: '260px',
              height: '260px',
              background: 'radial-gradient(circle, rgba(2, 132, 199, 0.2) 0%, rgba(7,22,44,0) 70%)',
              pointerEvents: 'none',
              filter: 'blur(30px)'
            }}
          />

          {/* Top Live Status Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '28px',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              position: 'relative',
              zIndex: 2
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ position: 'relative', display: 'flex', width: '10px', height: '10px' }}>
                <span
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#25d366',
                    opacity: 0.75,
                    animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#25d366'
                  }}
                />
              </span>
              <span style={{ fontSize: '0.94rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '0.2px' }}>
                إحصائيات وإنجازات حقيقية موثقة
              </span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '4px 14px',
                borderRadius: '50px',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#38bdf8'
              }}
            >
              <CheckCircle2 size={14} color="#38bdf8" />
              <span>محدثة لعام 2026</span>
            </div>
          </div>

          {/* 4 Modern Stat Glass Pods */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              position: 'relative',
              zIndex: 2
            }}
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="stat-modern-pod"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '22px',
                  padding: '26px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.35s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.5)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 180, 216, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top Glowing Icon Box */}
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1.5px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}
                >
                  {stat.icon}
                </div>

                {/* Big Gradient Number with Fast Smooth Count-up */}
                <div
                  style={{
                    fontSize: '2.6rem',
                    fontWeight: 900,
                    fontFamily: "'Outfit', sans-serif",
                    lineHeight: 1.1,
                    marginBottom: '8px',
                    background: 'linear-gradient(135deg, #ffffff 40%, #38bdf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.5px'
                  }}
                >
                  <AnimatedCounter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} duration={1300} />
                </div>

                {/* Label */}
                <div style={{ fontSize: '1.08rem', color: '#ffffff', fontWeight: 800, marginBottom: '6px' }}>
                  {stat.label}
                </div>

                {/* Subtitle */}
                <div style={{ fontSize: '0.84rem', color: '#94a3b8', fontWeight: 500, lineHeight: 1.4 }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
