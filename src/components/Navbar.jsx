import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';

export default function Navbar() {
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

  const navLinks = [
    { name: '서비스 안내', href: '#services' },
    { name: '시공 사례', href: '#gallery' },
    { name: '간편 견적 문의', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav border-b border-brand-border py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="bg-brand-red p-2 rounded-lg transition-transform group-hover:scale-105 duration-300">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-brand-red transition-colors duration-300">
                정성홈넷 <span className="text-brand-red font-medium text-sm ml-1 px-1.5 py-0.5 rounded bg-brand-red/10 border border-brand-red/20">고양점</span>
              </span>
              <span className="text-[10px] text-brand-gray tracking-wide">비디오폰 · 도어락 전문</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-gray hover:text-white transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:010-3977-1969"
              className="flex items-center space-x-2 bg-brand-red hover:bg-brand-redHover text-white px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand-red/20 transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              <span>010-3977-1969</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray hover:text-white hover:bg-brand-card focus:outline-none transition-colors duration-300"
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
      } overflow-hidden bg-brand-dark/95 border-b border-brand-border`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-brand-gray hover:text-white hover:bg-brand-card transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2 border-t border-brand-border px-3">
            <a
              href="tel:010-3977-1969"
              className="flex items-center justify-center space-x-2 bg-brand-red hover:bg-brand-redHover text-white py-3 rounded-xl font-bold transition-all duration-300"
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
