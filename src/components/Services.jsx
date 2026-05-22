import React from 'react';
import { Tv, KeyRound, Wifi, ArrowRight } from 'lucide-react';

export default function Services({ onViewChange }) {
  const services = [
    {
      icon: <Tv className="h-8 w-8 text-brand-blue" />,
      title: '비디오폰 설치',
      description: '아파트, 빌라, 단독주택 등 주거 형태에 맞춘 최적의 비디오폰 설치. 노후 인터폰 교체 및 지저분한 벽면 마감판 처리까지 완벽하고 깔끔하게 시공합니다.',
      features: ['코콤·코맥스 등 브랜드 취급', '아파트 국선/디지털 방식 호환', '매립형/노출형 깔끔한 마감'],
      targetCatalog: 'videophone'
    },
    {
      icon: <KeyRound className="h-8 w-8 text-brand-blue" />,
      title: '디지털 도어락 설치',
      description: '최신 푸시풀(Push-Pull), 지문인식, 스마트 카드키, 비밀번호 방식의 디지털 도어락을 정밀 설치합니다. 노후 문 처짐 현상까지 꼼꼼히 점검해 드립니다.',
      features: ['삼성·게이트맨·솔리티 등 공식 대리점', '지문·스마트폰 연동 도어락', '방화문/유리문/샤시문 맞춤 설치'],
      targetCatalog: 'doorlock'
    },
    {
      icon: <Wifi className="h-8 w-8 text-brand-blue" />,
      title: '도어락 & 비디오폰 연동',
      description: '거실 비디오폰에서 방문자를 확인한 후, 현관까지 가지 않고 무선으로 도어락을 열 수 있는 연동 모듈 및 무선 송수신기를 셋팅해 드립니다.',
      features: ['원격 문열림 무선 송수신기 연동', '귀찮은 문열림 해결', '모든 제조사 호환 및 연동셋팅'],
      targetCatalog: 'lobbyphone' // Or general interlocking
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-bg relative border-t border-slate-200/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/30 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">
            Service Information
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight mb-4">
            전문적이고 정직한 주요 서비스
          </p>
          <div className="h-1 w-12 bg-brand-blue mx-auto rounded-full mb-6"></div>

          <p className="text-[#4E5968] text-xs sm:text-sm font-light mb-12 max-w-3xl mx-auto relative z-10 leading-relaxed text-center">
            정성홈넷은 오랜 시공 노하우를 바탕으로 고객님의 편의와 집안의 안전을 생각하며 <br className="hidden sm:inline" />
            최고의 기술로 만족스러운 설치를 제공합니다.
          </p>
        </div>

        {/* Services Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col h-full bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgb(0,0,0,0.07)] hover:border-brand-blue/40 hover:-translate-y-1.5 group"
            >
              {/* Icon Container */}
              <div className="bg-brand-blue/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-blue transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#4E5968] text-xs sm:text-sm leading-relaxed mb-6 flex-grow font-light">
                {service.description}
              </p>

              {/* Bullet Features */}
              <ul className="space-y-2.5 pt-5 border-t border-slate-100 mb-6">
                {service.features.map((feat) => (
                  <li key={feat} className="text-xs text-slate-700 flex items-center space-x-2 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* View details button linking to ProductCatalog */}
              <button
                onClick={() => onViewChange('products')}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-blue hover:text-brand-blueHover transition-colors mt-auto self-start group/btn"
              >
                <span>시공 제품 종류 및 특징 보기</span>
                <ArrowRight className="h-3.5 w-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Floating Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-[#4E5968] font-light">
            어떤 규격을 선택해야 할지 고민되시나요?
            <a
              href="#contact"
              className="text-brand-blue hover:underline ml-2 font-bold inline-flex items-center"
            >
              간편 견적 문의하기 &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
