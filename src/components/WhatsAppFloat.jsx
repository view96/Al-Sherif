import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_PHONE, COMPANY_PHONE_INT } from '../data/products';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: 'استفسار عن أسعار الخزانات والسعات', text: 'مرحباً شركة الشريف، أود الاستفسار عن أسعار وسعات خزانات المياه البولي إيثيلين' },
    { label: 'طلب حواجز أمان نيوجيرسي للطرق', text: 'مرحباً، أود طلب عرض سعر لحواجز أمان الطرق نيوجيرسي' },
    { label: 'طلب أكشاك وكبائن حراسة فايبر جلاس', text: 'مرحباً، أود الاستفسار عن مقاسات وتجهيزات أكشاك الحراسة الفايبر جلاس' },
    { label: 'طلب عرض سعر لمشروع أو منشأة', text: 'مرحباً شركة الشريف، أود الحصول على عرض سعر لمشروع توريد خزانات وحواجز' }
  ];

  const handleOpenChat = (customText) => {
    const text = customText || 'مرحباً شركة الشريف، أود الاستفسار عن منتجاتكم وعروض الأسعار';
    window.open(`https://wa.me/${COMPANY_PHONE_INT}?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '26px', right: '26px', zIndex: 1999 }}>
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div
          className="glass-card"
          style={{
            position: 'absolute',
            bottom: '75px',
            right: '0',
            width: '320px',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 16px 45px rgba(0,0,0,0.25)',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            direction: 'rtl',
            animation: 'floatAnim 0.3s ease'
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #07162c 0%, #0b2545 100%)',
              color: '#ffffff',
              padding: '16px 18px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#25d366' }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.96rem' }}>شركة الشريف</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>متاحون للرد الفوري عبر واتساب</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="إغلاق"
              style={{ color: '#ffffff', opacity: 0.8, padding: '4px' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
              اختر نوع الاستفسار للبدء الفوري:
            </div>

            {quickMessages.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleOpenChat(item.text)}
                style={{
                  textAlign: 'right',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#0b2545',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 168, 150, 0.08)';
                  e.currentTarget.style.borderColor = '#00a896';
                  e.currentTarget.style.color = '#00a896';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.color = '#0b2545';
                }}
              >
                <span>{item.label}</span>
                <Send size={13} style={{ transform: 'rotate(180deg)' }} />
              </button>
            ))}

            <button
              onClick={() => handleOpenChat()}
              className="btn btn-whatsapp"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                fontSize: '0.92rem',
                marginTop: '4px',
                gap: '8px'
              }}
            >
              <WhatsAppIcon size={19} />
              <span>محادثة مخصصة ({COMPANY_PHONE})</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="تواصل عبر واتساب"
        className="animate-pulse-glow"
        style={{
          width: '62px',
          height: '62px',
          borderRadius: '50%',
          backgroundColor: '#25d366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.5)',
          transition: 'all 0.3s ease',
          border: '3px solid #ffffff'
        }}
      >
        {isOpen ? <X size={28} /> : <WhatsAppIcon size={34} />}
      </button>
    </div>
  );
}
