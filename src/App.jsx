import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProductCatalog from './components/ProductCatalog';

function App() {
  const [view, setView] = useState('home'); // 'home' or 'products'
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
  };

  const handleResetService = () => {
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-blue selection:text-white flex flex-col">
      {/* Dynamic Navigation Header */}
      <Navbar currentView={view} onViewChange={setView} />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            {/* Hero Section */}
            <Hero />

            {/* Services Section */}
            <Services onViewChange={setView} />

            {/* Gallery Section */}
            <Gallery />

            {/* Contact Form Section */}
            <ContactForm 
              selectedService={selectedService} 
              resetSelectedService={handleResetService} 
            />
          </>
        ) : (
          /* Product Catalog Sub-page */
          <ProductCatalog 
            onViewChange={setView} 
            onSelectService={handleSelectService} 
          />
        )}
      </main>

      {/* Footer & Mobile Quick Actions */}
      <Footer />
    </div>
  );
}

export default App;
