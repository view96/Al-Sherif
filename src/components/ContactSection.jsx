import React, { useState } from 'react';
import { Phone, MapPin, Send, ExternalLink, Clock, ShieldCheck, Award, PackageCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_PHONE, COMPANY_PHONE_INT, COMPANY_LOCATION } from '../data/products';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productType: 'خزانات بولي إيثيلين أفقية',
    capacity: '5000 لتر',
    location: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `مرحباً شركة الشريف، أرغب في طلب عرض سعر:
- الاسم: ${formData.name || 'عميل كريم'}
- الهاتف: ${formData.phone || 'غير محدد'}
- نوع المنتج: ${formData.productType}
- السعة / الحجم المطلوب: ${formData.capacity}
- العنوان / المحافظة: ${formData.location || 'غير محدد'}
- ملاحظات إضافية: ${formData.notes || 'لا يوجد'}`;

    window.open(`https://wa.me/${COMPANY_PHONE_INT}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const googleMapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_LOCATION)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  const googleMapsDirectLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_LOCATION)}`;

  const stats = [
    { value: '+15', label: 'عاماً من الخبرة والجودة', icon: Award, color: '#00a896' },
    { value: '+25K', label: 'عميل ومشروع منجز', icon: ShieldCheck, color: '#00b4d8' },
    { value: '4', label: 'أقسام منتجات رئيسية', icon: PackageCheck, color: '#f77f00' },
    { value: '24/7', label: 'دعم واستقبال طلبات', icon: Clock, color: '#25d366' },
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      {/* Creative Dark Contact Hero Banner */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#07162c',
          background: 'radial-gradient(circle at 50% 20%, rgba(0, 168, 150, 0.2) 0%, transparent 60%), linear-gradient(180deg, #07162c 0%, #0b2545 100%)',
          color: '#ffffff',
          padding: '80px 0 65px',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        {/* Subtle Ambient Background Elements */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 180, 216, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '-40px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 168, 150, 0.18) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* Top Pill Badge with Live Green Indicator */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(0, 168, 150, 0.25)',
              border: '1.5px solid #00a896',
              padding: '8px 22px',
              borderRadius: '50px',
              marginBottom: '24px',
              boxShadow: '0 4px 20px rgba(0, 168, 150, 0.3)'
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#25d366',
                boxShadow: '0 0 12px #25d366'
              }}
            />
            <span style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff' }}>
              نحن هنا لخدمتكم وتلبية طلباتكم فوراً
            </span>
          </div>

          {/* Main Title - Explicit pure white with vivid cyan accent */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '18px',
              letterSpacing: '-0.5px',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)'
            }}
          >
            تواصل معنا في{' '}
            <span
              style={{
                color: '#38bdf8',
                backgroundImage: 'linear-gradient(135deg, #38bdf8 0%, #2dd4bf 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              شركة الشريف
            </span>
          </h1>

          {/* Subtitle - High contrast pure light text */}
          <p
            style={{
              fontSize: '1.15rem',
              color: '#e2e8f0',
              fontWeight: 600,
              maxWidth: '720px',
              margin: '0 auto 42px',
              lineHeight: 1.8,
              textShadow: '0 1px 10px rgba(0,0,0,0.3)'
            }}
          >
            نحن هنا للرد على كافة استفساراتكم وتوفير أفضل عروض الأسعار لخزانات المياه وحواجز الأمان وأكشاك الفايبر جلاس مع سرعة التوريد لكافة أنحاء مصر.
          </p>

          {/* Creative Stats & Features Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '18px',
              maxWidth: '920px',
              margin: '0 auto'
            }}
          >
            {stats.map((item, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(11, 37, 69, 0.65)',
                    backdropFilter: 'blur(12px)',
                    border: '1.5px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '18px',
                    padding: '20px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(17, 48, 86, 0.85)';
                    e.currentTarget.style.borderColor = '#00a896';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 14px 30px rgba(0, 168, 150, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(11, 37, 69, 0.65)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.25)';
                  }}
                >
                  <div
                    style={{
                      fontSize: '2.1rem',
                      fontWeight: 900,
                      color: item.color,
                      lineHeight: 1.1,
                      marginBottom: '6px',
                      textShadow: `0 0 20px ${item.color}66`
                    }}
                  >
                    {item.value}
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 800 }}>
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content: Contact Info Cards + Location & Quotation Form */}
      <section id="contact" style={{ padding: '50px 0 90px', position: 'relative' }}>
        <div className="container">
          {/* Quick Info Cards Matching Reference */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginBottom: '36px'
            }}
          >
            {/* Working Hours Card (Exact Match) */}
            <div
              className="glass-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1.5px solid #e2e8f0',
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                boxShadow: '0 6px 20px rgba(11, 37, 69, 0.04)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(139, 92, 246, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(11, 37, 69, 0.04)';
              }}
            >
              <div style={{ textAlign: 'right' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0b2545', marginBottom: '4px' }}>
                  ساعات العمل
                </h4>
                <p style={{ fontSize: '0.94rem', color: '#64748b', fontWeight: 600, margin: 0 }}>
                  يوميا من الساعه 9 صباحا وحتي الساعه 9 مساء
                </p>
              </div>

              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  backgroundColor: '#f5f3ff',
                  border: '1px solid #ede9fe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Clock size={26} color="#8b5cf6" />
              </div>
            </div>

            {/* Direct Phone Card */}
            <div
              className="glass-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1.5px solid #e2e8f0',
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                boxShadow: '0 6px 20px rgba(11, 37, 69, 0.04)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#00b4d8';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 180, 216, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(11, 37, 69, 0.04)';
              }}
            >
              <div style={{ textAlign: 'right' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0b2545', marginBottom: '4px' }}>
                  الهاتف والخط المباشر
                </h4>
                <a
                  href={`tel:${COMPANY_PHONE}`}
                  style={{ fontSize: '1.1rem', color: '#00b4d8', fontWeight: 800, direction: 'ltr', display: 'inline-block' }}
                >
                  {COMPANY_PHONE}
                </a>
              </div>

              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  backgroundColor: '#e0f2fe',
                  border: '1px solid #bae6fd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Phone size={24} color="#00b4d8" />
              </div>
            </div>

            {/* Direct WhatsApp Card */}
            <div
              className="glass-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1.5px solid #e2e8f0',
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                boxShadow: '0 6px 20px rgba(11, 37, 69, 0.04)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#25d366';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 211, 102, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(11, 37, 69, 0.04)';
              }}
            >
              <div style={{ textAlign: 'right' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0b2545', marginBottom: '4px' }}>
                  واتساب المبيعات
                </h4>
                <a
                  href={`https://wa.me/${COMPANY_PHONE_INT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.94rem', color: '#25d366', fontWeight: 800 }}
                >
                  طلب فوري وسريع ({COMPANY_PHONE})
                </a>
              </div>

              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  backgroundColor: '#dcfce7',
                  border: '1px solid #bbf7d0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <WhatsAppIcon size={26} color="#25d366" />
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
              gap: '32px',
              alignItems: 'start'
            }}
          >
            {/* Location & Map Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 12px 35px rgba(11, 37, 69, 0.06)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Top Written Address Box */}
              <div
                style={{
                  padding: '28px 28px 22px',
                  borderBottom: '1px solid #f1f5f9'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0, 168, 150, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={22} color="#00a896" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#00a896', textTransform: 'uppercase' }}>
                      موقع ومقر المصنع
                    </span>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0b2545', margin: 0 }}>
                      عنوان المصنع والإدارة
                    </h3>
                  </div>
                </div>

                {/* Written Address Badge */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '14px',
                    padding: '14px 18px',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '4px', fontWeight: 600 }}>
                    الموقع الرسمي المسجل:
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#0b2545', lineHeight: 1.5 }}>
                    {COMPANY_LOCATION}
                  </div>
                </div>

                {/* Direct Phone Call & Direct Map Button */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <a
                    href={`tel:${COMPANY_PHONE}`}
                    className="btn btn-outline"
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <Phone size={16} />
                    <span>{COMPANY_PHONE}</span>
                  </a>

                  <a
                    href={googleMapsDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <ExternalLink size={16} />
                    <span>فتح في الخرائط</span>
                  </a>
                </div>
              </div>

              {/* Google Map Iframe Card */}
              <div style={{ width: '100%', height: '280px', position: 'relative', backgroundColor: '#e2e8f0' }}>
                <iframe
                  title="موقع شركة الشريف على الخريطة"
                  src={googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Direct WhatsApp Quick Chat Bar */}
              <div style={{ padding: '20px 24px' }}>
                <a
                  href={`https://wa.me/${COMPANY_PHONE_INT}?text=${encodeURIComponent('مرحباً شركة الشريف، أود الاستفسار المباشر وموقع المصنع')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{
                    width: '100%',
                    padding: '13px',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    gap: '8px',
                    justifyContent: 'center'
                  }}
                >
                  <WhatsAppIcon size={20} />
                  <span>محادثة واتساب فورية ({COMPANY_PHONE})</span>
                </a>
              </div>
            </div>

            {/* Quick Quotation Form */}
            <div
              className="glass-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '34px',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 12px 35px rgba(11, 37, 69, 0.06)'
              }}
            >
              <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#0b2545', marginBottom: '6px' }}>
                طلب عرض سعر سريع
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', marginBottom: '22px' }}>
                املأ البيانات التالية وسيتم تحويل طلبك للواتساب مباشرة للتواصل معك خلال دقائق:
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                    الاسم الكريم:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: م. أحمد عبد الله"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid #cbd5e1',
                      fontFamily: 'inherit',
                      fontSize: '0.94rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                      رقم الهاتف / الواتساب:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010xxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontFamily: 'inherit',
                        fontSize: '0.94rem',
                        outline: 'none',
                        direction: 'ltr',
                        textAlign: 'right'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                      نوع المنتج:
                    </label>
                    <select
                      value={formData.productType}
                      onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontFamily: 'inherit',
                        fontSize: '0.94rem',
                        outline: 'none',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <option value="خزانات بولي إيثيلين أفقية">خزانات بولي إيثيلين أفقية</option>
                      <option value="خزانات بولي إيثيلين رأسية">خزانات بولي إيثيلين رأسية</option>
                      <option value="حواجز أمان ونيوجيرسي للطرق">حواجز أمان ونيوجيرسي للطرق</option>
                      <option value="أكشاك حراسة وكبائن فايبر جلاس">أكشاك حراسة وكبائن فايبر جلاس</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                      السعة أو الكمية المطلوبة:
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: 5000 لتر أو 20 حاجز"
                      value={formData.capacity}
                      onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontFamily: 'inherit',
                        fontSize: '0.94rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                      المحافظة / موقع التسليم:
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: القاهرة / القليوبية / الجيزة"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontFamily: 'inherit',
                        fontSize: '0.94rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                    ملاحظات أو مواصفات خاصة:
                  </label>
                  <textarea
                    rows="3"
                    placeholder="اكتب أي تفاصيل إضافية عن الرفع أو التوصيل أو الموقع..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid #cbd5e1',
                      fontFamily: 'inherit',
                      fontSize: '0.94rem',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-teal"
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    fontSize: '1.05rem',
                    marginTop: '4px'
                  }}
                >
                  <Send size={18} />
                  <span>إرسال الطلب عبر واتساب الآن</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
