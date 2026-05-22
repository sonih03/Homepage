import React from 'react';
import { Camera, ExternalLink, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const blogUrl = 'https://blog.naver.com/1969smj';

  // 3 installation categories (aligned with 3 column layout)
  const galleryItems = [
    {
      id: 1,
      category: '비디오폰 설치 사례',
      title: '아파트 구형 인터폰 마감판 & 비디오폰 시공',
      description: '기존의 크고 지저분한 구형 인터폰 탈거 후 전용 마감판을 덧대어 인테리어에 어울리는 최신 비디오폰으로 깔끔하게 설치합니다.',
      tag: 'Before & After 예정'
    },
    {
      id: 2,
      category: '디지털 도어락 설치 사례',
      title: '방화문 지문인식 푸시풀 도어락 설치',
      description: '정밀 타공 및 유격 조정을 거쳐 도어락을 견고하게 밀착 설치합니다. 문 닫힘 지연 현상과 모터 마모를 차단하는 정밀 셋팅이 진행됩니다.',
      tag: '시공 예시 예정'
    },
    {
      id: 3,
      category: '비디오폰 & 도어락 연동 사례',
      title: '거실 월패드 - 현관 도어락 무선 연동',
      description: '비디오폰 내부와 도어락 내부에 무선 통신 모듈을 삽입하여 거실 비디오폰 버튼 클릭 한 번으로 현관 도어락을 개폐할 수 있도록 연동합니다.',
      tag: '연동 셋팅 예정'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-bg relative border-t border-slate-200/50">
      <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">
            Installation Gallery
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight mb-4">
            정성홈넷 실제 시공 갤러리
          </p>
          <div className="h-1 w-12 bg-brand-blue mx-auto rounded-full mb-6"></div>
          <p className="text-[#4E5968] text-base sm:text-lg font-light leading-relaxed">
            아버님이 고양시 전역에서 직접 진행하신 생생한 작업 현장입니다. <br />
            실제 설치 사진이 업데이트될 예정이며, 아래 버튼을 통해 네이버 블로그에서 다양한 사례를 먼저 확인해 보세요.
          </p>
        </div>

        {/* Grid Gallery Placeholders (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px] hover:border-brand-blue/40 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgb(0,0,0,0.07)] hover:-translate-y-1.5"
            >
              {/* Background Accent Grid/Pattern for Placeholder feeling */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent opacity-40 pointer-events-none"></div>
              
              <div>
                {/* Header Tag Info */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-brand-blue bg-brand-blue/5 border border-brand-blue/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-[#4E5968] font-light">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-3 group-hover:text-brand-blue transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#4E5968] text-xs sm:text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Placeholder Graphic Visual Area */}
              <div className="mt-8 border border-dashed border-slate-200 bg-slate-50/50 rounded-xl p-6 flex flex-col items-center justify-center space-y-2 text-center group-hover:bg-slate-50 transition-colors duration-300">
                <div className="relative">
                  <Camera className="h-8 w-8 text-slate-300 group-hover:text-brand-blue transition-colors duration-300" />
                  <ImageIcon className="h-4 w-4 text-slate-300/60 absolute -bottom-1 -right-1" />
                </div>
                <span className="text-xs text-brand-text font-bold">현장 시공 사진 등록 예정</span>
                <span className="text-[10px] text-[#4E5968] font-light">준비된 시공 이미지가 업로드될 자리입니다.</span>
              </div>
            </div>
          ))}
        </div>

        {/* Naver Blog Redirect Callout */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 max-w-3xl mx-auto text-center shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden glass-card">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-brand-text mb-4 relative z-10">
            네이버 블로그에서 다양한 현장 사례를 확인하세요!
          </h3>
          <p className="text-[#4E5968] text-xs sm:text-sm font-light mb-8 max-w-xl mx-auto relative z-10 leading-relaxed">
            비디오폰 마감판 시공 모습, 도어락 작동 테스트, 무선 수신기 연동 등 아버님이 정성껏 기록해 두신 다양한 상세 시공 일지들이 네이버 블로그에 가득 있습니다.
          </p>
          <a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blueHover text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-brand-blue/10 transform hover:-translate-y-0.5 relative z-10"
          >
            <span>정성홈넷 블로그 바로가기</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
