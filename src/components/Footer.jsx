import React from 'react';
import { Phone, MessageSquare, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#EEF1F4] border-t border-slate-200 py-16 pb-28 md:pb-16 text-slate-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            
            {/* Column 1: Store info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-brand-blue p-1.5 rounded">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <span className="text-brand-text font-black tracking-tight text-base">
                  가온홈시스템
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                전국 비디오폰, 디지털 도어락, 공동현관 로비폰 설치 전문. <br />
                내 집처럼 소중하고 깔끔하게 꼼꼼한 책임 시공을 약속합니다.
              </p>
            </div>

            {/* Column 2: Working Area */}
            <div className="space-y-4">
              <h4 className="text-brand-text font-bold text-sm tracking-wide flex items-center space-x-1.5">
                <MapPin className="h-4 w-4 text-brand-blue" />
                <span>전국 서비스 네트워크</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                <strong className="text-brand-text font-bold">수도권 및 전국 주요 도시 신속 출장</strong> <br />
                서울, 경기, 인천 등 수도권 전 지역 <br />
                대전, 대구, 부산, 광주 등 전국 주요 광역시 <br />
                네트워크를 통한 신속한 시공 및 예약 시공 가능
              </p>
            </div>

            {/* Column 3: Contact & Links */}
            <div className="space-y-4">
              <h4 className="text-brand-text font-bold text-sm tracking-wide">고객 상담 정보</h4>
              <div className="space-y-2 text-xs sm:text-sm font-light">
                <p>
                  대표 번호 : 
                  <a href="tel:010-3977-1969" className="text-brand-blue font-bold hover:underline ml-1.5 transition-colors">
                    010-3977-1969
                  </a>
                </p>
                <p>상담 시간 : 오전 08:00 ~ 오후 09:00 (연중무휴)</p>
                <p>
                  공식 블로그 : 
                  <a 
                    href="https://blog.naver.com/1969smj" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-blue hover:underline ml-1.5 inline-flex items-center space-x-0.5 font-bold"
                  >
                    <span>blog.naver.com/1969smj</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
              </div>
            </div>

          </div>

          {/* Copyright Area */}
          <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="font-light">
              &copy; {currentYear} 가온홈시스템. All rights reserved.
            </p>
            <p className="text-slate-500 font-light text-center sm:text-right">
              본 사이트는 비디오폰 및 도어락 간편 견적 안내를 위한 단독 랜딩 페이지입니다.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Quick Menu (visible only on mobile/tablet) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-45 bg-white/95 border-t border-slate-200 p-3 flex gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.05)] backdrop-blur-md">
        <a
          href="tel:010-3977-1969"
          className="flex-1 flex items-center justify-center space-x-1.5 bg-brand-blue hover:bg-brand-blueHover text-white py-3.5 rounded-xl font-extrabold text-sm transition-all duration-300"
        >
          <Phone className="h-4.5 w-4.5" />
          <span>전화 상담</span>
        </a>
        <a
          href="sms:010-3977-1969?body=안녕하세요.%20비디오폰/도어락%20설치%20견적%20문의드립니다."
          className="flex-1 flex items-center justify-center space-x-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-brand-text py-3.5 rounded-xl font-extrabold text-sm transition-all duration-300 shadow-sm"
        >
          <MessageSquare className="h-4.5 w-4.5 text-brand-blue" />
          <span>문자 문의</span>
        </a>
        <a
          href="https://blog.naver.com/1969smj"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-500 hover:text-brand-text transition-all duration-300"
          aria-label="네이버 블로그"
        >
          <ExternalLink className="h-4.5 w-4.5" />
        </a>
      </div>
    </>
  );
}
