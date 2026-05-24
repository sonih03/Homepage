import React, { useState, useEffect } from 'react';
import { Tv, KeyRound, Building, Phone, ArrowLeft, ShieldCheck, Check, MessageSquare } from 'lucide-react';
import { productsData } from '../productsData';

export default function ProductCatalog({ onViewChange, onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: '전체 제품군', icon: null },
    { id: 'videophone', name: '비디오폰 / 인터폰', icon: <Tv className="h-4 w-4 mr-1.5" /> },
    { id: 'doorlock', name: '디지털 도어락', icon: <KeyRound className="h-4 w-4 mr-1.5" /> },
    { id: 'lobbyphone', name: '공동현관 로비폰', icon: <Building className="h-4 w-4 mr-1.5" /> },
  ];

  const filteredProducts = activeTab === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === activeTab);

  const handleInquiry = (serviceName) => {
    // Navigate home, select service, and scroll to contact
    onSelectService(serviceName);
    onViewChange('home');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="pt-24 pb-20 bg-brand-bg min-h-screen">
      {/* Blue Radial Glow Effects */}
      <div className="absolute top-40 left-1/4 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button & Header Title */}
        <div className="flex flex-col items-start mb-10">
          <button
            onClick={() => onViewChange('home')}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-blue hover:text-brand-blueHover mb-6 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>메인 페이지로 돌아가기</span>
          </button>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight mb-3">
            시공 제품 종류 및 특징 안내
          </h1>
          <p className="text-gray-700 text-sm sm:text-base font-normal max-w-2xl">
            가온홈넷에서 취급 및 전문 시공하고 있는 비디오폰, 도어락, 로비폰의 대략적인 분류와 상세 스펙 예시입니다. 고객님 댁의 환경에 맞는 맞춤 상담을 받아보세요.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200/80 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/10'
                  : 'bg-white text-gray-700 border-slate-200 hover:text-brand-text hover:border-slate-300'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgb(0,0,0,0.06)] hover:border-brand-blue/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Product Type Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold tracking-wider text-brand-blue bg-brand-blue/5 px-2.5 py-1 rounded">
                    {prod.categoryName}
                  </span>
                  <div className="text-slate-300 group-hover:text-brand-blue transition-colors duration-300">
                    {prod.category === 'videophone' && <Tv className="h-5 w-5" />}
                    {prod.category === 'doorlock' && <KeyRound className="h-5 w-5" />}
                    {prod.category === 'lobbyphone' && <Building className="h-5 w-5" />}
                  </div>
                </div>

                {/* Product Title */}
                <h3 className="text-lg font-bold text-brand-text mb-1">
                  {prod.title}
                </h3>
                <span className="text-xs text-gray-600 font-normal block mb-3">
                  {prod.subtitle}
                </span>

                {/* Tags mapping */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {prod.tags && prod.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-bold text-brand-blue bg-brand-blue/5 px-2 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Product Image or Fallback */}
                {prod.image ? (
                  <div className="aspect-video w-full bg-slate-50 border border-slate-100 rounded-xl mb-5 flex items-center justify-center overflow-hidden p-2 relative">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="h-full w-auto object-contain max-h-[140px] transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        // Show backup icon/text
                        const parent = e.target.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector('.image-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }
                      }}
                    />
                    <div className="image-fallback hidden absolute inset-0 flex flex-col items-center justify-center space-y-1.5 text-center text-gray-600 p-4">
                      <ShieldCheck className="h-6 w-6 text-slate-400" />
                      <span className="text-[11px] font-semibold text-gray-700">제품 사진 준비중</span>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-slate-50 border border-dashed border-slate-200 rounded-xl mb-5 flex flex-col items-center justify-center space-y-1.5 text-center text-gray-600 p-4">
                    <ShieldCheck className="h-6 w-6 text-slate-400" />
                    <span className="text-[11px] font-semibold text-gray-700">제품 사진 등록 예정</span>
                    <span className="text-[9px] font-normal">추후 실제 모델 이미지와 기능 카탈로그가 업데이트됩니다.</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-700 font-normal leading-relaxed mb-6">
                  {prod.description}
                </p>

                {/* Features Checklist */}
                <ul className="space-y-2 mb-6">
                  {prod.features && prod.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-800 font-normal">
                      <Check className="h-3.5 w-3.5 text-brand-blue mr-1.5 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Specs */}
                <div className="bg-slate-50 rounded-xl p-3 text-[11px] text-gray-700 font-normal mb-5 border border-slate-100">
                  {prod.specs}
                </div>

                {/* Inquiry Button */}
                <button
                  onClick={() => handleInquiry(
                    prod.category === 'videophone' ? '비디오폰 설치' :
                    prod.category === 'doorlock' ? '디지털 도어락 설치' :
                    '비디오폰 + 도어락 무선 연동'
                  )}
                  className="w-full py-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-brand-blue hover:text-white hover:border-brand-blue text-brand-text font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>해당 제품군 시공 문의</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Call Banner */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 max-w-3xl mx-auto text-center shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>
          <h3 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">
            어떤 제품을 시공해야 할지 감이 안 잡히시나요?
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm font-normal mb-6 max-w-lg mx-auto leading-relaxed">
            아파트 공동 현관 방식(디지털 BUS 방식 또는 아날로그 국선 방식)에 따라 호환되는 비디오폰 기종이 다릅니다. 전화로 아파트 단지명을 말씀해 주시면 빠르게 알려드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:010-3977-1969"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-blueHover text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              <span>바로 전화 상담</span>
            </a>
            <button
              onClick={() => onViewChange('home')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-50 hover:bg-slate-100 text-brand-text border border-slate-200 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300"
            >
              <span>메인 화면으로 이동</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

