import React from 'react';
import { Phone, MessageSquare, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EEF1F4] border-t border-slate-200 py-16 text-gray-700 relative overflow-hidden">
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
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
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
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                <strong className="text-brand-text font-bold">수도권 및 전국 주요 도시 신속 출장</strong> <br />
                서울, 경기, 인천 등 수도권 전 지역 <br />
                대전, 대구, 부산, 광주 등 전국 주요 광역시 <br />
                네트워크를 통한 신속한 시공 및 예약 시공 가능
              </p>
            </div>

            {/* Column 3: Contact & Links */}
            <div className="space-y-4">
              <h4 className="text-brand-text font-bold text-sm tracking-wide">고객 상담 정보</h4>
              <div className="space-y-2 text-xs sm:text-sm font-normal">
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
            <p className="font-normal">
              &copy; {currentYear} 가온홈시스템. All rights reserved.
            </p>
            <p className="text-gray-700 font-normal text-center sm:text-right">
              본 사이트는 비디오폰 및 도어락 간편 견적 안내를 위한 단독 랜딩 페이지입니다.
            </p>
          </div>
        </div>
      </footer>
  );
}
