import React, { useState, useRef } from 'react';
import { Layers, ShieldCheck, Ruler, Info, Search } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { CATEGORIES, PRODUCTS } from '../data/products';
import ProductGraphic from './ProductGraphics';
import ProductModal from './ProductModal';
import WhatsAppOrderModal from './WhatsAppOrderModal';

export default function ProductsCatalog({ selectedCategory = 'all', onSelectCategory }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderProduct, setOrderProduct] = useState(null);

  const gridRef = useRef(null);
  const activeCategory = selectedCategory || 'all';

  const handleCategoryChange = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    // Smooth scroll down directly to products section
    setTimeout(() => {
      if (gridRef.current) {
        gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  // Filter products by category & search query
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.capacity.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* 1. Creative Dark Products Hero Banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, #07162c 0%, #0b2545 55%, #08203e 100%)',
          color: '#ffffff',
          padding: '42px 0 26px',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Ambient Glowing Mesh Circles */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '15%',
            width: '280px',
            height: '280px',
            background: 'radial-gradient(circle, rgba(0, 168, 150, 0.2) 0%, rgba(7, 22, 44, 0) 70%)',
            pointerEvents: 'none',
            filter: 'blur(40px)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '10%',
            width: '260px',
            height: '260px',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(7, 22, 44, 0) 70%)',
            pointerEvents: 'none',
            filter: 'blur(40px)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 5, textAlign: 'center' }}>
          {/* Top Live Pill Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              padding: '5px 16px',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#38bdf8',
              marginBottom: '14px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <ShieldCheck size={16} color="#38bdf8" />
            <span>كتالوج المنتجات الرسمي 2026</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
            <span style={{ color: '#ffffff' }}>جودة معتمدة وضمان 10 سنوات</span>
          </div>

          {/* Main Hero Headline */}
          <h1
            style={{
              fontSize: 'clamp(1.9rem, 3vw + 0.8rem, 2.7rem)',
              fontWeight: 900,
              lineHeight: 1.25,
              marginBottom: '10px',
              color: '#ffffff',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)'
            }}
          >
            منتجات مصنع{' '}
            <span
              style={{
                color: '#38bdf8',
                backgroundImage: 'linear-gradient(135deg, #38bdf8 0%, #2dd4bf 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              شركة الشريف للخزانات
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '1.02rem',
              color: '#e2e8f0',
              fontWeight: 500,
              maxWidth: '720px',
              margin: '0 auto 22px',
              lineHeight: 1.7,
              textShadow: '0 1px 10px rgba(0,0,0,0.3)'
            }}
          >
            تصفح مجموعتنا الشاملة من خزانات المياه البولي إيثيلين الأفقية والرأسية، حواجز الأمان، وأكشاك الفايبر جلاس المصنعة بأعلى مواصفات الجودة المصرية والدولية.
          </p>

          {/* Modern Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
              marginBottom: '18px'
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  style={{
                    padding: '11px 22px',
                    borderRadius: '50px',
                    fontWeight: 800,
                    fontSize: '0.96rem',
                    border: '1.5px solid',
                    borderColor: isActive ? '#00a896' : 'rgba(255, 255, 255, 0.2)',
                    backgroundColor: isActive ? '#00a896' : 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    boxShadow: isActive ? '0 6px 20px rgba(0, 168, 150, 0.4)' : 'none',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    }
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Futuristic Search Bar */}
          <div style={{ maxWidth: '520px', margin: '0 auto', width: '100%', position: 'relative' }}>
            <input
              type="text"
              placeholder="ابحث بالاسم أو السعة (مثال: 5000 لتر، 20000 لتر، حاجز، كشك)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 48px 14px 20px',
                borderRadius: '50px',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                fontSize: '1rem',
                outline: 'none',
                fontFamily: 'inherit',
                backgroundColor: '#ffffff',
                color: '#0b2545',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.25s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#00a896';
                e.target.style.boxShadow = '0 12px 35px rgba(0, 168, 150, 0.3)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
              }}
            />
            <Search
              size={22}
              color="#00a896"
              style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)' }}
            />
          </div>
        </div>
      </section>

      {/* 2. Products Grid Section */}
      <section
        ref={gridRef}
        id="products-grid"
        style={{ padding: '60px 0 90px', position: 'relative', scrollMarginTop: '80px' }}
      >
        <div className="container">
          {/* Results Summary Counter */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '32px',
              paddingBottom: '16px',
              borderBottom: '1px solid #e2e8f0'
            }}
          >
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0b2545' }}>
              عرض{' '}
              <span style={{ color: '#00a896', backgroundColor: '#f0fdfa', padding: '2px 10px', borderRadius: '50px', border: '1px solid #ccfbf1' }}>
                {filteredProducts.length}
              </span>{' '}
              منتج متاح
            </div>

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ fontSize: '0.88rem', color: '#ef4444', fontWeight: 700, textDecoration: 'underline' }}
              >
                مسح البحث
              </button>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '70px 20px',
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }}
            >
              <Info size={48} color="#94a3b8" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0b2545', marginBottom: '8px' }}>
                عذراً، لم نجد منتجات مطابقة لبحثك
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', marginBottom: '24px' }}>
                جرّب البحث باسم منتج آخر أو اختر قسماً مختلفاً
              </p>
              <button
                onClick={() => {
                  handleCategoryChange('all');
                  setSearchQuery('');
                }}
                className="btn btn-primary"
              >
                عرض جميع المنتجات
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
                gap: '30px'
              }}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '22px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 8px 25px rgba(11, 37, 69, 0.05)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 18px 40px rgba(11, 37, 69, 0.12)';
                    e.currentTarget.style.borderColor = '#00a896';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 37, 69, 0.05)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  {/* Product Graphic / Image Display Box */}
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      height: '240px',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottom: '1px solid #f1f5f9',
                      position: 'relative',
                      overflow: 'hidden',
                      padding: '16px'
                    }}
                  >
                    {/* Top Badge - High z-index */}
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        zIndex: 10,
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        padding: '5px 12px',
                        borderRadius: '50px',
                        backgroundColor: product.badgeColor === 'orange' ? '#fff7ed' : '#f0fdfa',
                        color: product.badgeColor === 'orange' ? '#ea580c' : '#0d9488',
                        border: `1.5px solid ${product.badgeColor === 'orange' ? '#fed7aa' : '#99f6e4'}`,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                      }}
                    >
                      {product.badge}
                    </span>

                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          mixBlendMode: 'multiply'
                        }}
                        loading="lazy"
                      />
                    ) : (
                      <ProductGraphic type={product.graphicType} capacity={product.capacity} height={160} />
                    )}
                  </div>

                  {/* Product Info Content */}
                  <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0b2545', marginBottom: '8px', lineHeight: 1.4 }}>
                        {product.title}
                      </h3>

                      <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                        {product.description.slice(0, 100)}...
                      </p>

                      {/* Specs Pills */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                          <Layers size={16} color="#00a896" />
                          <span>{product.layers}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                          <ShieldCheck size={16} color="#25d366" />
                          <span>{product.warranty}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                          <Ruler size={16} color="#00b4d8" />
                          <span>{product.dimensions}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                      <button
                        onClick={() => setOrderProduct(product)}
                        className="btn btn-whatsapp"
                        style={{
                          flex: 1,
                          fontSize: '0.88rem',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          gap: '6px',
                          cursor: 'pointer',
                          border: 'none'
                        }}
                      >
                        <WhatsAppIcon size={16} />
                        <span>طلب عبر واتساب</span>
                      </button>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="btn btn-outline"
                        style={{
                          fontSize: '0.86rem',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          gap: '6px'
                        }}
                      >
                        <Info size={16} />
                        <span>المواصفات</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      {/* Direct WhatsApp Order Form Modal */}
      {orderProduct && (
        <WhatsAppOrderModal product={orderProduct} onClose={() => setOrderProduct(null)} />
      )}
    </div>
  );
}
