import React, { useState, useEffect } from 'react';
import { Tv, KeyRound, Building, Phone, ArrowLeft, ShieldCheck, Check, MessageSquare } from 'lucide-react';

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

  // Placeholder products catalog data structure
  const products = [
    {
      id: 'vp-01',
      category: 'videophone',
      categoryName: '비디오폰',
      title: '프리미엄 7인치 디지털 비디오폰',
      subtitle: '[추후 모델명 기입]',
      description: '경비실 및 공동현관 통화는 물론, 도어락 무선 연동 모듈을 장착하여 거실에서 바로 방문객 문을 열어줄 수 있는 가장 표준적인 고화질 비디오폰입니다.',
      features: [
        '7인치 와이드 고해상도 LCD 화면',
        '공동현관 / 경비실 / 현관 카메라 통화',
        '디지털 방식(국선/BUS 방식) 완벽 지원',
        '도어락 무선 개폐 연동 모듈 호환'
      ],
      specs: '화면: 7인치 | 방식: 디지털/아날로그 선택 가능 | 추천: 일반 아파트 및 빌라'
    },
    {
      id: 'vp-02',
      category: 'videophone',
      categoryName: '비디오폰',
      title: '실속형 4.3인치 미니 비디오폰',
      subtitle: '[추후 모델명 기입]',
      description: '컴팩트한 크기에 핵심 기능만을 압축한 비디오폰입니다. 원룸, 오피스텔 또는 소형 빌라에 경제적이고 깔끔하게 거치하기 좋습니다.',
      features: [
        '4.3인치 고화질 컬러 디스플레이',
        '선명한 현관 앞 모니터링 기능',
        '슬림하고 미니멀한 벽면 노출형 디자인',
        '간편하고 손쉬운 직관적 조작부'
      ],
      specs: '화면: 4.3인치 | 방식: 아날로그 | 추천: 원룸 및 소규모 빌라'
    },
    {
      id: 'dl-01',
      category: 'doorlock',
      categoryName: '디지털 도어락',
      title: '지문인식 프리미엄 푸시풀 도어락',
      subtitle: '[추후 모델명 기입]',
      description: '손잡이를 잡음과 동시에 지문 인식이 완료되는 최고급 원스텝 푸시풀 도어락입니다. 무거운 짐을 들었을 때 몸으로 밀고 나갈 수 있어 매우 편리합니다.',
      features: [
        '빠르고 정밀한 반도체식 지문 인식',
        '직관적인 밀고 당기는(Push-Pull) 방식',
        '허수 비밀번호 및 고온 경보 안심 기능',
        '스마트 비디오폰 무선 개폐 연동 지원'
      ],
      specs: '인증: 지문/번호/카드/비상키 | 방식: 푸시풀 | 추천: 아파트 방화문'
    },
    {
      id: 'dl-02',
      category: 'doorlock',
      categoryName: '디지털 도어락',
      title: '터치스크린 주키형 도어락',
      subtitle: '[추후 모델명 기입]',
      description: '클래식한 레버 손잡이 형태에 세련된 블랙 터치스크린 패널을 결합한 합리적인 고성능 도어락입니다. 뛰어난 보안 기능과 세련된 마감이 장점입니다.',
      features: [
        'LED 백라이트 터치스크린 키패드',
        '스마트 카드키 및 비밀번호 이중 인증',
        '침입 탐지 및 장난 방지 락 장치',
        '전기 충격 및 무력 개폐 차단 기술'
      ],
      specs: '인증: 번호/카드 | 방식: 레버(주키) | 추천: 주택 및 일반 방화문'
    },
    {
      id: 'lp-01',
      category: 'lobbyphone',
      categoryName: '로비폰',
      title: '아파트 공동현관 통합 로비폰',
      subtitle: '[추후 모델명 기입]',
      description: '아파트, 신축 빌라 공동현관에 설치되어 입주민의 비밀번호/카드키 출입을 통제하고 세대 호출 및 경비실 연결을 조율하는 종합 출입 통제기입니다.',
      features: [
        '세대 호출 및 선명한 영상 통화 송출',
        '비밀번호 / RF 카드 / 스마트폰 블루투스 개폐',
        '방우형 메탈 소재로 실외 가혹 환경 내구성 확보',
        '경비실 연동 및 화재 감지 문열림 시스템'
      ],
      specs: '방식: 디지털 통신 방식 | 인증: 번호/카드/앱 | 추천: 빌라 공동현관 및 아파트'
    },
    {
      id: 'lp-02',
      category: 'lobbyphone',
      categoryName: '로비폰',
      title: '슬림형 공동현관 카메라 로비폰',
      subtitle: '[추후 모델명 기입]',
      description: '벽면에 매립하기 곤란한 환경이나 슬림한 프레임 문틀에 노출형으로 깔끔하게 설치할 수 있는 컴팩트 공동현관 로비폰입니다.',
      features: [
        '고해상도 광각 카메라 렌즈 탑재',
        '슬림한 폭으로 문 프레임에 직접 부착 가능',
        '백라이트 키패드로 야간 식별 용이',
        '비디오폰 BUS 시스템 연동 규격 호환'
      ],
      specs: '방식: 디지털 통신 방식 | 특징: 슬림 노출형 | 추천: 상가 및 소형 빌라'
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

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
          <p className="text-[#4E5968] text-sm sm:text-base font-light max-w-2xl">
            정성홈넷 고양점에서 취급 및 전문 시공하고 있는 비디오폰, 도어락, 로비폰의 대략적인 분류와 상세 스펙 예시입니다. 고객님 댁의 환경에 맞는 맞춤 상담을 받아보세요.
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
                  : 'bg-white text-[#4E5968] border-slate-200 hover:text-brand-text hover:border-slate-300'
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
                <span className="text-xs text-[#4E5968] font-light block mb-4">
                  {prod.subtitle}
                </span>

                {/* Conceptual Image Placeholder */}
                <div className="aspect-video bg-slate-50 border border-dashed border-slate-200 rounded-xl mb-5 flex flex-col items-center justify-center space-y-1.5 text-center text-[#4E5968]/60 p-4">
                  <ShieldCheck className="h-6 w-6 text-slate-300" />
                  <span className="text-[11px] font-semibold text-[#4E5968]">제품 사진 및 기기 자료 등록 예정</span>
                  <span className="text-[9px] font-light">추후 실제 모델 이미지와 기능 카탈로그가 업데이트됩니다.</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4E5968] font-light leading-relaxed mb-6">
                  {prod.description}
                </p>

                {/* Features Checklist */}
                <ul className="space-y-2 mb-6">
                  {prod.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-700 font-light">
                      <Check className="h-3.5 w-3.5 text-brand-blue mr-1.5 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Specs */}
                <div className="bg-slate-50 rounded-xl p-3 text-[11px] text-[#4E5968] font-light mb-5 border border-slate-100">
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
          <p className="text-[#4E5968] text-xs sm:text-sm font-light mb-6 max-w-lg mx-auto leading-relaxed">
            아파트 공동 현관 방식(디지털 BUS 방식 또는 아날로그 국선 방식)에 따라 호환되는 비디오폰 기종이 다릅니다. 전화로 아파트 단지명을 말씀해 주시면 빠르게 알려드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:010-3977-1969"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-blueHover text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              <span>아버님께 바로 전화 상담</span>
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
