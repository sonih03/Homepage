import React from 'react';
import { Phone, MessageSquare, ArrowDown, MapPin, CheckCircle, Tv, KeyRound, Smartphone, Cpu, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg pt-28 pb-16 md:pt-32 md:pb-24">
      
      {/* Light Blue Glow Radial Background Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Grid Pattern Overlay for subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.012)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative w-full">
            
            {/* Soft Ambient Glow right behind the title */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-gradient-to-r from-brand-blue/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            {/* Dispatch Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-blue/5 border border-brand-blue/10 px-4 py-2 rounded-full mb-6 sm:mb-8 animate-pulse shadow-sm relative z-10 max-w-full">
              <MapPin className="h-4 w-4 text-brand-blue shrink-0" />
              <span className="text-[11px] sm:text-xs md:text-sm font-bold text-brand-blue tracking-wide break-keep">
                전국 전 지역 신속 출장 및 맞춤 일정 시공
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-brand-text mb-5 sm:mb-6 leading-tight relative z-10 break-keep">
              비디오폰 & 도어락 설치 전문 <br className="hidden sm:inline" />
              <span className="text-brand-blue">
                가온홈시스템
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#4E5968] mb-8 sm:mb-10 leading-relaxed font-light max-w-xl relative z-10 break-keep">
              직접 현장에 방문하여 내 집처럼 <span className="text-brand-text font-bold">정직하고, 꼼꼼하게</span> 설치합니다. <br />
              오랜 경력의 노하우로 깔끔하고 빈틈없는 마감을 약속드립니다.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 sm:mb-10 text-xs sm:text-sm text-[#4E5968] font-medium relative z-10 break-keep">
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="h-4 w-4 text-brand-blue shrink-0" />
                <span>정밀 맞춤 시공</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="h-4 w-4 text-brand-blue shrink-0" />
                <span>비디오폰 & 도어락 무선 연동</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="h-4 w-4 text-brand-blue shrink-0" />
                <span>신속하고 정직한 A/S</span>
              </div>
            </div>

            {/* CTA Buttons - Natural Inline Layout (Static) */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-8 sm:mb-10 relative z-10">
              <a
                href="tel:010-3977-1969"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-blueHover text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg shadow-brand-blue/10 hover:shadow-brand-blue/20 hover:scale-105 transform hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5 shrink-0" />
                <span>전화 문의하기</span>
              </a>
              <a
                href={`sms:010-3977-1969?body=${encodeURIComponent('[가온홈시스템 입니다]')}`}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 border border-slate-200 text-brand-text px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-sm hover:scale-105 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="h-5 w-5 text-brand-blue shrink-0" />
                <span>문자 문의하기</span>
              </a>
            </div>

            {/* Accent Banner Box */}
            <div className="w-full max-w-lg bg-white border border-slate-100/80 rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.02)] glass-card relative z-10 break-keep">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-[#4E5968] text-xs sm:text-sm font-light">
                  상담 전화 · 문자 : <span className="text-brand-text font-black text-sm sm:text-base ml-1">010-3977-1969</span>
                </p>
                <a 
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="text-xs text-brand-blue hover:text-brand-blueHover flex items-center space-x-1 transition-colors duration-300 font-bold self-start sm:self-auto"
                >
                  <span>온라인 간편 견적</span>
                  <ArrowDown className="h-3.5 w-3.5 animate-bounce ml-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hi-Tech Technology Cards Graphic */}
          <div className="lg:col-span-5 w-full flex flex-col items-center gap-6 lg:gap-0 lg:block lg:relative lg:h-[480px] mt-10 lg:mt-0">
            
            {/* Ambient Animated Rings (Desktop Only) */}
            <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
              <div className="w-[350px] h-[350px] rounded-full border border-brand-blue/5 animate-[spin_24s_linear_infinite]"></div>
              <div className="w-[280px] h-[280px] rounded-full border border-dashed border-indigo-500/10 animate-[spin_16s_linear_infinite]"></div>
            </div>
            
            {/* Back Glow Layer for Tech Cards (Desktop Only) */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-brand-blue/20 to-indigo-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse hidden lg:block"></div>

            {/* Smart Access Security Card (Top Dark Card) */}
            <div 
              className="w-full max-w-[320px] bg-slate-900 border border-slate-800 text-white rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_20px_40px_rgba(49,130,246,0.15)] transition-all duration-500 group lg:absolute lg:top-4 lg:left-4 xl:left-8 lg:w-[270px]"
              style={{ zIndex: hoveredCard === 'dark' ? 35 : 20 }}
              onMouseEnter={() => setHoveredCard('dark')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-brand-blue/20 p-2 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <KeyRound className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-300">🔐 프리미엄 도어락 & 안심 보안</span>
                </div>
                <span className="text-[9px] font-bold text-brand-blue bg-brand-blue/15 px-2 py-0.5 rounded">정밀 시공 보증</span>
              </div>

              {/* Doorlock Visual Box */}
              <div className="bg-slate-800/50 rounded-2xl p-4 flex flex-col space-y-1.5 border border-slate-700/50">
                <div className="text-brand-blue font-bold text-[8px] tracking-widest font-mono">SECURE INTERLOCK</div>
                <div className="text-xs sm:text-sm font-black text-slate-100 leading-snug">
                  푸시풀 · 지문인식 · 무선 문열림 연동
                </div>
              </div>
              
              <div className="mt-3.5 text-left text-xs font-bold text-slate-200">튼튼한 정밀 장착</div>
              <p className="text-[10px] text-slate-400 font-light mt-1 leading-relaxed break-keep">
                거실 비디오폰에서 버튼 하나로 현관문이 열리는 편리한 무선 연동 시스템을 유격 없이 정밀하고 튼튼하게 장착해 드립니다.
              </p>
            </div>

            {/* Smart Wallpad Card (Bottom White Card) */}
            <div 
              className="w-full max-w-[320px] bg-white/95 backdrop-blur-md border border-slate-100 rounded-3xl p-5 shadow-[0_25px_55px_rgba(0,0,0,0.04)] hover:scale-105 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_20px_40px_rgba(49,130,246,0.08)] transition-all duration-500 group lg:absolute lg:bottom-4 lg:right-4 xl:right-8 lg:w-[270px]"
              style={{ zIndex: hoveredCard === 'white' ? 35 : 30 }}
              onMouseEnter={() => setHoveredCard('white')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-brand-blue/10 p-2 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Tv className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">🖥️ 스마트 월패드 & 인터폰 시공</span>
                </div>
                <span className="inline-flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[9px] font-bold text-slate-500">전 브랜드 연동 가능</span>
                </span>
              </div>
              
              {/* Wallpad Screen / Compatibility Box */}
              <div className="bg-slate-50 rounded-2xl p-4 text-slate-800 font-sans text-xs space-y-1.5 border border-slate-100 shadow-inner">
                <div className="text-brand-blue font-bold text-[8px] tracking-widest font-mono">COMPATIBILITY MATCH</div>
                <div className="text-xs sm:text-sm font-black text-slate-800 leading-snug">
                  삼성 · 코맥스 · 코콤 완벽 호환
                </div>
              </div>
              
              <div className="mt-3.5 text-left text-xs font-bold text-slate-800">슬림 밀착 마감 교체</div>
              <p className="text-[10px] text-slate-500 font-light mt-1 leading-relaxed break-keep">
                우리 아파트 시스템에 딱 맞는 제품 매칭으로, 노후된 구형 인터폰을 세련된 최신형 월패드로 완벽하게 교체 시공합니다.
              </p>
            </div>

            {/* Accent Decorative Floating Card (Mini Badge) */}
            <div className="w-full max-w-[320px] bg-brand-blue text-white rounded-2xl py-2.5 px-4 shadow-[0_10px_25px_rgba(49,130,246,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 border border-brand-blueHover lg:absolute lg:z-40 lg:-bottom-2 lg:left-10 xl:left-14 lg:w-auto">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span className="text-[10px] sm:text-xs font-extrabold tracking-wider">100% 안심 보증 시공</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

