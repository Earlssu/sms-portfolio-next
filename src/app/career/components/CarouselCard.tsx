import './CarouselCard.css';

interface CarouselCardProps {
  index: number;
  active: number;
  total: number;
  title?: string;
  num?: string;
  imageSrc?: string;
  onClick?: () => void;
  teamSize?: string;
  category?: string;
}

const CarouselCard = ({
  index,
  active,
  total,
  title = 'Sydney',
  num = '04',
  imageSrc = 'https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=',
  onClick,
  teamSize,
  category,
}: CarouselCardProps) => {
  // 각 카드의 위치와 스타일을 계산
  const offset = index - active; // 현재 활성 카드로부터의 거리
  const absOffset = Math.abs(offset);

  // CSS 변수로 전달할 값들
  const style: React.CSSProperties & {
    '--index': number;
    '--active': number;
    '--offset': number;
    '--abs-offset': number;
    '--total': number;
  } = {
    '--index': index,
    '--active': active,
    '--offset': offset,
    '--abs-offset': absOffset,
    '--total': total,
  };

  // 카테고리별 스타일 설정
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'Blast':
        return 'bg-blue-500/20 border-blue-400/30 text-blue-200';
      case 'Side Project':
        return 'bg-green-500/20 border-green-400/30 text-green-200';
      default:
        return 'bg-gray-500/20 border-gray-400/30 text-gray-200';
    }
  };

  return (
    <div 
      className="carousel-item" 
      style={style} 
      onClick={onClick}
      data-active={index === active}
    >
      <div className="carousel-box">
        <div className="title">
          {title}

          {/* 카테고리와 팀 사이즈 정보 */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2 mb-1 sm:mb-2">
            {category && (
              <span
                className={`inline-block px-1 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs font-medium border ${getCategoryStyle(category)}`}
              >
                {category === 'Blast' ? '사내 프로젝트' : '사이드 프로젝트'}
              </span>
            )}
          </div>

          <p className={'text-white/80 text-xs sm:text-sm mt-1 sm:mt-2'}>클릭하여 자세히 보기</p>
        </div>
        <div className="num">{num}</div>
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default CarouselCard;
