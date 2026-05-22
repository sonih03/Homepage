import React from 'react';
import { Tv, KeyRound, Wifi, Video } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Tv className="h-8 w-8 text-brand-red" />,
      title: '비디오폰 설치',
      description: '아파트, 빌라, 단독주택 등 주거 형태에 맞춘 최적의 비디오폰 설치. 노후 인터폰 교체 및 지저분한 벽면 마감판 처리까지 완벽하고 깔끔하게 시공합니다.',
      features: ['코콤·코맥스 등 브랜드 취급', '아파트 국선/디지털 방식 호환', '매립형/노출형 깔끔한 마감'],
    },
    {
      icon: <KeyRound className="h-8 w-8 text-brand-red" />,
      title: '디지털 도어락 설치',
      description: '최신 푸시풀(Push-Pull), 지문인식, 스마트 카드키, 비밀번호 방식의 디지털 도어락을 정밀 설치합니다. 노후 문 처짐 현상까지 꼼꼼히 점검해 드립니다.',
      features: ['삼성·게이트맨·솔리티 등 공식 대리점', '지문·스마트폰 연동 도어락', '방화문/유리문/샤시문 맞춤 설치'],
    },
    {
      icon: <Wifi className="h-8 w-8 text-brand-red" />,
      title: '도어락 & 비디오폰 연동',
      description: '거실 비디오폰에서 방문자를 확인한 후, 현관까지 가지 않고 무선으로 도어락을 열 수 있는 연동 모듈 및 무선 송수신기를 셋팅해 드립니다.',
      features: ['원격 문열림 무선 송수신기 연동', '귀찮은 문열림 해결', '모든 제조사 호환 및 연동셋팅'],
    },
    {
      icon: <Video className="h-8 w-8 text-brand-red" />,
      title: 'CCTV 설치',
      description: '주택, 빌라, 상가 현관의 보안 사각지대를 없애는 방범용 CCTV를 설치합니다. 고화질 실시간 모니터링 모바일 앱 연동 및 안정적인 배선 작업을 보장합니다.',
      features: ['실시간 모니터링 어플 연동', '현관 앞 안심 보안 강화', '선 정리가 깔끔한 케이블 배선'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark relative border-t border-brand-border/40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-card/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-brand-red uppercase mb-3">
            Service Information
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            전문적이고 정직한 주요 서비스
          </p>
          <div className="h-1 w-12 bg-brand-red mx-auto rounded-full mb-6"></div>
          <p className="text-brand-gray text-base sm:text-lg font-light">
            정성홈넷 고양점은 오랜 시공 노하우를 바탕으로 고객님의 편의와 집안의 안전을 생각하며 최고의 기술로 만족스러운 설치를 제공합니다.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col h-full bg-brand-card border border-brand-border/60 hover:border-brand-red/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/5 hover:-translate-y-2 group"
            >
              {/* Icon Container */}
              <div className="bg-brand-red/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-red transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-brand-gray text-sm leading-relaxed mb-6 flex-grow font-light">
                {service.description}
              </p>

              {/* Bullet Features */}
              <ul className="space-y-2 pt-4 border-t border-brand-border/40">
                {service.features.map((feat) => (
                  <li key={feat} className="text-xs text-brand-gray/90 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Floating Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-sm text-brand-gray font-light">
            어떤 기기를 선택해야 할지 고민되시나요?
            <a
              href="#contact"
              className="text-brand-red hover:underline ml-2 font-semibold inline-flex items-center"
            >
              간편 견적 문의하기 &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
