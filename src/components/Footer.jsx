import React from 'react';
import { Phone, MessageSquare, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-brand-dark border-t border-brand-border/60 py-16 pb-28 md:pb-16 text-brand-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            
            {/* Column 1: Store info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-brand-red p-1.5 rounded">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <span className="text-white font-extrabold tracking-tight text-base">
                  정성홈넷 고양점
                </span>
              </div>
              <p className="text-xs sm:text-sm text-brand-gray/90 leading-relaxed font-light">
                고양시 비디오폰, 디지털 도어락, CCTV 설치 전문 대리점. <br />
                내 집처럼 소중히, 꼼꼼하고 깔끔하게 책임 시공합니다.
              </p>
            </div>

            {/* Column 2: Working Area */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-wide flex items-center space-x-1.5">
                <MapPin className="h-4 w-4 text-brand-red" />
                <span>출장 가능 지역</span>
              </h4>
              <p className="text-xs sm:text-sm text-brand-gray/90 leading-relaxed font-light">
                <strong className="text-white font-medium">고양시 전 지역 출장 시공</strong> <br />
                덕양구 (주교동, 원당동, 화정동, 행신동, 삼송동 등) <br />
                일산동구 (식사동, 중산동, 정발산동, 마두동, 백석동 등) <br />
                일산서구 (일산동, 탄현동, 주엽동, 대화동, 덕이동 등)
              </p>
            </div>

            {/* Column 3: Contact & Links */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-wide">고객 상담 정보</h4>
              <div className="space-y-2 text-xs sm:text-sm font-light">
                <p>
                  대표 번호 : 
                  <a href="tel:010-3977-1969" className="text-white font-bold hover:text-brand-red ml-1.5 transition-colors">
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
                    className="text-brand-red hover:underline ml-1.5 inline-flex items-center space-x-0.5 font-medium"
                  >
                    <span>blog.naver.com/1969smj</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
              </div>
            </div>

          </div>

          {/* Copyright Area */}
          <div className="border-t border-brand-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="font-light">
              &copy; {currentYear} 정성홈넷 고양점. All rights reserved.
            </p>
            <p className="text-brand-gray/60 font-light">
              본 사이트는 비디오폰 및 도어락 간편 견적 안내를 위한 단독 랜딩 페이지입니다.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Quick Menu (visible only on mobile/tablet) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-brand-dark/90 border-t border-brand-border p-3 flex gap-3 shadow-[0_-8px_30px_rgb(0,0,0,0.5)] backdrop-blur-md">
        <a
          href="tel:010-3977-1969"
          className="flex-1 flex items-center justify-center space-x-1.5 bg-brand-red hover:bg-brand-redHover text-white py-3.5 rounded-xl font-extrabold text-sm transition-all duration-300"
        >
          <Phone className="h-4.5 w-4.5" />
          <span>전화 상담</span>
        </a>
        <a
          href="sms:010-3977-1969?body=안녕하세요.%20비디오폰/도어락%20설치%20견적%20문의드립니다."
          className="flex-1 flex items-center justify-center space-x-1.5 bg-brand-card hover:bg-brand-cardHover border border-brand-border text-white py-3.5 rounded-xl font-extrabold text-sm transition-all duration-300"
        >
          <MessageSquare className="h-4.5 w-4.5 text-brand-red" />
          <span>문자 문의</span>
        </a>
        <a
          href="https://blog.naver.com/1969smj"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 flex items-center justify-center bg-brand-card hover:bg-brand-cardHover border border-brand-border rounded-xl text-brand-gray hover:text-white transition-all duration-300"
          aria-label="네이버 블로그"
        >
          <ExternalLink className="h-4.5 w-4.5" />
        </a>
      </div>
    </>
  );
}
