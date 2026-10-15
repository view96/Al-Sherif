import React from 'react';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function Testimonials() {
  // Duplicate array so first half and second half are identical clones for a 100% seamless -50% loop
  const doubledReviews = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" style={{ padding: '80px 0 95px', backgroundColor: '#f8fafc', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container" style={{ marginBottom: '36px' }}>
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-tag">تجارب حقيقية موثقة</span>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0b2545', marginBottom: '10px' }}>
            آراء وتقييمات عملاء شركة الشريف
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '650px', margin: '0 auto' }}>
            نفخر برضا وثقة آلاف العملاء والمهندسين وأصحاب الفلل والشركات في جميع محافظات جمهورية مصر العربية.
          </p>
        </div>
      </div>

      {/* Infinite Seamless Scrolling Container (Explicit LTR direction for zero-gap translation) */}
      <div
        className="testimonials-marquee-box"
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
            width: '140px',
            background: 'linear-gradient(to right, #f8fafc 0%, rgba(248,250,252,0) 100%)',
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
            width: '140px',
            background: 'linear-gradient(to left, #f8fafc 0%, rgba(248,250,252,0) 100%)',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        />

        {/* Continuous Track */}
        <div className="testimonials-marquee-track">
          {doubledReviews.map((review, idx) => (
            <div
              key={idx}
              className="testimonial-marquee-card"
              style={{
                width: '380px',
                backgroundColor: '#ffffff',
                borderRadius: '22px',
                padding: '26px',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 8px 25px rgba(11, 37, 69, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexShrink: 0,
                transition: 'all 0.3s ease',
                cursor: 'default',
                direction: 'rtl'
              }}
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={17} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <Quote size={24} color="#00a896" opacity={0.5} />
                </div>

                {/* Review Comment */}
                <p style={{ color: '#334155', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'normal', fontWeight: 600 }}>
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontWeight: 800, color: '#0b2545', fontSize: '1.02rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>{review.name}</span>
                  <CheckCircle size={15} color="#00a896" />
                </div>
                <div style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
                  {review.role}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>
                  <MapPin size={13} color="#00a896" />
                  <span>{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-marquee-box {
          direction: ltr !important;
        }

        .testimonials-marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          flex-shrink: 0;
          direction: ltr !important;
          animation: testimonialsLoop 38s linear infinite;
          will-change: transform;
        }

        .testimonials-marquee-box:hover .testimonials-marquee-track {
          animation-play-state: paused;
        }

        .testimonial-marquee-card {
          direction: rtl !important; /* Proper Arabic card direction */
        }

        .testimonial-marquee-card:hover {
          transform: translateY(-6px);
          border-color: #00a896 !important;
          box-shadow: 0 16px 35px rgba(0, 168, 150, 0.12) !important;
        }

        @keyframes testimonialsLoop {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
