import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Navbar({ currentView, onViewChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (targetId === 'products') {
      onViewChange('products');
    } else if (targetId === 'home') {
      onViewChange('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onViewChange('home');
      // If we are coming from another page, wait a tiny bit for render
      setTimeout(() => {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const navLinks = [
    { name: '서비스 안내', target: 'services', type: 'section' },
    { name: '시공 사례', target: 'gallery', type: 'section' },
    { name: '간편 견적 문의', target: 'contact', type: 'section' },
    { name: '시공 제품 안내', target: 'products', type: 'view' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
      scrolled 
        ? 'glass-nav border-b border-slate-200/60 py-3 shadow-[0_2px_15px_rgba(0,0,0,0.02)]' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center space-x-2 group text-left focus:outline-none"
          >
            <div className="bg-brand-blue p-2 rounded-lg transition-transform group-hover:scale-105 duration-300">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-brand-text group-hover:text-brand-blue transition-colors duration-300">
                가온홈넷 <span className="text-brand-blue font-medium text-sm ml-1 px-1.5 py-0.5 rounded bg-brand-blue/5 border border-brand-blue/10">전국 서비스</span>
              </span>
              <span className="text-[10px] text-brand-textMuted tracking-wide">비디오폰 · 도어락 전문</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = (link.target === 'products' && currentView === 'products') || 
                               (link.target !== 'products' && currentView === 'home');
              return (
                <a
                  key={link.name}
                  href={`#${link.target}`}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className={`text-sm font-bold transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue hover:after:w-full after:transition-all after:duration-300 ${
                    isActive && link.target === 'products'
                      ? 'text-brand-blue after:w-full'
                      : 'text-brand-textMuted hover:text-brand-text'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:010-3977-1969"
              className="flex items-center space-x-2 bg-brand-blue hover:bg-brand-blueHover text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md shadow-brand-blue/10 hover:shadow-lg hover:shadow-brand-blue/20 transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              <span>010-3977-1969</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-textMuted hover:text-brand-text hover:bg-slate-100/50 focus:outline-none transition-colors duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">메뉴 열기</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden bg-white/95 border-b border-slate-200 backdrop-blur-md`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.target}`}
              onClick={(e) => handleNavClick(e, link.target)}
              className={`block px-3 py-3 rounded-md text-base font-bold transition-colors duration-300 ${
                link.target === 'products' && currentView === 'products'
                  ? 'text-brand-blue bg-brand-blue/5'
                  : 'text-brand-textMuted hover:text-brand-text hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2 border-t border-slate-100 px-3">
            <a
              href="tel:010-3977-1969"
              className="flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-blueHover text-white py-3 rounded-xl font-bold transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              <span>전화 연결 (010-3977-1969)</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
