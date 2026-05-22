import React from 'react';
import { Phone, MessageSquare, ArrowDown, MapPin, CheckCircle, Tv, KeyRound, Smartphone, Cpu, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg pt-24 pb-20">
      
      {/* Light Blue Glow Radial Background Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Grid Pattern Overlay for subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.012)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative">
            
            {/* Soft Ambient Glow right behind the title */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-gradient-to-r from-brand-blue/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            {/* Dispatch Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-blue/5 border border-brand-blue/10 px-4 py-2 rounded-full mb-8 animate-pulse shadow-sm relative z-10">
              <MapPin className="h-4 w-4 text-brand-blue" />
              <span className="text-xs sm:text-sm font-bold text-brand-blue tracking-wide">
                전국 서비스 네트워크를 통한 신속 시공
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-brand-text mb-6 leading-tight relative z-10">
              비디오폰 & 도어락 설치 전문 <br className="hidden sm:inline" />
              <span className="text-brand-blue">
                정성홈넷
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#4E5968] mb-10 leading-relaxed font-light max-w-xl relative z-10">
              직접 현장에 방문하여 내 집처럼 <span className="text-brand-text font-bold">정직하고, 꼼꼼하게</span> 설치합니다. <br />
              오랜 경력의 노하우로 깔끔하고 빈틈없는 마감을 약속드립니다.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 text-xs sm:text-sm text-[#4E5968] font-medium relative z-10">
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
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10 relative z-10">
              <a
                href="tel:010-3977-1969"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-blueHover text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg shadow-brand-blue/10 hover:shadow-brand-blue/20 hover:scale-105 transform hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" />
                <span>전화 문의하기</span>
              </a>
              <a
                href="sms:010-3977-1969?body=안녕하세요.%20정성홈넷%20비디오폰/도어락%20설치%20견적%20문의드립니다."
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 border border-slate-200 text-brand-text px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-sm hover:scale-105 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="h-5 w-5 text-brand-blue" />
                <span>문자 문의하기</span>
              </a>
            </div>

            {/* Accent Banner Box */}
            <div className="w-full max-w-lg bg-white border border-slate-100/80 rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.02)] glass-card relative z-10">
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
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] flex items-center justify-center mt-8 lg:mt-0">
            
            {/* Ambient Animated Rings */}
            <div className="absolute w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] rounded-full border border-brand-blue/5 animate-[spin_24s_linear_infinite] pointer-events-none"></div>
            <div className="absolute w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] rounded-full border border-dashed border-indigo-500/10 animate-[spin_16s_linear_infinite] pointer-events-none"></div>
            
            {/* Back Glow Layer for Tech Cards */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-brand-blue/20 to-indigo-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

            {/* Smart Wallpad UI Card */}
            <div className="absolute z-20 top-4 left-4 sm:left-8 w-[250px] sm:w-[270px] bg-white/90 backdrop-blur-md border border-slate-100 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:scale-105 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_20px_40px_rgba(49,130,246,0.08)] transition-all duration-500 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-brand-blue/10 p-2 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Tv className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Smart Wallpad UI</span>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
              </div>
              
              {/* Wallpad Screen Mockup */}
              <div className="bg-slate-900 rounded-2xl p-4 text-white font-mono text-[10px] space-y-2.5 overflow-hidden relative shadow-inner">
                <div className="absolute top-2 right-2 text-brand-blue font-bold text-[8px] bg-brand-blue/10 px-1.5 py-0.5 rounded">CONNECTED</div>
                <div className="text-slate-400 text-[8px] tracking-wider">FACILITY MONITOR</div>
                
                <div className="flex items-center space-x-3 py-1.5 border-b border-slate-800">
                  <div className="bg-brand-blue/20 p-1.5 rounded-lg">
                    <Cpu className="h-4 w-4 text-brand-blue animate-pulse" />
                  </div>
                  <div>
                    <div className="text-white text-[9px] font-bold">System Status: OK</div>
                    <div className="text-slate-400 text-[7px]">Interlock Signal Standard</div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-slate-400 text-[8px]">
                    <span>Lobby Interlock</span>
                    <span className="text-brand-blue font-bold">Active</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[8px]">
                    <span>Doorlock Module</span>
                    <span className="text-brand-blue font-bold">Standby</span>
                  </div>
                </div>
              </div>
              <div className="mt-3.5 text-left text-xs font-bold text-slate-800">지능형 홈 네트워크 연동</div>
              <p className="text-[10px] text-slate-500 font-light mt-1">도어락 및 경비실 무선 송수신 모듈을 완벽하게 세팅합니다.</p>
            </div>

            {/* Smart Access Security Card (Doorlock Tech Card) */}
            <div className="absolute z-30 bottom-4 right-4 sm:right-8 w-[230px] sm:w-[250px] bg-slate-900 border border-slate-800 text-white rounded-3xl p-5 shadow-[0_25px_55px_rgba(0,0,0,0.12)] hover:scale-105 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_20px_40px_rgba(49,130,246,0.15)] transition-all duration-500 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-brand-blue/20 p-2 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <KeyRound className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-300">Access Control</span>
                </div>
                <span className="text-[9px] font-bold text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded">SECURE</span>
              </div>

              {/* Fingerprint / Key Animation Box */}
              <div className="bg-slate-800/50 rounded-2xl p-4 flex flex-col items-center justify-center space-y-2 border border-slate-700/50">
                <div className="relative">
                  <div className="absolute -inset-1.5 bg-brand-blue/20 rounded-full blur animate-pulse"></div>
                  <div className="bg-slate-900 p-2.5 rounded-full relative z-10 border border-brand-blue/30 text-brand-blue">
                    <Smartphone className="h-5 w-5 animate-pulse" />
                  </div>
                </div>
                <span className="text-[8px] text-slate-400 font-mono tracking-widest">BIOMETRIC AUTHENTICATED</span>
              </div>
              
              <div className="mt-3.5 text-left text-xs font-bold text-slate-100">디지털 도어락 정밀 시공</div>
              <p className="text-[10px] text-slate-400 font-light mt-1">최신 지문 인식 및 스마트 도어락을 밀착하여 견고하게 시공합니다.</p>
            </div>

            {/* Accent Decorative Floating Card (Mini Badge) */}
            <div className="absolute z-40 -bottom-2 left-10 sm:left-14 bg-brand-blue text-white rounded-2xl py-2.5 px-4 shadow-[0_10px_25px_rgba(49,130,246,0.25)] hover:scale-105 transition-all duration-300 flex items-center space-x-2 border border-brand-blueHover">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-[10px] sm:text-xs font-extrabold tracking-wider">100% 안심 보증 시공</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
