import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import WhyChooseUs from './components/WhyChooseUs';
import ProductsCatalog from './components/ProductsCatalog';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'products' | 'contact'
  const [selectedCategory, setSelectedCategory] = useState('all');

  const navigateTo = (page, category = 'all') => {
    setCurrentPage(page);
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      {/* 1. Header with Sticky Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* 2. Main Page Content */}
      <main style={{ flex: 1 }}>
        {currentPage === 'home' && (
          <>
            {/* Dynamic Auto-sliding Hero with Key Features Ribbon */}
            <HeroSlider onExploreProducts={() => navigateTo('products', 'all')} />

            {/* Why Choose El Sherif Section with Interactive Counters */}
            <WhyChooseUs />

            {/* Success Partners & Enterprise Clients */}
            <Partners />

            {/* Verified Customer Reviews & Testimonials */}
            <Testimonials />
          </>
        )}

        {currentPage === 'products' && (
          <ProductsCatalog
            initialCategory={selectedCategory}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}

        {currentPage === 'contact' && (
          <div style={{ paddingTop: '20px' }}>
            <ContactSection />
          </div>
        )}
      </main>

      {/* 3. Dark Theme Footer */}
      <Footer onNavigate={navigateTo} />

      {/* 4. Interactive Floating WhatsApp Quick Action Widget */}
      <WhatsAppFloat />

      {/* 5. Scroll to Top Floating Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
