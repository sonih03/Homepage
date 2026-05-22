import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, MessageSquare, AlertCircle, X } from 'lucide-react';

export default function ContactForm({ selectedService, resetSelectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '비디오폰 설치',
    address: '',
    memo: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const servicesList = [
    '비디오폰 설치',
    '디지털 도어락 설치',
    '비디오폰 + 도어락 무선 연동',
    '공동현관 로비폰 설치',
    '기타 설치 및 수리 문의',
  ];

  // Set selected service from product catalog redirect
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
      if (resetSelectedService) {
        resetSelectedService();
      }
    }
  }, [selectedService, resetSelectedService]);

  // Auto format phone number (e.g. 010-1234-5678)
  const handlePhoneChange = (e) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, '');
    let formattedVal = rawVal;
    if (rawVal.length > 3 && rawVal.length <= 7) {
      formattedVal = `${rawVal.slice(0, 3)}-${rawVal.slice(3)}`;
    } else if (rawVal.length > 7) {
      formattedVal = `${rawVal.slice(0, 3)}-${rawVal.slice(3, 7)}-${rawVal.slice(7, 11)}`;
    }
    setFormData({ ...formData, phone: formattedVal });
    if (errors.phone) {
      setErrors({ ...errors, phone: null });
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = '성함을 입력해 주세요.';
    if (!formData.phone.trim()) {
      newErrors.phone = '연락처를 입력해 주세요.';
    } else if (!/^01[016789]-\d{3,4}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = '올바른 휴대폰 번호 형식(010-0000-0000)으로 입력해 주세요.';
    }
    if (!formData.agree) newErrors.agree = '개인정보 수집 및 이용에 동의하셔야 신청이 가능합니다.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  // Compile SMS text message
  const getSmsUrl = () => {
    const message = `[정성홈넷 견적신청]
이름: ${formData.name}
연락처: ${formData.phone}
의뢰항목: ${formData.service}
지역/주소: ${formData.address || '미지정(전화협의)'}
문의내용: ${formData.memo || '없음'}`;
    
    return `sms:010-3977-1969?body=${encodeURIComponent(message)}`;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      service: '비디오폰 설치',
      address: '',
      memo: '',
      agree: false,
    });
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg relative border-t border-slate-200/50">
      
      {/* Background decoration */}
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">
            Quick Estimate
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight mb-4">
            간편 모바일 견적 문의
          </p>
          <div className="h-1 w-12 bg-brand-blue mx-auto rounded-full mb-6"></div>
          <p className="text-[#4E5968] text-base font-light max-w-xl mx-auto">
            시공이 필요하신 항목을 선택하여 문의를 남겨주시면, 내용 확인 후 신속하고 정직하게 전화상담을 도와드립니다.
          </p>
        </div>

        {/* Contact Form Card (Pure White) */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] glass-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-brand-text mb-2">
                  고객 성함 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="예: 홍길동"
                  className={`w-full bg-slate-50 border ${
                    errors.name ? 'border-red-500' : 'border-slate-200'
                  } rounded-xl px-4 py-3 text-brand-text placeholder-slate-400 focus:bg-white transition-all duration-300`}
                />
                {errors.name && (
                  <p className="mt-2 text-xs text-red-500 flex items-center space-x-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-brand-text mb-2">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="예: 010-1234-5678"
                  maxLength={13}
                  className={`w-full bg-slate-50 border ${
                    errors.phone ? 'border-red-500' : 'border-slate-200'
                  } rounded-xl px-4 py-3 text-brand-text placeholder-slate-400 focus:bg-white transition-all duration-300`}
                />
                {errors.phone && (
                  <p className="mt-2 text-xs text-red-500 flex items-center space-x-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Service Select (Chips style) */}
            <div>
              <span className="block text-sm font-bold text-brand-text mb-3">
                설치/시공 항목 선택 <span className="text-red-500">*</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {servicesList.map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: srv })}
                    className={`py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-300 text-left flex items-center justify-between ${
                      formData.service === srv
                        ? 'bg-brand-blue/5 border-brand-blue text-brand-blue shadow-sm'
                        : 'bg-slate-50/50 border-slate-200 text-slate-600 hover:text-brand-text hover:border-slate-300'
                    }`}
                  >
                    <span>{srv}</span>
                    {formData.service === srv && (
                      <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Address Input */}
            <div>
              <label htmlFor="address" className="block text-sm font-bold text-brand-text mb-2">
                시공 지역 / 주소 <span className="text-[#4E5968] text-xs font-normal">(예: 고양시 덕양구 화정동)</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="상세 주소가 아닌 동 단위까지만 입력해 주셔도 무방합니다."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-brand-text placeholder-slate-400 focus:bg-white transition-all duration-300"
              />
            </div>

            {/* Memo Textarea */}
            <div>
              <label htmlFor="memo" className="block text-sm font-bold text-brand-text mb-2">
                상세 문의 사항
              </label>
              <textarea
                id="memo"
                name="memo"
                value={formData.memo}
                onChange={handleInputChange}
                rows={4}
                placeholder="교체를 희망하는 대략적인 기존 모델명, 공동현관 로비폰 유무, 문 두께 등 요청 사항을 기재해 주시면 보다 정확한 견적이 가능합니다."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-brand-text placeholder-slate-400 focus:bg-white transition-all duration-300 resize-none"
              />
            </div>

            {/* Privacy Agreement */}
            <div className="pt-4 border-t border-slate-100">
              <label className="flex items-start space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleInputChange}
                  className="mt-1 h-4.5 w-4.5 rounded border-slate-300 text-brand-blue focus:ring-brand-blue transition-all cursor-pointer"
                />
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-brand-text group-hover:text-brand-blue transition-colors duration-300">
                    개인정보 수집 및 이용 동의 <span className="text-red-500 font-bold">(필수)</span>
                  </span>
                  <span className="text-[10px] text-[#4E5968] mt-1 font-light leading-relaxed">
                    작성해 주신 정보는 견적 상담 제공 목적으로만 일시 보관되며, 상담 후 완전 파기됩니다.
                  </span>
                </div>
              </label>
              {errors.agree && (
                <p className="mt-2 text-xs text-red-500 flex items-center space-x-1 text-left">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.agree}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-blueHover text-white py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-brand-blue/10 transform hover:-translate-y-0.5"
              >
                <Send className="h-5 w-5" />
                <span>간편 견적 문의 완료하기</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal (Premium White Card) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
            
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-brand-text transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Check Icon */}
            <div className="mx-auto bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-brand-text mb-2">
              견적 문의 접수 준비 완료!
            </h3>
            <p className="text-[#4E5968] text-xs sm:text-sm font-light mb-6">
              입력하신 문의 내역이 정리되었습니다. 아래 버튼을 눌러 문자를 전송해 주시면 바로 신청이 접수됩니다.
            </p>

            {/* Form details box */}
            <div className="bg-slate-50 rounded-xl p-4 text-left text-xs space-y-2 mb-6 border border-slate-100">
              <div><span className="text-[#4E5968]">의뢰인:</span> <span className="text-brand-text font-bold">{formData.name}님</span></div>
              <div><span className="text-[#4E5968]">연락처:</span> <span className="text-brand-text font-bold">{formData.phone}</span></div>
              <div><span className="text-[#4E5968]">설치항목:</span> <span className="text-brand-blue font-bold">{formData.service}</span></div>
              <div><span className="text-[#4E5968]">시공지역:</span> <span className="text-brand-text">{formData.address || '미지정'}</span></div>
            </div>

            {/* Modal Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={getSmsUrl()}
                onClick={handleCloseModal}
                className="flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-blueHover text-white py-3 rounded-xl font-bold text-sm transition-all duration-300"
              >
                <MessageSquare className="h-4 w-4" />
                <span>문자로 즉시 전송</span>
              </a>
              <a
                href="tel:010-3977-1969"
                onClick={handleCloseModal}
                className="flex items-center justify-center space-x-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-brand-text py-3 rounded-xl font-bold text-sm transition-all duration-300"
              >
                <Phone className="h-4 w-4 text-brand-blue" />
                <span>전화로 문의하기</span>
              </a>
            </div>
            
            <button
              onClick={handleCloseModal}
              className="mt-4 text-xs text-[#4E5968] hover:text-brand-text underline transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
