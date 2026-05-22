import React from 'react';
import { Phone, MessageSquare, ArrowDown, MapPin, CheckCircle } from 'lucide-react';

export default function Hero() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg pt-20 pb-20">
      
      {/* Light Blue Glow Radial Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Grid Pattern Overlay for subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:35px_35px] opacity-100 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 text-center">
        
        {/* Dispatch Badge */}
        <div className="inline-flex items-center space-x-2 bg-brand-blue/5 border border-brand-blue/10 px-4 py-2 rounded-full mb-8 animate-pulse shadow-sm">
          <MapPin className="h-4 w-4 text-brand-blue" />
          <span className="text-xs sm:text-sm font-bold text-brand-blue tracking-wide">
            고양시 전 지역 신속 출장 가능
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-brand-text mb-6 leading-tight">
          비디오폰 & 도어락 설치 전문 <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-brand-text to-brand-blue bg-clip-text text-transparent">
            정성홈넷 고양점
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#4E5968] mb-10 leading-relaxed font-light">
          아버님이 직접 현장에 방문하여 내 집처럼 <span className="text-brand-text font-bold">정직하고, 꼼꼼하게</span> 설치합니다. <br />
          오랜 경력의 노하우로 깔끔하고 빈틈없는 마감을 약속드립니다.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12 text-xs sm:text-sm text-[#4E5968] font-medium">
          <div className="flex items-center space-x-1.5">
            <CheckCircle className="h-4 w-4 text-brand-blue" />
            <span>정밀 맞춤 시공</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle className="h-4 w-4 text-brand-blue" />
            <span>비디오폰 & 도어락 무선 연동</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle className="h-4 w-4 text-brand-blue" />
            <span>신속하고 정직한 A/S</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-16">
          <a
            href="tel:010-3977-1969"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-blueHover text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg shadow-brand-blue/10 transform hover:-translate-y-0.5"
          >
            <Phone className="h-5 w-5" />
            <span>전화 문의하기</span>
          </a>
          <a
            href="sms:010-3977-1969?body=안녕하세요.%20정성홈넷%20비디오폰/도어락%20설치%20견적%20문의드립니다."
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 border border-slate-200 text-brand-text px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-sm transform hover:-translate-y-0.5"
          >
            <MessageSquare className="h-5 w-5 text-brand-blue" />
            <span>문자 문의하기</span>
          </a>
        </div>

        {/* Accent Banner Box */}
        <div className="max-w-2xl mx-auto bg-white border border-slate-100/80 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)] glass-card">
          <p className="text-[#4E5968] text-xs sm:text-sm font-light">
            상담 전화 · 문자 : <span className="text-brand-text font-black text-base sm:text-lg ml-1">010-3977-1969</span>
          </p>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <a 
              href="#contact"
              onClick={handleScrollToContact}
              className="text-xs text-brand-blue hover:text-brand-blueHover flex items-center space-x-1 transition-colors duration-300 font-bold"
            >
              <span>온라인 간편 견적 신청하러 가기</span>
              <ArrowDown className="h-3.5 w-3.5 animate-bounce ml-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
