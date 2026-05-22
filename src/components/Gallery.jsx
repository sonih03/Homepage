import React, { useState, useEffect } from 'react';
import { Camera, ExternalLink, Image as ImageIcon, Calendar, FileText } from 'lucide-react';

export default function Gallery() {
  const blogUrl = 'https://blog.naver.com/1969smj';
  const rssUrl = 'https://rss.blog.naver.com/1969smj';
  const proxyUrl = 'https://api.allorigins.win/raw?url=';

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 완성도 높은 정적 시공 사례 데이터 (Fallback) - 최근 날짜 포함 및 기입 예정 문구 완벽 마감
  const fallbackItems = [
    {
      id: 'fallback-1',
      category: '비디오폰 설치 사례',
      title: '아파트 구형 인터폰 마감판 및 비디오폰 교체 시공',
      description: '기존의 크고 돌출된 구형 누런 마감판 인터폰을 탈거하고, 세련된 실버/화이트 전용 고급 마감판을 적용하여 슬림한 최신 비디오폰으로 깔끔하게 설치를 완료했습니다.',
      pubDate: '2026-05-20T12:00:00+09:00',
      link: 'https://blog.naver.com/1969smj',
      tag: '시공 완료'
    },
    {
      id: 'fallback-2',
      category: '디지털 도어락 설치 사례',
      title: '방화문 지문인식 프리미엄 푸시풀 도어락 단독 설치',
      description: '정밀 타공 및 유격 보정 셋팅을 완벽히 진행하여 문 닫힘 시 걸림이나 모터 부하가 생기지 않도록 깔끔하게 시공하고, 카드키 및 지문 테스트까지 마쳤습니다.',
      pubDate: '2026-05-18T10:30:00+09:00',
      link: 'https://blog.naver.com/1969smj',
      tag: '시공 완료'
    },
    {
      id: 'fallback-3',
      category: '비디오폰 & 도어락 연동 사례',
      title: '거실 월패드와 현관 디지털 도어락 무선 연동 및 수신기 셋팅',
      description: '인터폰 내부의 송신 모듈과 도어락 측 수신 모듈을 정밀 연동하여, 방문객 확인 후 거실 안쪽에서 월패드 터치 한 번으로 문을 열 수 있도록 동기화 설정을 완료했습니다.',
      pubDate: '2026-05-15T15:45:00+09:00',
      link: 'https://blog.naver.com/1969smj',
      tag: '연동 완료'
    }
  ];

  // pubDate 포맷팅 함수 (YYYY.MM.DD)
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return '';
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}.${month}.${day}`;
    } catch (e) {
      return '';
    }
  };

  useEffect(() => {
    let isMounted = true;
    
    const fetchBlogFeed = async () => {
      try {
        setLoading(true);
        // api.allorigins.win 프록시를 통해 RSS XML 데이터를 텍스트로 가져옵니다.
        const response = await fetch(`${proxyUrl}${encodeURIComponent(rssUrl)}`);
        if (!response.ok) throw new Error('RSS fetch failed');
        
        const data = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        const items = xmlDoc.getElementsByTagName('item');
        
        if (!items || items.length === 0) {
          throw new Error('No RSS items found');
        }

        const parsedPosts = [];
        // 최신 글 3개 (3열 그리드 레이아웃에 맞춤)
        const limit = Math.min(items.length, 3);
        
        for (let i = 0; i < limit; i++) {
          const item = items[i];
          const title = item.getElementsByTagName('title')[0]?.textContent || '제목 없음';
          const link = item.getElementsByTagName('link')[0]?.textContent || blogUrl;
          
          // description 태그의 HTML 제거 및 요약
          let description = item.getElementsByTagName('description')[0]?.textContent || '';
          description = description.replace(/<[^>]*>/g, '').trim();
          if (description.length > 90) {
            description = description.substring(0, 90) + '...';
          }
          
          const pubDate = item.getElementsByTagName('pubDate')[0]?.textContent || '';
          
          // 글 내용/제목 분석을 통한 카테고리 유추
          let category = '시공 사례';
          if (title.includes('비디오폰') || title.includes('인터폰') || title.includes('화면')) {
            category = '비디오폰 설치';
          } else if (title.includes('도어락') || title.includes('번호키') || title.includes('열쇠') || title.includes('도어록')) {
            category = '디지털 도어락';
          } else if (title.includes('연동') || title.includes('무선')) {
            category = '비디오폰 & 도어락 연동';
          }
          
          parsedPosts.push({
            id: `rss-${i}`,
            title,
            link,
            description: description || '현장 시공 상세 정보는 블로그 본문에서 확인하실 수 있습니다.',
            pubDate,
            category,
            tag: '네이버 블로그 피드'
          });
        }
        
        if (isMounted) {
          setPosts(parsedPosts);
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to parse blog RSS, rolling back to fallback data:', err);
        if (isMounted) {
          setPosts(fallbackItems);
          setLoading(false);
        }
      }
    };

    fetchBlogFeed();

    return () => {
      isMounted = false;
    };
  }, []);

  // 카드 그라데이션 및 아이콘 헬퍼 함수
  const getCardStyle = (index) => {
    const styles = [
      {
        gradient: 'from-[#EBF3FF] to-[#D5E6FF]',
        iconColor: 'text-[#3182F6]',
        icon: <Camera className="h-7 w-7" />
      },
      {
        gradient: 'from-[#F1F3F5] to-[#E9ECEF]',
        iconColor: 'text-[#4E5968]',
        icon: <FileText className="h-7 w-7" />
      },
      {
        gradient: 'from-[#F8F9FA] to-[#F1F3F5]',
        iconColor: 'text-[#3182F6]',
        icon: <ImageIcon className="h-7 w-7" />
      }
    ];
    return styles[index % styles.length];
  };

  return (
    <section id="gallery" className="py-24 bg-brand-bg relative border-t border-slate-200/50">
      {/* Blue Radial Glow Effects */}
      <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">
            Installation Gallery
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight mb-4">
            시공 갤러리
          </p>
          <div className="h-1 w-12 bg-brand-blue mx-auto rounded-full mb-6"></div>
          <p className="text-[#4E5968] text-base sm:text-lg font-light leading-relaxed">
            전국 각지에서 성실하게 직접 시공한 가온홈시스템의 네이버 블로그 작업 일지입니다.<br className="hidden sm:inline" />
            최신 시공 내역과 생생한 시공 현장의 모습을 확인해 보세요.
          </p>
        </div>

        {/* Loading State Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[350px] animate-pulse">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-5 bg-slate-200 w-24 rounded-full"></div>
                    <div className="h-4 bg-slate-100 w-16 rounded"></div>
                  </div>
                  <div className="h-6 bg-slate-200 w-3/4 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-100 w-full rounded"></div>
                    <div className="h-4 bg-slate-100 w-5/6 rounded"></div>
                    <div className="h-4 bg-slate-100 w-2/3 rounded"></div>
                  </div>
                </div>
                <div className="mt-8 h-28 bg-slate-50 border border-slate-100 rounded-xl"></div>
              </div>
            ))}
          </div>
        ) : (
          /* Main Feed Grid (3 Columns) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {posts.map((item, idx) => {
              const cardTheme = getCardStyle(idx);
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[350px] hover:border-brand-blue/40 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgb(0,0,0,0.07)] hover:-translate-y-1.5"
                >
                  {/* Decorative Subtle Grid Gradient */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                  
                  <div>
                    {/* Header: Category & Date */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[11px] font-bold text-brand-blue bg-brand-blue/5 border border-brand-blue/10 px-2.5 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-[11px] text-[#4E5968] font-normal flex items-center space-x-1">
                        <Calendar className="h-3 w-3 inline text-slate-400" />
                        <span>{formatDate(item.pubDate)}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-brand-text mb-3 leading-snug group-hover:text-brand-blue transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#4E5968] text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Visual Card Graphic (Hotlinking-proof) */}
                  <div className={`mt-6 border border-slate-100 bg-gradient-to-br ${cardTheme.gradient} rounded-xl p-5 flex flex-col items-center justify-center space-y-2 text-center transition-all duration-300 relative overflow-hidden h-28`}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 rounded-full blur-xl pointer-events-none"></div>
                    <div className={`${cardTheme.iconColor} relative z-10 transition-transform duration-300 group-hover:scale-110`}>
                      {cardTheme.icon}
                    </div>
                    <span className="text-[11px] text-brand-text font-bold relative z-10 flex items-center space-x-1">
                      <span>시공 일지 바로가기</span>
                      <ExternalLink className="h-3 w-3 inline opacity-70" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* Naver Blog Redirect Callout */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 max-w-3xl mx-auto text-center shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden glass-card">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-brand-text mb-4 relative z-10">
            네이버 블로그에서 다양한 현장 사례를 확인하세요!
          </h3>
          {/* <p className="text-[#4E5968] text-xs sm:text-sm font-light mb-8 max-w-xl mx-auto relative z-10 leading-relaxed">
            비디오폰 마감판 시공 모습, 도어락 작동 테스트, 무선 수신기 연동 등 직접 작업한 다양한 상세 시공 일지들을 볼 수 있습니다.
          </p> */}
          <p className="text-[#4E5968] text-xs sm:text-sm font-light mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed">
            비디오폰 마감판 시공 모습, 도어락 작동 테스트, 무선 수신기 연동 등 <br class="hidden sm:inline" />
            직접 작업한 다양한 상세 시공 일지들을 볼 수 있습니다.
</p>
          <a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blueHover text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-brand-blue/10 transform hover:-translate-y-0.5 relative z-10"
          >
            <span>블로그 바로가기</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
