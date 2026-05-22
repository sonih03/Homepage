import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-red selection:text-white flex flex-col">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Gallery Section */}
        <Gallery />

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      {/* Footer & Mobile Quick Actions */}
      <Footer />
    </div>
  );
}

export default App;
