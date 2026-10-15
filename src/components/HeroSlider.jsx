import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ShieldCheck, ArrowDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_PHONE_INT } from '../data/products';

export default function HeroSlider({ onExploreProducts }) {
  const slides = [
    {
      id: 1,
      image: `${import.meta.env.BASE_URL}assets/images/hero_villa_tanks.webp`,
      tag: 'الجودة رقم #1 في مصر',
      title: 'خزانات بولي إيثيلين وفايبر جلاس بأعلى معايير النقاء والأمان',
      highlight: 'سعات من 500 إلى 20,000 لتر',
      description: 'تصنيع فائق الجودة بتقنية 4 طبقات بيور معزولة حرارياً ومقاومة لأشعة الشمس والبكتيريا. مثالية لأسطح الفلل، المباني السكنية، المزارع والمنشآت الصناعية مع ضمان 10 سنوات.',
      badges: ['خامات غذائية معتمدة 100%', 'عزل حراري ضد حرارة الصيف', 'ضمان 10 سنوات استبدال'],
      ctaText: 'اكتشف منتجاتنا',
      waMessage: 'مرحباً، أود الاستفسار عن خزانات المياه وأسعار السعات المتاحة'
    },
    {
      id: 2,
      image: `${import.meta.env.BASE_URL}assets/images/hero_road_barriers.webp`,
      tag: 'حلول السلامة المرورية والإنشائية',
      title: 'حواجز أمان الطرق ونيوجيرسي فائقة التحمل ومقاومة الصدمات',
      highlight: 'معتمدة لمشاريع الطرق والكباري',
      description: 'حواجز بولي إيثيلين وفايبر جلاس متينة بنظام تعشيق متكامل وإمكانية ملء المياه والرمال، مجهزة بعواكس ليلية ثلاثية الأبعاد لتأمين مواقع العمل والمحاور الرئيسية.',
      badges: ['مقاومة عالية للصدمات', 'عواكس ضوئية ليلية فسفورية', 'تعبئة مياه ورمال حتى 200 كجم'],
      ctaText: 'اكتشف منتجاتنا',
      waMessage: 'مرحباً، أود الاستفسار وطلب حواجز أمان نيوجيرسي للطرق'
    },
    {
      id: 3,
      image: `${import.meta.env.BASE_URL}assets/images/hero_guard_kiosk.webp`,
      tag: 'كبائن وأكشاك حراسة مودرن',
      title: 'أكشاك فايبر جلاس معزولة ومجهزة هندسياً بتشطيب فندقي فاخر',
      highlight: 'رؤية بانورامية 360 درجة',
      description: 'أكشاك حراسة دائرية ومربعة بمقاسات متعددة معزولة حرارياً وصوتياً، مجهزة بالكهرباء والإنارة وشبابيك ألوميتال ومقاومة تامة للأمطار والشمس لبوابات الكمبوندات والمصانع.',
      badges: ['عزل حراري وبولي يوريثان', 'تجهيز كهربائي متكامل', 'دهانات جلكوت بريطانية فاخرة'],
      ctaText: 'اكتشف منتجاتنا',
      waMessage: 'مرحباً، أود الاستفسار عن مقاسات وتجهيزات أكشاك الحراسة الفايبر جلاس'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Continuous auto-sliding every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    if (onExploreProducts) {
      onExploreProducts();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '520px',
        height: '75vh',
        maxHeight: '700px',
        overflow: 'hidden',
        backgroundColor: '#07162c',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      {/* Background Images with Smooth Crossfade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            opacity: index === currentIndex ? 1 : 0,
            transform: index === currentIndex ? 'scale(1)' : 'scale(1.05)',
            transition: 'opacity 1.2s ease-in-out, transform 5s ease-out',
            zIndex: 1
          }}
        />
      ))}

      {/* Optimized Text Backdrop: Dark on the Right (behind text), 100% CLEAR and TRANSPARENT on the Left for the image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to left, rgba(7, 22, 44, 0.88) 0%, rgba(7, 22, 44, 0.65) 35%, rgba(7, 22, 44, 0.15) 60%, rgba(7, 22, 44, 0) 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Hero Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', alignItems: 'center', paddingTop: '40px', paddingBottom: '30px' }}>
        <div style={{ maxWidth: '780px', color: '#ffffff' }}>
          {/* Top Pill Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(0, 168, 150, 0.22)',
              border: '1px solid rgba(0, 168, 150, 0.6)',
              padding: '6px 16px',
              borderRadius: '50px',
              fontSize: '0.92rem',
              fontWeight: 700,
              color: '#38bdf8',
              marginBottom: '18px',
              backdropFilter: 'blur(8px)'
            }}
          >
            <ShieldCheck size={18} color="#00a896" />
            <span>{currentSlide.tag}</span>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
            <span style={{ color: '#ffffff' }}>{currentSlide.highlight}</span>
          </div>

          {/* Main Hero Headline */}
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw + 1rem, 3.4rem)',
              fontWeight: 900,
              lineHeight: 1.25,
              marginBottom: '26px',
              color: '#ffffff',
              textShadow: '0 4px 20px rgba(0,0,0,0.6)'
            }}
          >
            {currentSlide.title}
          </h1>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <button
              onClick={handleCtaClick}
              className="btn btn-teal"
              style={{
                fontSize: '1.08rem',
                padding: '14px 32px',
                borderRadius: '50px'
              }}
            >
              <span>{currentSlide.ctaText}</span>
              <ArrowDown size={18} />
            </button>

            <a
              href={`https://wa.me/${COMPANY_PHONE_INT}?text=${encodeURIComponent(currentSlide.waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                fontSize: '1.08rem',
                padding: '14px 28px',
                borderRadius: '50px',
                gap: '8px'
              }}
            >
              <WhatsAppIcon size={22} />
              <span>اطلب فوراً عبر واتساب</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slider Controls (Arrows & Dot Indicators) */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '30px',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <button
          onClick={prevSlide}
          aria-label="الشريحة السابقة"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'rgba(7, 22, 44, 0.65)',
            backdropFilter: 'blur(10px)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1.5px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#00a896';
            e.currentTarget.style.borderColor = '#00a896';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(7, 22, 44, 0.65)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          }}
        >
          <ChevronRight size={24} />
        </button>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`انتقال للشريحة ${idx + 1}`}
              style={{
                width: idx === currentIndex ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: idx === currentIndex ? '#00a896' : 'rgba(255, 255, 255, 0.45)',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="الشريحة التالية"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'rgba(7, 22, 44, 0.65)',
            backdropFilter: 'blur(10px)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1.5px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#00a896';
            e.currentTarget.style.borderColor = '#00a896';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(7, 22, 44, 0.65)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          }}
        >
          <ChevronLeft size={24} />
        </button>
      </div>
    </section>
  );
}
