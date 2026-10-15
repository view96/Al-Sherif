import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Layers, Ruler, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import ProductGraphic from './ProductGraphics';
import WhatsAppOrderModal from './WhatsAppOrderModal';
import { COMPANY_PHONE } from '../data/products';

export default function ProductModal({ product, onClose }) {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  if (!product) return null;

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
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '32px',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          direction: 'rtl'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="إغلاق"
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0b2545',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#fee2e2';
            e.currentTarget.style.color = '#ef4444';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f1f5f9';
            e.currentTarget.style.color = '#0b2545';
          }}
        >
          <X size={22} />
        </button>

        {/* Top Product Graphic & Title Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '24px' }}>
          <div
            style={{
              width: '100%',
              height: '270px',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              border: '1.5px solid #e2e8f0',
              overflow: 'hidden'
            }}
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  mixBlendMode: 'multiply'
                }}
              />
            ) : (
              <ProductGraphic type={product.graphicType} capacity={product.capacity} height={200} />
            )}
          </div>

          <div
            style={{
              display: 'inline-block',
              padding: '4px 14px',
              borderRadius: '50px',
              backgroundColor: 'rgba(0, 168, 150, 0.1)',
              color: '#00a896',
              fontWeight: 800,
              fontSize: '0.85rem',
              marginBottom: '8px'
            }}
          >
            {product.badge}
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0b2545', marginBottom: '8px' }}>
            {product.title}
          </h2>

          <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: 1.7, maxWidth: '600px' }}>
            {product.description}
          </p>
        </div>

        {/* Specifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px',
            backgroundColor: '#f8fafc',
            padding: '20px',
            borderRadius: '16px',
            marginBottom: '24px',
            border: '1px solid #e2e8f0'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Layers size={20} color="#00a896" />
            <div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>الطبقات والخامات</div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0b2545' }}>{product.layers}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Ruler size={20} color="#00b4d8" />
            <div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>الأبعاد والقياسات</div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0b2545' }}>{product.dimensions}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} color="#25d366" />
            <div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>الضمان المعتمد</div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0b2545' }}>{product.warranty}</div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0b2545', marginBottom: '12px' }}>
            المواصفات والمزايا الفنية:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {product.features.map((feat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.94rem', color: '#334155' }}>
                <CheckCircle2 size={18} color="#00a896" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setOrderModalOpen(true)}
            className="btn btn-whatsapp"
            style={{ flex: 1, padding: '14px', fontSize: '1.02rem', borderRadius: '12px', gap: '8px', cursor: 'pointer', border: 'none' }}
          >
            <WhatsAppIcon size={20} />
            <span>طلب المنتج عبر واتساب الآن ({COMPANY_PHONE})</span>
          </button>

          <a
            href={`tel:${COMPANY_PHONE}`}
            className="btn btn-primary"
            style={{ padding: '14px 24px', fontSize: '1.02rem', borderRadius: '12px' }}
          >
            <Phone size={18} />
            <span>اتصال هاتفي</span>
          </a>
        </div>
      </div>

      {/* WhatsApp Order Form Modal */}
      {orderModalOpen && (
        <WhatsAppOrderModal
          product={product}
          onClose={() => setOrderModalOpen(false)}
        />
      )}
    </div>
  );
}
