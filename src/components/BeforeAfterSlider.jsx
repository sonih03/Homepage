import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight, Tv, KeyRound } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState('videophone');
  const [position, setPosition] = useState(50); // 0 to 100
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // Tab configurations matching user uploaded assets
  const tabData = {
    videophone: {
      before: '/비디오폰_이전.jpg',
      after: '/비디오폰_이후.jpg',
      title: '비디오폰 교체 사례',
      desc: '기존의 오래되어 작동하지 않는 구형 매립형 인터폰을 탈거하고, 전용 고급 마감판을 적용하여 깔끔하고 슬림한 최신 7인치 컬러 비디오폰으로 완벽하게 밀착 교체 시공했습니다.'
    },
    doorlock: {
      before: '/도어락_이전.jpg',
      after: '/도어락_이후.jpg',
      title: '디지털 도어락 시공 사례',
      desc: '열쇠식 주키 손잡이가 부식되고 유격이 심했던 현관문을 보정하고, 보안성과 편의성이 뛰어난 최고급 프리미엄 지문인식 푸시풀 도어락으로 정밀 설치를 완료했습니다.'
    }
  };

  const currentData = tabData[activeTab];

  // Logic to calculate drag percentage
  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
  };

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <section className="py-24 bg-slate-50 relative border-t border-b border-slate-200/50">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">
            Real Before & After
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight mb-4">
            가온홈시스템 실제 시공 전후 비교
          </p>
          <div className="h-1 w-12 bg-brand-blue mx-auto rounded-full mb-6"></div>
          <p className="text-[#4E5968] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            중앙의 핸들바를 좌우로 드래그하여 아버님이 현장에서 직접 완성하신 비포/애프터의 완벽한 마감 차이를 비교해 보세요!
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center space-x-2 mb-8">
          <button
            onClick={() => { setActiveTab('videophone'); setPosition(50); }}
            className={`flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-bold border transition-all duration-300 ${
              activeTab === 'videophone'
                ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/15'
                : 'bg-white text-[#4E5968] border-slate-200 hover:text-brand-text hover:border-slate-300'
            }`}
          >
            <Tv className="h-4 w-4 mr-1" />
            <span>비디오폰 교체</span>
          </button>
          <button
            onClick={() => { setActiveTab('doorlock'); setPosition(50); }}
            className={`flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-bold border transition-all duration-300 ${
              activeTab === 'doorlock'
                ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/15'
                : 'bg-white text-[#4E5968] border-slate-200 hover:text-brand-text hover:border-slate-300'
            }`}
          >
            <KeyRound className="h-4 w-4 mr-1" />
            <span>도어락 설치</span>
          </button>
        </div>

        {/* Slider Card Container */}
        <div className="bg-white border border-slate-100/80 rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgb(0,0,0,0.03)]">
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-brand-text mb-2 flex items-center justify-center sm:justify-start">
              <span className="w-1.5 h-6 bg-brand-blue rounded-full mr-2.5"></span>
              {currentData.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#4E5968] font-light leading-relaxed text-center sm:text-left">
              {currentData.desc}
            </p>
          </div>

          {/* Real Interactive Slider Wrapper */}
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-md select-none border border-slate-100 cursor-ew-resize"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* After Image (Base) */}
            <img 
              src={currentData.after} 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
              alt="시공 후 사진" 
            />

            {/* Before Image (Overlay with Clip Path) */}
            <img 
              src={currentData.before} 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              alt="시공 전 사진" 
            />

            {/* Labels (Before/After Badges) */}
            <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold pointer-events-none shadow">
              시공 전 (Before)
            </div>
            <div className="absolute top-4 right-4 bg-brand-blue/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold pointer-events-none shadow">
              시공 후 (After)
            </div>

            {/* Draggable Divider Handle Line */}
            <div 
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.15)]"
              style={{ left: `${position}%` }}
            >
              {/* Inner Handle Button */}
              <div 
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xl flex items-center justify-center text-brand-blue transform -translate-x-1/2 hover:scale-110 active:scale-95 transition-transform duration-150 cursor-ew-resize select-none"
                style={{ position: 'absolute' }}
              >
                <ChevronsLeftRight className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
