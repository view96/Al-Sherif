import React, { useState } from 'react';
import { X, User, Phone, MapPin, Box, FileText } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_PHONE_INT } from '../data/products';

export default function WhatsAppOrderModal({ product, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  if (!product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderLines = [
      `*طلب جديد من موقع شركة الشريف للخزانات* 📦`,
      `───────────────────────`,
      `*المنتج المطلوب:* ${product.title}`,
      product.capacity ? `*السعة / المقاس:* ${product.capacity}` : null,
      `*الاسم الكريم:* ${formData.name.trim() || 'عميل كريم'}`,
      formData.phone.trim() ? `*رقم الهاتف:* ${formData.phone.trim()}` : null,
      formData.address.trim() ? `*العنوان:* ${formData.address.trim()}` : null,
      formData.notes.trim() ? `*تفاصيل إضافية:* ${formData.notes.trim()}` : null,
      `───────────────────────`,
      `يرجى تأكيد استلام الطلب وتوضيح السعر وموعد التوريد المتاح.`
    ].filter(Boolean).join('\n');

    const waUrl = `https://wa.me/${COMPANY_PHONE_INT}?text=${encodeURIComponent(orderLines)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(7, 22, 44, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 3000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '480px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
          animation: 'scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          direction: 'rtl'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Header Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#ffffff'
          }}
        >
          {/* Close Button on left in RTL */}
          <button
            onClick={onClose}
            aria-label="إغلاق النافذة"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.18)',
              border: 'none',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.18)')}
          >
            <X size={20} />
          </button>

          {/* Title & Subtitle + WhatsApp Badge on right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'right' }}>
              <h3 style={{ margin: 0, fontSize: '1.28rem', fontWeight: 900, color: '#ffffff' }}>
                طلب عبر واتساب
              </h3>
              <p style={{ margin: '3px 0 0', fontSize: '0.86rem', color: '#e0f2fe', fontWeight: 500 }}>
                أرسل طلبك مباشرةً وسنرد فوراً
              </p>
            </div>

            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <WhatsAppIcon size={24} color="#ffffff" />
            </div>
          </div>
        </div>

        {/* 2. Form Body */}
        <form onSubmit={handleSubmit} style={{ padding: '24px 24px 26px' }}>
          {/* Field 1: Required Product */}
          <div style={{ marginBottom: '18px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.88rem',
                fontWeight: 800,
                color: '#475569',
                marginBottom: '8px',
                textAlign: 'right'
              }}
            >
              المنتج المطلوب
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                borderRadius: '14px',
                padding: '12px 16px',
                color: '#0f172a',
                fontWeight: 800,
                fontSize: '0.94rem'
              }}
            >
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {product.title}
              </span>
              <Box size={20} color="#0284c7" style={{ flexShrink: 0, marginRight: '10px' }} />
            </div>
          </div>

          {/* Field 2: Customer Name */}
          <div style={{ marginBottom: '18px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.88rem',
                fontWeight: 800,
                color: '#475569',
                marginBottom: '8px',
                textAlign: 'right'
              }}
            >
              الاسم الكريم
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                border: '1.5px solid #cbd5e1',
                borderRadius: '14px',
                padding: '0 16px',
                transition: 'border-color 0.2s'
              }}
            >
              <input
                type="text"
                placeholder="أدخل اسمك بالكامل"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  padding: '12px 0',
                  fontSize: '0.92rem',
                  color: '#0f172a',
                  fontWeight: 600,
                  fontFamily: 'inherit'
                }}
              />
              <User size={19} color="#0284c7" style={{ flexShrink: 0, marginRight: '10px' }} />
            </div>
          </div>

          {/* Field 3: Phone Number */}
          <div style={{ marginBottom: '18px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.88rem',
                fontWeight: 800,
                color: '#475569',
                marginBottom: '8px',
                textAlign: 'right'
              }}
            >
              رقم الهاتف
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                border: '1.5px solid #cbd5e1',
                borderRadius: '14px',
                padding: '0 16px'
              }}
            >
              <input
                type="tel"
                placeholder="مثال: 01000000000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  padding: '12px 0',
                  fontSize: '0.92rem',
                  color: '#0f172a',
                  fontWeight: 600,
                  fontFamily: 'inherit'
                }}
              />
              <Phone size={19} color="#0284c7" style={{ flexShrink: 0, marginRight: '10px' }} />
            </div>
          </div>

          {/* Field 4: Delivery Address */}
          <div style={{ marginBottom: '18px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.88rem',
                fontWeight: 800,
                color: '#475569',
                marginBottom: '8px',
                textAlign: 'right'
              }}
            >
              العنوان
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                border: '1.5px solid #cbd5e1',
                borderRadius: '14px',
                padding: '0 16px'
              }}
            >
              <input
                type="text"
                placeholder="المحافظة، المدينة، الشارع"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  padding: '12px 0',
                  fontSize: '0.92rem',
                  color: '#0f172a',
                  fontWeight: 600,
                  fontFamily: 'inherit'
                }}
              />
              <MapPin size={19} color="#0284c7" style={{ flexShrink: 0, marginRight: '10px' }} />
            </div>
          </div>

          {/* Field 5: Optional Additional Details (المطلوبة من المستخدم) */}
          <div style={{ marginBottom: '24px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.88rem',
                fontWeight: 800,
                color: '#475569',
                marginBottom: '8px',
                textAlign: 'right'
              }}
            >
              تفاصيل إضافية (اختياري)
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                backgroundColor: '#ffffff',
                border: '1.5px solid #cbd5e1',
                borderRadius: '14px',
                padding: '10px 16px'
              }}
            >
              <textarea
                placeholder="العدد المطلوب، المقاس، أو أي ملاحظات خاصة بالتوصيل..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={2}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.92rem',
                  color: '#0f172a',
                  fontWeight: 500,
                  fontFamily: 'inherit',
                  resize: 'none'
                }}
              />
              <FileText size={19} color="#0284c7" style={{ flexShrink: 0, marginRight: '10px', marginTop: '4px' }} />
            </div>
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#25d366',
              backgroundImage: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '16px',
              padding: '14px',
              fontSize: '1.08rem',
              fontWeight: 900,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 211, 102, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.35)';
            }}
          >
            <WhatsAppIcon size={22} color="#ffffff" />
            <span>تأكيد ومراسلة عبر واتساب</span>
          </button>
        </form>
      </div>
    </div>
  );
}
